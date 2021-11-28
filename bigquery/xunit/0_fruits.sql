CREATE OR REPLACE TABLE
  shop.fruits AS
SELECT
  price,
  name
FROM (
  SELECT
    130 AS price,
    "apple" AS name
  UNION ALL
  SELECT
    120 AS price,
    "banana" AS name
  UNION ALL
  SELECT
    110 AS price,
    "grape" AS name
  UNION ALL
  SELECT
    100 AS price,
    "lemon" AS name
  UNION ALL
  SELECT
    90 AS price,
    "orange" AS name )