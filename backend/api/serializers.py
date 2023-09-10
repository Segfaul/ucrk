from rest_framework import serializers
from .models import EmailRequest

from .validators import validate_email_request


class EmailRequestSerializer(serializers.ModelSerializer):
    def validate(self, attrs):
        validate_email_request(attrs)
        return attrs

    class Meta:
        model = EmailRequest
        fields = '__all__'
