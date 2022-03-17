import os
from flask import Flask, jsonify

meme_info = {
    { "name": "Change my mind", "imagePath": "./change_my_mind.webp", "year": "2018" },
    { "name": "Success Kid", "imagePath": "./success_kid.jpg", "year": "2016" },
    { "name": "Shut up and take my money", "imagePath": "", "year": "2016" },
    { "name": "That Escalated Quickly", "imagePath": "", "year": "2004" },
    { "name": "Disaster girl", "imagePath": "", "year": "2004" },
    { "name": "Exit 12", "imagePath": "", "year": "2004" },
    { "name": "Distracted boyfriend", "imagePath": "", "year": "2015" },
    { "name": "Doge", "imagePath": "", "year": "2010" },
    { "name": "First World Problems", "imagePath": "", "year": "1995" }
}

app = Flask(__name__)
environment = os.getenv('APP_ENVIRONMENT')

@app.route('/health')
def health():
    return 'Meme reviewer is working successfully!'

@app.route('/api/meme')
def get_meme_info():
    return jsonify(meme_info)
