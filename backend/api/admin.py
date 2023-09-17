from django.contrib import admin

from .models import EmailRequest


class EmailRequestAdmin(admin.ModelAdmin):
    list_display = ('id', 'date', 'product_link', 'direction', 'email', 'phone_number', 'buyer_name', 'comment')
    list_display_links = ('id', 'product_link')
    search_fields = ('phone_number', 'direction')
    list_filter = ('date',)


# class SliderAdmin(admin.ModelAdmin):
#     list_display = ('id', 'image_url', 'title', 'subtitle', 'slider_title', 'link', 'link_title', 'show_form', 'is_displayed')
#     list_display_links = ('id', 'link')
#     search_fields = ('username',)
#     list_filter = ('date_joined',)

admin.site.register(EmailRequest, EmailRequestAdmin)
