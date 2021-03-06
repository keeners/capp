"""Django admin registrations."""

from django.contrib import admin

from . import models

admin.site.register(models.User)
admin.site.register(models.Talk)
admin.site.register(models.Speaker)
admin.site.register(models.Category)
