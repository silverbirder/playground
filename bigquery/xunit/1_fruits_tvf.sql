CREATE OR REPLACE TABLE
  FUNCTION shop.fruits_inject() AS
SELECT
  *
FROM (
  SELECT
    130 AS price,
    "apple" AS name )
WHERE
  1 <> 1;
CREATE OR REPLACE TABLE
  FUNCTION shop.fruits(is_test BOOL) AS
SELECT
  name,
  price
FROM
  shop.fruits
WHERE
  NOT is_test
UNION ALL
SELECT
  name,
  price
FROM
  shop.fruits_inject()
WHERE
  is_test