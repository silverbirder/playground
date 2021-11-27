import unittest
from unittest.mock import patch

from fruits import Fruits


class TestFruits(unittest.TestCase):
    @patch("fruits.Fruits._get_fruits")
    def test_get_less_than(self, mock_get_fruits):
        # Arrange
        mock_get_fruits.return_value = [
            {"price": 110, "name": "apple"},
            {"price": 100, "name": "banana"},
            {"price": 90, "name": "orange"},
        ]
        fruits = Fruits()

        # Act
        actual = fruits.get_less_than(price=100)

        # Assert
        assert len(actual) == 1
