from django.db import models


class EmailRequest(models.Model):
    date = models.DateTimeField(auto_now_add=True)

    product_link = models.URLField(blank=True)
    direction = models.CharField(max_length=255, blank=True)

    email = models.EmailField(blank=True)
    phone_number = models.CharField(max_length=17)
    buyer_name = models.CharField(max_length=100)

    comment = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.direction} - {self.date}"
