import os
import json
import random
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder='static', static_url_path='')
CORS(app)

DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'database.json')

def read_db():
    if not os.path.exists(DB_PATH):
        return {"patients": []}
    try:
        with open(DB_PATH, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error reading DB: {e}")
        return {"patients": []}

def write_db(data):
    try:
        with open(DB_PATH, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        return True
    except Exception as e:
        print(f"Error writing DB: {e}")
        return False

# Serve static frontend files
@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)

# API: Get all patients
@app.route('/api/patients', methods=['GET'])
def get_patients():
    db = read_db()
    return jsonify(db.get("patients", []))

# API: Get single patient details
@app.route('/api/patients/<patient_id>', methods=['GET'])
def get_patient(patient_id):
    db = read_db()
    for patient in db.get("patients", []):
        if patient["id"] == patient_id:
            return jsonify(patient)
    return jsonify({"error": "Patient not found"}), 404

# API: Register new patient
@app.route('/api/patients', methods=['POST'])
def create_patient():
    db = read_db()
    data = request.json or {}
    
    # Required fields
    name = data.get('name')
    if not name:
        return jsonify({"error": "Name is required"}), 400
        
    # Generate unique ID in CP-XXXX-XX format
    patient_id = f"CP-{random.randint(1000, 9999)}-{random.randint(10, 99)}"
    
    # Generate default credentials for privacy access or use custom ones
    name_parts = name.split()
    first_name = name_parts[0].lower() if name_parts else "user"
    first_name_clean = "".join(c for c in first_name if c.isalnum())
    
    username = data.get('username')
    if username:
        username = username.strip().lower()
        # Validate uniqueness
        for patient in db.get("patients", []):
            if patient.get("username", "").lower() == username:
                return jsonify({"error": "Username already exists"}), 409
        for doctor in db.get("doctors", []):
            if doctor.get("username", "").lower() == username:
                return jsonify({"error": "Username already exists"}), 409
    else:
        while True:
            username = f"{first_name_clean}{random.randint(100, 999)}"
            exists = False
            for patient in db.get("patients", []):
                if patient.get("username", "").lower() == username:
                    exists = True
                    break
            if not exists:
                break
                
    password = data.get('password')
    if not password:
        password = f"cp{random.randint(1000, 9999)}"
        
    new_patient = {
      "id": patient_id,
      "username": username,
      "password": password,
      "name": name,
      "dateOfBirth": data.get('dateOfBirth', ''),
      "nationality": data.get('nationality', 'Not Specified'),
      "languages": data.get('languages', ['English']),
      "bloodGroup": data.get('bloodGroup', 'Not Specified'),
      "allergies": data.get('allergies', []),
      "chronicConditions": data.get('chronicConditions', []),
      "medications": data.get('medications', []),
      "immunizations": data.get('immunizations', []),
      "emergencyContact": data.get('emergencyContact', {"name": "", "relation": "", "phone": ""}),
      "timeline": data.get('timeline', []),
      "assignedDoctor": data.get('assignedDoctor', 'Not Specified')
    }
    
    db["patients"].append(new_patient)
    write_db(db)
    return jsonify(new_patient), 201

# API: Auth login
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json or {}
    username = data.get('username')
    password = data.get('password')
    role = data.get('role')
    
    if not username or not password or not role:
        return jsonify({"error": "Missing username, password, or role"}), 400
        
    db = read_db()
    
    if role == 'doctor':
        username_lower = username.strip().lower()
        for doctor in db.get("doctors", []):
            if doctor["username"].strip().lower() == username_lower and doctor["password"] == password:
                return jsonify({
                    "status": "success",
                    "role": "doctor",
                    "doctorName": doctor["name"]
                })
        return jsonify({"error": "Invalid doctor credentials"}), 401
        
    elif role == 'patient':
        username_lower = username.strip().lower()
        for patient in db.get("patients", []):
            db_username = patient.get("username", "").strip().lower()
            db_id = patient.get("id", "").strip().lower()
            # Allow both "carlos" and "caarlos" for Carlos Mendoza
            is_match = (db_username == username_lower) or (db_username == "carlos" and username_lower == "caarlos") or (db_id == username_lower)
            if is_match and patient.get("password") == password:
                return jsonify({
                    "status": "success",
                    "role": "patient",
                    "patientId": patient["id"]
                })
        return jsonify({"error": "Invalid patient credentials"}), 401
        
    return jsonify({"error": "Invalid role"}), 400

# API: Add entry to patient timeline (cross-border check)
@app.route('/api/patients/<patient_id>/timeline', methods=['POST'])
def add_timeline_entry(patient_id):
    db = read_db()
    data = request.json or {}
    
    # Required fields
    date = data.get('date')
    clinic_name = data.get('clinicName')
    location = data.get('location')
    reason = data.get('reason')
    
    if not all([date, clinic_name, location, reason]):
        return jsonify({"error": "Missing required timeline fields (date, clinicName, location, reason)"}), 400
        
    for patient in db.get("patients", []):
        if patient["id"] == patient_id:
            new_entry = {
                "date": date,
                "clinicName": clinic_name,
                "location": location,
                "reason": reason,
                "diagnosis": data.get('diagnosis', 'Not Specified'),
                "treatment": data.get('treatment', 'Not Specified'),
                "doctor": data.get('doctor', 'Not Specified'),
                "notes": data.get('notes', '')
            }
            patient["timeline"].insert(0, new_entry) # Add to start (most recent first)
            write_db(db)
            return jsonify(new_entry), 201
            
    return jsonify({"error": "Patient not found"}), 404

# API: AI Medical History Reconstruction Builder (Simulated Parsing)
@app.route('/api/ai-reconstruct', methods=['POST'])
def ai_reconstruct():
    data = request.json or {}
    transcripts = data.get('transcripts', [])
    
    # In a real-world system, we would prompt Gemini or an LLM with the dialogue.
    # Here, we parse the conversational dialogue text to simulate intelligent medical text extraction.
    full_text = " ".join(transcripts).lower()
    
    extracted_allergies = []
    extracted_conditions = []
    extracted_medications = []
    extracted_immunizations = []
    
    # Simple rule-based mock extractor for demo conversations
    if "penicillin" in full_text:
        extracted_allergies.append("Penicillin")
    if "latex" in full_text:
        extracted_allergies.append("Latex")
    if "sulfa" in full_text:
        extracted_allergies.append("Sulfa Drugs")
    if "aspirin" in full_text:
        extracted_allergies.append("Aspirin")
        
    if "diabetes" in full_text or "sugar" in full_text:
        extracted_conditions.append("Type 1 Diabetes Mellitus")
    if "pressure" in full_text or "hypertension" in full_text:
        extracted_conditions.append("Hypertension (High Blood Pressure)")
    if "asthma" in full_text or "inhaler" in full_text or "breathing" in full_text:
        extracted_conditions.append("Moderate Persistent Asthma")
        
    if "insulin" in full_text or "lantus" in full_text or "humalog" in full_text:
        extracted_medications.append({
            "name": "Insulin",
            "dosage": "As prescribed",
            "purpose": "Diabetes Control"
        })
    if "amlodipine" in full_text or "blood pressure pill" in full_text:
        extracted_medications.append({
            "name": "Amlodipine Besylate",
            "dosage": "5mg once daily",
            "purpose": "Blood Pressure Control"
        })
    if "advair" in full_text or "daily pump" in full_text:
        extracted_medications.append({
            "name": "Fluticasone/Salmeterol (Advair)",
            "dosage": "1 puff twice daily",
            "purpose": "Asthma Controller"
        })
    if "albuterol" in full_text or "emergency pump" in full_text:
        extracted_medications.append({
            "name": "Albuterol HFA",
            "dosage": "2 puffs as needed for wheezing",
            "purpose": "Rescue Inhaler"
        })

    if "tetanus" in full_text or "tdap" in full_text:
        extracted_immunizations.append({
            "disease": "Tetanus (Tdap)",
            "date": "Approx. 2024",
            "location": "Community Clinic (Recall)"
        })
    if "covid" in full_text or "vaccine" in full_text:
        extracted_immunizations.append({
            "disease": "COVID-19",
            "date": "Approx. 2023",
            "location": "Mobile Health Unit (Recall)"
        })
    if "flu" in full_text:
        extracted_immunizations.append({
            "disease": "Influenza (Seasonal)",
            "date": "Recent Year",
            "location": "Mobile Health Unit (Recall)"
        })
        
    # Generate structured JSON
    structured_data = {
        "allergies": list(set(extracted_allergies)),
        "chronicConditions": list(set(extracted_conditions)),
        "medications": extracted_medications,
        "immunizations": extracted_immunizations,
        "raw_text_analyzed": full_text
    }
    
    return jsonify(structured_data)

# API: Get all verifications
@app.route('/api/verifications', methods=['GET'])
def get_verifications():
    db = read_db()
    return jsonify(db.get("verifications", []))

# API: Submit a verification request
@app.route('/api/verifications', methods=['POST'])
def create_verification():
    db = read_db()
    data = request.json or {}
    
    patient_id = data.get('patientId')
    symptoms = data.get('symptoms')
    ai_suggestion = data.get('aiSuggestion')
    doctor = data.get('selectedDoctor', 'Not Specified')
    
    if not all([patient_id, symptoms, ai_suggestion]):
        return jsonify({"error": "Missing required verification fields (patientId, symptoms, aiSuggestion)"}), 400
        
    # Generate verification ID in V-XXXX-XX format
    verification_id = f"V-{random.randint(1000, 9999)}-{random.randint(10, 99)}"
    
    # Get patient details to include their name
    patient_name = "Unknown Patient"
    for patient in db.get("patients", []):
        if patient["id"] == patient_id:
            patient_name = patient["name"]
            break
            
    new_verification = {
        "id": verification_id,
        "patientId": patient_id,
        "patientName": patient_name,
        "symptoms": symptoms,
        "aiSuggestion": ai_suggestion,
        "selectedDoctor": doctor,
        "date": data.get('date', ''),
        "status": "pending"
    }
    
    if "verifications" not in db:
        db["verifications"] = []
    db["verifications"].append(new_verification)
    write_db(db)
    return jsonify(new_verification), 201

# API: Approve a verification request
@app.route('/api/verifications/<verification_id>/approve', methods=['POST'])
def approve_verification(verification_id):
    db = read_db()
    verifications = db.get("verifications", [])
    
    target_verification = None
    for v in verifications:
        if v["id"] == verification_id:
            target_verification = v
            break
            
    if not target_verification:
        return jsonify({"error": "Verification request not found"}), 404
        
    target_verification["status"] = "approved"
    
    # Apply to patient timeline and medications
    patient_id = target_verification["patientId"]
    ai_suggestion = target_verification["aiSuggestion"]
    doctor = target_verification["selectedDoctor"]
    
    new_timeline_entry = {
        "date": target_verification.get("date", ""),
        "clinicName": "CarePassport Virtual Assistant (Refill Approved)",
        "location": "Online Verification",
        "reason": f"Symptom Check & Refill Review: {target_verification['symptoms']}",
        "diagnosis": f"Review of AI suggested: {ai_suggestion}",
        "treatment": f"Approved AI action: {ai_suggestion}",
        "doctor": doctor,
        "notes": f"Doctor verified and signed off on this AI-suggested care plan."
    }
    
    # Update patient details
    for patient in db.get("patients", []):
        if patient["id"] == patient_id:
            patient["timeline"].insert(0, new_timeline_entry)
            
            lower_sugg = ai_suggestion.lower()
            parsed_med = None
            if "albuterol" in lower_sugg:
                parsed_med = {
                    "name": "Albuterol HFA",
                    "dosage": "2 puffs as needed for wheezing",
                    "purpose": "Rescue Inhaler"
                }
            elif "advair" in lower_sugg:
                parsed_med = {
                    "name": "Fluticasone/Salmeterol (Advair)",
                    "dosage": "1 puff twice daily",
                    "purpose": "Asthma Controller"
                }
            elif "insulin" in lower_sugg:
                parsed_med = {
                    "name": "Insulin",
                    "dosage": "As prescribed",
                    "purpose": "Diabetes Control"
                }
            elif "amlodipine" in lower_sugg:
                parsed_med = {
                    "name": "Amlodipine Besylate",
                    "dosage": "5mg once daily",
                    "purpose": "Blood Pressure Control"
                }
                
            if parsed_med:
                exists = False
                for m in patient.get("medications", []):
                    if m["name"].lower() == parsed_med["name"].lower():
                        exists = True
                        break
                if not exists:
                    patient["medications"].append(parsed_med)
            break
            
    write_db(db)
    return jsonify(target_verification), 200

# API: Reject a verification request
@app.route('/api/verifications/<verification_id>/reject', methods=['POST'])
def reject_verification(verification_id):
    db = read_db()
    verifications = db.get("verifications", [])
    
    target_verification = None
    for v in verifications:
        if v["id"] == verification_id:
            target_verification = v
            break
            
    if not target_verification:
        return jsonify({"error": "Verification request not found"}), 404
        
    target_verification["status"] = "rejected"
    write_db(db)
    return jsonify(target_verification), 200

if __name__ == '__main__':
    # Ensure static directory exists
    os.makedirs(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static'), exist_ok=True)
    app.run(host='127.0.0.1', port=5000, debug=True, use_reloader=False)
