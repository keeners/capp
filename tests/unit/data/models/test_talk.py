"""Test talk model."""

import pytest
from pytest_mock import MockFixture

from tests import factories


def test_str(talk_factory: factories.TalkFactory) -> None:
    """Test that the string representation returns the name."""
    talk = talk_factory.build(
        name="Python", slug="python", description="Best talk ever."
    )
    assert str(talk) == "Python"


@pytest.mark.django_db
def test_slug_called(mocker: MockFixture, talk_factory: factories.TalkFactory) -> None:
    """Test slug is created if not passed."""
    mocked_slugger = mocker.patch("domain.utils.generate_unique_slug")
    mocked_slugger.return_value = "python"
    talk = talk_factory(name="Python", description="Best talk ever.")
    assert mocked_slugger.called
    assert talk.slug == "python"
