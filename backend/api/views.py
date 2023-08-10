from rest_framework import generics, status
from .serializers import UserLoginSerializer, RegistrationSerializer
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from account.models import Account



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


class UserLoginView(generics.GenericAPIView):
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data['email']
        user = Account.objects.get(email=email)

        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })
