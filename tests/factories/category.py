"""Category factories for fixtures."""

import factory
from faker import Factory as FakerFactory

faker = FakerFactory.create()


class CategoryFactory(factory.django.DjangoModelFactory):
    """Category factory."""

    name = factory.Faker("name")

    class Meta:  # noqa D201
        model = "data.Category"
