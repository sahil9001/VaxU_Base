import tensorflow as tf 
import cv2
import matplotlib.pyplot as plt
import pathlib
from pathlib import Path
import librosa, librosa.display
import os
BASE_DIR = Path(__file__).resolve().parent.parent


def spectrogram_from_wav_prediction(path, save_to=str(BASE_DIR) + str(os.path.join('/COVID_Cough/test_data/test_spectrograms'))):
    
    '''
    DOCSTRING:

    Function which returns a spectrogram given a .wav file. 

    Input x: audio file in wav format 

    output img: spectrogram with no axis

    '''
    new_model = tf.keras.models.load_model(str(BASE_DIR) + str(os.path.join('/COVID_Cough/covid_cough_model3.h5')))
    filename = path
    x, sr = librosa.load(filename, mono=True)
    plt.specgram(x, NFFT=2048, Fs=2, Fc=0, noverlap=128, cmap='inferno', sides='default', mode='default', scale='dB')
    plt.axis('off')
    plt.savefig(f"{save_to}/{path[-5]}.png")
    plt.clf()

    img = cv2.imread(f"{save_to}/{path[-5]}.png")
    img = cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
    img = img.reshape(1,480,640,3)

    prediction = new_model.predict(img)
    return prediction
