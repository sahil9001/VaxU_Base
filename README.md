# Team - NEXA

## Problem :

The Covid19 pandemic has taken over the entire world. It has caused millions of deaths and socio economic loss. After months of combined efforts, our scientists have finally developed vaccines against the virus.

However, now the challenge is to **vaccinate the population**. For any country, vaccinating the entire population quickly, securely and effectively is a tough challenge. We need a well designed solution to address this problem.

## Solution :

# VaxU

Here is **Team NEXA** with -

**_A complete solution with a personalised app and admin portal, with a special cough based covid testing module, social distancing monitor and KYC verification model, which will make the process convenient, effective and hassle free._**

### **Features of VaxU** - _Artificial Intelligence & Machine Learning Models_

1. ML - Covid Cough Detection
   - This is a model which takes coughing audio of the patient as input and then predicts if the patient is suffering from covid-19 or not.
   - The 9 sound categories (or classes) are chosen such that physical state of the respiratory system is well captured just by using the sound samples. We tested the complementarity across these sound categories by building a multi-class classifier trained and tested on acoustic features extracted from the different sound samples. The goal was to build a9-class (corresponding to the 9 sound categories) classifier and evaluate the confusion matrix. The clean audio recordings were pooled and grouped by 9 sound categories. A set of different short-time (500msec, with hop of 100msec) temporal and spectral acoustic features were extracted from the audio files. These included spectral contrast(7-D), MFCCs (13-D), spectral roll-off (1-D), spectral centroid(1-D), mean square energy (1-D), polynomial fit to the spectrum (2-D), zero-crossing rate (1-D), spectral bandwidth (1-D),and spectral flatness (1−D).
   - We are converting audio of the cough to the image using librosa.
   - Training the images of the audio in Convolutional Neural Network(CNN) model for 100 epochs using keras and tensorflow.
   - And further we input the audio of the patient and it predicts either 0 or 1 , where 0 means the patient is covid negative and 1 means the patient is covid positive.
2. AI - Adhaar Card Details Validation
   - In this model we are validating every information given in the aadhaar card with the details filed by the patient in the vaccination application form .
   - We are achieving this with help of pytesseract library which helps in Optical Character Recognition
   - We are applying different kernels and image processing methods in order to get the best result from aadhar card.
   - In future we are thinking OTP verification too , In order to increase our security.
3. AI - Face Recognition
   - In this model we are validating that the person who filed the form is the same person getting vaccinated at the center.
   - To achieve this we are taking a picture of the person while filing the vaccination application form and validating the image with the person's face who came at the hospital for vaccination, we are using face_recognititon library in order to get perfect accuracy.

### **Features of VaxU** - _Web_

1. FrontEnd :
   - The website facilitates only admin portal, It is not for patients or general public.
   - Only authorized doctors and institutions with valid credentials (that will be provided to them by us) can access the admin portal.
   - All data related to vaccinations like cost per vaccine, number of vaccines, availability of doctors etc. can be monitored using the admin portal.
   - Webcam facility is available for the officials to verify the identity of the patient.
   - The officials can monitor the vaccination process through the user friendly UI.
   - The Web Application provides **Crowd Management** feature through time sorted vaccination for the patients i.e. Every patient is alloted specific time slot so as to prevent crowd formation.
2. BackEnd :
   - Proper Authenticated system
   - Two different profiles for patients and authenticated officials are present
   - Time slots are assigned to every patient according to availability, locality and age i.e. people at high risk are given priority.

### **Features of VaxU** - _Mobile Application_

- Statistics of total cases, death, recovery etc. can be viewed at the **Home Screen**
- Local Information related to Covid19 can be viewed at the **City** tab
- Nearby Hospitals can be viewed depending upon the locality and distance in the **Hospitals** tab
- The patient can submit their _Voice Recording_ for our ML model to diagnose if they are suffering from COVID19 or not under the **Check** tab
- Under the **Profile** tab, user can check their personal details, apply for vaccination, ask for helps and logout of the application.
- User can apply for vaccination by filling up the KYC form attaching their own selfies and picture of their Aadhar Card.

### **Tech Stack Used:**

1. Machine Learning:
   - Tensorflow
   - opencv
   - librosa
   - matplotlib
   - keras
   - numpy
   - pandas
   - pytesseract
   - face_recognition
2. Web - Frontend:
   - HTML
   - CSS
   - Bulma Framework
   - JavaScript
   - AOS Library
3. Web - Backend:
   - Django
   - Microsoft Azure Server
   - Celery Beat
4. Mobile Application:
   - Flutter
   - Dart
5. Tools:
   - Git
   - GitHub Students Pack

### Business Model / StartUp Potential

- Premium Support:

  All the users with premium support will get prioritized time slots.

- Scalability:

  This project can be extended to facilitate vaccinations for any other future pandemics or diseases.

## Team Members - Domains

All the team members are from National Institute of Technology pursuing Computer Science and Engineering in the 2nd Year.

> | S.No. |       Name       |       Work Field   |           Github Account           |
> | ----- | :--------------: | :----------------: | :--------------------------------: |
> | 1     |   Sahil Silare   | Backend Developer  |   https://github.com/sahil9001/    |
> | 2     |  Prakhar Asaiya  | Web-Frontend       | https://github.com/prakhar-asaiya/ |
> | 3     | Amitesh Agrawal  | ML AI developer    | https://github.com/amiteshag320/   |
> | 4     | Siddharth Mishra | Mobile Aplication Developer |  https://github.com/Hard-Coder05|

---
