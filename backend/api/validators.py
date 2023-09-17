from django.core.exceptions import ValidationError


def validate_email_request(data):
    return data


def validate_img_extension(data):
    if not data.name.endswith(('.webp', '.png', '.jpg', '.jpeg')):
        raise ValidationError('Некорректное расширение файла (.webp / .png / .jpg / .jpeg)')
