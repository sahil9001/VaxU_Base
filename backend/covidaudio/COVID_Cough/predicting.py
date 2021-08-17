import tensorflow as tf 
import cv2
import matplotlib.pyplot as plt
import pathlib
from pathlib import Path
import librosa, librosa.display
from keras.models import model_from_json
import os
BASE_DIR = Path(__file__).resolve().parent.parent
import numpy as np

def spectrogram_from_wav_prediction(path, save_to=str(BASE_DIR) + str(os.path.join('/COVID_Cough/test_data/test_spectrograms'))):
    
    '''
    DOCSTRING:

    Function which returns a spectrogram given a .wav file. 

    Input x: audio file in wav format 

    output img: spectrogram with no axis

    '''
    json_file = open(str(BASE_DIR) + str(os.path.join('/COVID_Cough/model.json')), 'r')
    loaded_model_json = json_file.read()
    json_file.close()
    loaded_model = model_from_json(loaded_model_json)
    # load weights into new model
    loaded_model.load_weights(str(BASE_DIR) + str(os.path.join('/COVID_Cough/model.h5')))
    loaded_model.compile(loss='binary_crossentropy',
              optimizer='rmsprop',
              metrics=['accuracy'])
    print("Loaded model from disk")
    #new_model = tf.keras.models.load_model(str(BASE_DIR) + str(os.path.join('/COVID_Cough/covid_cough_model.h5')))
    filename = path
    x, sr = librosa.load(filename, mono=True,  dtype=np.float32)
    plt.specgram(x, NFFT=2048, Fs=2, Fc=0, noverlap=128, cmap='inferno', sides='default', mode='default', scale='dB')
    plt.axis('off')
    plt.savefig(f"{save_to}/{path[-5]}.png")
    plt.clf()

    img = cv2.imread(f"{save_to}/{path[-5]}.png")
    img = cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
    img = img.reshape(1,960,320,3)

    prediction = loaded_model.predict(img)
    return prediction
