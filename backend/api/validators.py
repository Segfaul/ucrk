from django.core.exceptions import ValidationError


def validate_email_request(data):
    return data