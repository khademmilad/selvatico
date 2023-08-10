from rest_framework import generics, status
from .serializers import LoginSerializer, RegistrationSerializer
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView



class RegistrationAPIView(generics.CreateAPIView):
    serializer_class = RegistrationSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        print('data', serializer)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response(
            {
                'user': serializer.data,
                'message': 'User registered successfully.',
            },
            status=status.HTTP_201_CREATED
        )


class LoginAPIView(APIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data

        # If the authentication is successful, create a token
        refresh = RefreshToken.for_user(user)
        data = {
            'user': serializer.data,
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'message': 'User logged in successfully.',
        }
        return Response(data, status=status.HTTP_200_OK)
