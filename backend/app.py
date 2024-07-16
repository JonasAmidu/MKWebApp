from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configure email settings
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")

@app.route('/send-email', methods=['POST'])
def send_email():
    try:
        # Get details from the request
        customer_name = request.json.get('name')
        customer_email = request.json.get('email')
        customer_message = request.json.get('message')
        
        if not all([customer_name, customer_email, customer_message]):
            return jsonify({"error": "Missing data"}), 400

        # Create the email content
        msg = MIMEMultipart()
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = 'mackeatingmusic@gmail.com'
        msg['Subject'] = 'New Customer Inquiry'

        body = f"Name: {customer_name}\nEmail: {customer_email}\nMessage: {customer_message}"
        msg.attach(MIMEText(body, 'plain'))

        # Send the email
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.send_message(msg)

        return jsonify({"message": "Email sent successfully"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
