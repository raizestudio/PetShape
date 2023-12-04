from django.db import models
from django.contrib.auth.models import User, UserManager, AbstractUser


# Create your models here.
class CustomUserManager(UserManager):
  def get_queryset(self):
    return super().get_queryset().select_related("user_profile")
  

class User(AbstractUser):
  objects = CustomUserManager()

class UserSettings(models.Model):
  user = models.OneToOneField(
    User, on_delete=models.CASCADE, related_name="user_profile"
  )