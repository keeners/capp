"""Test speaker model."""

from tests import factories


def test_str(speaker_factory: factories.SpeakerFactory) -> None:
    """Test that the string representation returns the talk and user name."""
    speaker = speaker_factory.build(talk__name="Python", user__email="me@example.com")
    assert str(speaker) == "Python me@example.com"


def test_str_no_user(speaker_factory: factories.SpeakerFactory) -> None:
    """Test that the string representation returns the talk."""
    speaker = speaker_factory.build(talk__name="Python", user=None)
    assert str(speaker) == "Python"
