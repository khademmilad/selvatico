from django.urls import path
from .views import RegistrationAPIView, UserLoginView



urlpatterns = [
    path('register/', RegistrationAPIView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
]
