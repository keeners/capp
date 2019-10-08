"""Talk model."""

from typing import Any

from django.db import models
from django.utils.translation import gettext_lazy as _

from domain import utils


class Talk(models.Model):
    """Talk submission."""

    name = models.CharField(_("name"), max_length=255, unique=True)
    slug = models.SlugField(unique=True, blank=True)
    abstract = models.TextField(blank=True)
    description = models.TextField(blank=True)
    notes = models.TextField(blank=True)

    def __str__(self) -> str:
        """Return name as a string."""
        return self.name

    def save(self, *args: Any, **kwargs: Any) -> None:
        """Save a slug on save."""
        if not self.slug:
            self.slug = utils.generate_unique_slug(Talk, self.name)
        super().save(*args, **kwargs)

    class Meta:  # noqa D201
        verbose_name = "talk"
