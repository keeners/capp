"""User factories for fixtures."""

import factory
from faker import Factory as FakerFactory

faker = FakerFactory.create()


class TalkFactory(factory.django.DjangoModelFactory):
    """Talk factory."""

    name = factory.Faker("name")

    class Meta:  # noqa D201
        model = "data.Talk"
