CREATE OR REPLACE TABLE
  FUNCTION shop.fruits_less_than(is_test BOOL,
    p INT) AS
SELECT
  price,
  name
FROM
  shop.fruits(is_test)
WHERE
  price < p