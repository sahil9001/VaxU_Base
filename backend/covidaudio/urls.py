from django.contrib import admin
from django.urls import path, include
from .views import AudioPostView

urlpatterns = [
    path('', AudioPostView.as_view()),
]
