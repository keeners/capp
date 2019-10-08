"""API Serializers."""
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group

from rest_framework import serializers

from data import models

User = get_user_model()


class UserSerializer(serializers.HyperlinkedModelSerializer):
    """User Serializer."""

    class Meta:  # noqa: D106
        model = User
        fields = ("id", "url", "email", "name", "date_joined", "groups")


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    """Group Serializer."""

    class Meta:  # noqa: D106
        model = Group
        fields = ("url", "name")


class TalkSerializer(serializers.HyperlinkedModelSerializer):
    """Talk serializer."""

    class Meta:  # noqa: D106
        model = models.Talk
        fields = ("id", "name", "slug", "description", "notes", "abstract")


class SpeakerSerializer(serializers.HyperlinkedModelSerializer):
    """Speaker serializer."""

    class Meta:  # noqa: D106
        model = models.Speaker
        fields = ("id", "user", "talk")


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    """Category serializer."""

    class Meta:  # noqa: D106
        model = models.Category
        fields = ("id", "name")
