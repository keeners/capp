"""Speaker model."""

from django.db import models


class Speaker(models.Model):
    """A speaker is an M2M between user and talk."""

    talk = models.ForeignKey("data.Talk", on_delete=models.CASCADE)
    user = models.ForeignKey("data.User", on_delete=models.SET_NULL, null=True)

    def __str__(self) -> str:
        """Return talk and speaker."""
        if self.user:
            return f"{self.talk} {self.user}"
        return f"{self.talk}"
