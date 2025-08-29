# backend/tts_handler.py

import torch
from TTS.api import TTS
from TTS.tts.configs.xtts_config import XttsConfig
from TTS.tts.models.xtts import XttsAudioConfig, XttsArgs
from TTS.config.shared_configs import BaseDatasetConfig

# allow XTTS classes for full checkpoint unpickling under PyTorch 2.1+
torch.serialization.add_safe_globals([
    XttsConfig,
    XttsAudioConfig,
    BaseDatasetConfig,
    XttsArgs
])

# initialize Coqui XTTS once at import time
tts = TTS(
    model_name="tts_models/multilingual/multi-dataset/xtts_v2",
    progress_bar=False,
    gpu=False
)

def generate_tts_audio(
    text: str,
    speaker_wav: str = "voice_sample.wav",
    file_path: str = "output.wav"
) -> str:
    """
    Synthesize `text` with the voice from `speaker_wav` and save to `file_path`.
    Returns the path of the generated audio.
    """
    tts.tts_to_file(text=text, speaker_wav=speaker_wav, file_path=file_path)
    return file_path
