from django.contrib import admin

from petapi.models import (
  Pet,
  PetSettings,
  Animal,
  Race
)
# Register your models here.
admin.site.register(Pet)
admin.site.register(PetSettings)
admin.site.register(Animal)
admin.site.register(Race)