"""Test category model."""

from tests import factories


def test_str(category_factory: factories.CategoryFactory) -> None:
    """Test that the string representation returns the name."""
    category = category_factory.build(name="Python")
    assert str(category) == "Python"
