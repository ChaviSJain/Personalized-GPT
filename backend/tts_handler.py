import requests
from config import ELEVENLABS_API_KEY, VOICE_ID

def generate_tts_audio(text):
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"
    headers = {
        "xi-api-key": ELEVENLABS_API_KEY,
        "Content-Type": "application/json"
    }
    payload = {
        "text": text,
        "voice_settings": {"stability": 0.5, "similarity_boost": 0.75}
    }
    response = requests.post(url, json=payload, headers=headers)
    with open("output.mp3", "wb") as f:
        f.write(response.content)
    return "output.mp3"
