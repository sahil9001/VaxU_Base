from ekyc.models import KYCInformation
from celery.task import periodic_task
from celery.schedules import crontab
from django.conf import settings
from users import models as users_models
from core import models as core_models


@periodic_task(run_every=crontab(minute=0,hour='0'))
def assign_time_slots():
    print("here")
    priortised_users_list = KYCInformation.objects.all().order_by('-age')
    count = 0
    j = 0
    for user in priortised_users_list:
        if count % 20 == 0 and count != 0:
            j += 1
            count = 0
        count += 1
        appointment = core_models.Appointment()
        appointment.patient = user.user
        appointment.hospital = user.hospital_vacc
        appointment.timeslot = j
        appointment.save()
