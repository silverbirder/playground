class Fruits(object):
    def _get_fruits(self):
        return [
            {"price": 130, "name": "apple"},
            {"price": 120, "name": "banana"},
            {"price": 110, "name": "grape"},
            {"price": 100, "name": "lemon"},
            {"price": 90, "name": "orange"},
        ]

    def get_less_than(self, price):
        fruits = self._get_fruits()
        return list(filter(lambda x: x["price"] < price, fruits))
