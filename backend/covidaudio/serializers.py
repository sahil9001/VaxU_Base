from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from ekyc.models import *
from .serializers import *
from slugify import slugify
from covidaudio.models import *

class AudioSerializer(serializers.ModelSerializer):
    covidaudio = serializers.FileField()
    class Meta:
        model = CovidAudio
        fields = ['covidaudio']
    
    def save(self):
        audiofile = CovidAudio.objects.create(
            covidaudio = self.validated_data.get('covidaudio',None)
        )
        return audiofile
