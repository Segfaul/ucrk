from django.urls import path

from .views import EmailRequestView

urlpatterns = [
    path('email/', EmailRequestView.as_view(), name='email'),
]