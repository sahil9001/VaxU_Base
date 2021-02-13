from django.db import models

# Create your models here.
class CovidAudio(models.Model):
    covidaudio = models.FileField(upload_to='uploads/audios/')