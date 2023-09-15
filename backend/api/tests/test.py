from django.test import TestCase
from django.urls import reverse
from rest_framework import status


class APIMailerTest(TestCase):

    def test_create_email_request(self):
        data = {
            'product_link': 'https://example.com',
            'direction': 'Some Direction',
            'email': 'test@example.com',
            'phone_number': '88005553535',
            'buyer_name': 'Test name',
            'comment': 'Test Comment',
        }

        response = self.client.post(reverse('email'), data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_invalid_email_request(self):
        data = {}
        response = self.client.post(reverse('email'), data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
