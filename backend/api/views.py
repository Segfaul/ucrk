from django.core.mail import send_mail
from django.template.loader import render_to_string
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.conf import settings
from .serializers import EmailRequestSerializer


class EmailRequestView(APIView):
    def post(self, request, format=None):
        serializer = EmailRequestSerializer(data=request.data)
        if serializer.is_valid():
            email_request = serializer.save()

            subject = 'Учебный Центр Развития Квалификации'
            html_message = render_to_string('api/email.html', {'email_request': email_request})

            try:
                send_mail(
                    subject=subject, message='Учебный Центр Развития Квалификации', 
                    html_message=html_message, from_email=settings.EMAIL_HOST_USER, recipient_list=[settings.EMAIL_HOST_USER], 
                    fail_silently=False
                )
            except Exception as exception:
                return Response({'message': 'Ошибка отправки почты'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
