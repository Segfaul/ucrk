from django.db import models


class EmailRequest(models.Model):
    date = models.DateTimeField(auto_now_add=True, verbose_name='Дата отправки')

    product_link = models.URLField(blank=True, verbose_name='Ссылка на направление')
    direction = models.CharField(max_length=255, blank=True, verbose_name='Направление')

    email = models.EmailField(blank=True, verbose_name='Почта')
    phone_number = models.CharField(max_length=17, verbose_name='Телефон')
    buyer_name = models.CharField(max_length=100, verbose_name='Клиент')

    comment = models.TextField(blank=True, null=True, verbose_name='Комментарий')

    class Meta:
        verbose_name = 'Запрос на консультацию'
        verbose_name_plural = 'Запросы на консультацию'
        ordering = ['-date']

    def __str__(self):
        return f"{self.direction} - {self.date}"


# class Slider(models.Model):
#     image_url = models.ImageField(upload_to='slider/', validators=[validate_img_extension])

#     title = models.CharField(max_length=255)
#     subtitle = models.TextField(max_length=255)
#     slider_title = models.CharField(max_length=255)

#     link = models.CharField(max_length=255, blank=True)
#     link_title = models.CharField(max_length=255)

#     show_form = models.BooleanField(default=False)

#     is_displayed = models.BooleanField(default=True)
