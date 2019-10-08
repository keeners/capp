"""Speaker factories for fixtures."""

import factory
from faker import Factory as FakerFactory

from .talk import TalkFactory
from .user import UserFactory

faker = FakerFactory.create()


class SpeakerFactory(factory.django.DjangoModelFactory):
    """Speaker factory."""

    talk = factory.SubFactory(TalkFactory)
    user = factory.SubFactory(UserFactory)

    class Meta:  # noqa D201
        model = "data.Speaker"
