from fastapi import FastAPI, UploadFile, Form
from gpt_handler import get_gpt_response
from tts_handler import generate_tts_audio
from stt_handler import transcribe_audio
from fastapi.responses import FileResponse

app = FastAPI()

@app.post("/chat")
async def chat(message: dict):
    user_input = message["text"]
    reply = get_gpt_response(user_input)
    audio_path = generate_tts_audio(reply)
    return {"response": reply, "audio": audio_path}

@app.post("/stt")
async def stt(file: UploadFile):
    file_path = f"temp_{file.filename}"
    with open(file_path, "wb") as f:
        f.write(await file.read())
    text = transcribe_audio(file_path)
    return {"transcription": text}

@app.post("/upload-voice")
async def upload_voice(file: UploadFile):
    file_path = "voice_sample.wav"
    with open(file_path, "wb") as f:
        f.write(await file.read())
    return {"status": "Voice sample uploaded successfully"}

@app.get("/audio")
def get_audio():
    return FileResponse("output.wav", media_type="audio/wav")