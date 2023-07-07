from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.http import HttpRequest
import os

class MyAccountManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        if not username:
            raise ValueError('Users must have a username')

        user = self.model(
            email=self.normalize_email(email),
            username=username
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password):
        user = self.create_user(
            email=self.normalize_email(email),
            password=password,
            username=username
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


def get_profile_image_path(instance, filename):
    # Get the filename extension
    ext = filename.split('.')[-1]
    # Generate a new filename with the user's ID
    filename = f"profile_image.{ext}"
    # Create a folder using the user's ID
    folder = str(instance.id)
    # Return the relative path to the file
    return os.path.join('profile_images', folder, filename)


class Account(AbstractBaseUser):
    email = models.EmailField(max_length=60, unique=True)
    username = models.CharField(max_length=30, unique=True)
    profile_image = models.ImageField(upload_to=get_profile_image_path, default='default_profile_image.png')
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    is_admin= models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    hide_email = models.BooleanField(default=True)
    ip_address = models.GenericIPAddressField(blank=True, null=True)


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    objects = MyAccountManager()

    def __str__(self):
        return self.username

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True
    
    def save(self, *args, **kwargs):
        if not self.pk:
            # New user is being created, capture the IP address
            request = HttpRequest()
            self.ip_address = request.META.get('REMOTE_ADDR')
        super().save(*args, **kwargs)