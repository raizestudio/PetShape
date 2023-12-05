from django.db import models

# Create your models here.
class Animal(models.Model):
  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=64)
  slug = models.CharField(max_length=64)

  def __str__(self):
    return self.name
  

class Race(models.Model):
  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=64)
  slug = models.CharField(max_length=64)
  animal = models.OneToOneField(
    Animal, on_delete=models.DO_NOTHING
  )

  def __str__(self):
    return f"{self.animal} - {self.name}"
  
class Pet(models.Model):
  id = models.AutoField(primary_key=True)
  
  

class PetSettings(models.Model):
  pet = models.OneToOneField(
    Pet, on_delete=models.CASCADE
  )
  name = models.CharField(max_length=64)
  animal = models.OneToOneField(
    Animal, on_delete=models.DO_NOTHING
  )
  race = models.OneToOneField(
    Race, on_delete=models.DO_NOTHING
  )