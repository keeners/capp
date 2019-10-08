"""Category model."""

from django.db import models
from django.utils.translation import gettext_lazy as _


class Category(models.Model):
    """Category - a way to group talks."""

    name = models.CharField(_("name"), max_length=255)

    def __str__(self) -> str:
        """Return name as string."""
        return self.name
