from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import RegistrationSerializer, LoginSerializer


class RegistrationAPIView(generics.CreateAPIView):
    serializer_class = RegistrationSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response(
            {
                'user': serializer.data,
                'message': 'User registered successfully.',
            },
            status=status.HTTP_201_CREATED
        )


class LoginAPIView(generics.CreateAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(
            {
                'user': serializer.validated_data,
                'message': 'User logged in successfully.',
            },
            status=status.HTTP_200_OK
        )
