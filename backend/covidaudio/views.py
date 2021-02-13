from .serializers import AudioSerializer
from django.shortcuts import render
from rest_framework import status
from rest_framework import response
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from users.serializers import *
from drf_yasg.utils import swagger_auto_schema
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import MultiPartParser
from users.models import *
from django.utils.crypto import get_random_string
from django.utils import timezone
from django.core.exceptions import ObjectDoesNotExist
import datetime
from .COVID_Cough import predicting
import tensorflow as tf 
import cv2
import matplotlib.pyplot as plt
import pathlib
from pathlib import Path
import librosa, librosa.display
import os

class AudioPostView(APIView):
    parser_classes = [MultiPartParser]
    @swagger_auto_schema(
        request_body = AudioSerializer,
        responses = {

        }
    )
    def post(self,request):
        serializer = AudioSerializer(data=request.data)
        if serializer.is_valid():
            audiofile = serializer.save()
            path = audiofile.covidaudio.url
            response = predicting.spectrogram_from_wav_prediction(path=path)
            print(response)
            if response[0] == 1.0:
                return Response({
                    "verdict" : "True"
                },status.HTTP_200_OK)
            else: 
                return Response({
                    "verdict" : "False"
                },status.HTTP_200_OK)
                
        else:
            data = serializer.errors
            print(data)
            return Response(data,status.HTTP_400_BAD_REQUEST)