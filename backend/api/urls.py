from django.urls import path
from api.views import HelloWorldView

urlpatterns = [
    # Other URL patterns
    path('hello/', HelloWorldView.as_view(), name='hello_world'),
]
