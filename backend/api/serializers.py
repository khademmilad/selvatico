from rest_framework import serializers
from account.models import Account


class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=128,
        min_length=8,
        write_only=True
    )

    class Meta:
        model = Account
        fields = ['email', 'username', 'password', 'profile_image']


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=60)
    password = serializers.CharField(max_length=128, write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        # Perform your custom authentication logic here, e.g., check if the email and password are valid
        try:
            user = Account.objects.get(email=email)
            print('user', user)
        except Account.DoesNotExist:
            raise serializers.ValidationError('Invalid email for {user} account')

        if not user.check_password(password):
            raise serializers.ValidationError('Invalid password.')

        # If the authentication is successful, return the user object
        return user
