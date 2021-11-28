  -- arrange
CREATE OR REPLACE TABLE
  FUNCTION shop.fruits_inject() AS
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
  "orange" AS name;
  -- act
  CREATE TEMP TABLE fruits_less_than_100 AS
SELECT
  *
FROM
  shop.fruits_less_than(FALSE,
    100);
  -- assert
ASSERT
  (
  SELECT
    name = "orange"
  FROM
    fruits_less_than_100) AS "The fruit that costs less than 100 is an orange."