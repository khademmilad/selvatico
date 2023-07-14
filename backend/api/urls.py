from django.urls import path
from .views import RegistrationAPIView, LoginAPIView



urlpatterns = [
    path('api/register/', RegistrationAPIView.as_view(), name='register'),
    path('api/login/', LoginAPIView.as_view(), name='login'),
]
