SELECT c."firstName" AS first,
       c."lastName" AS last,
       SUM("amount") AS total
  FROM payments
  JOIN customers AS c USING ("customerId")
 GROUP BY c."customerId"
 ORDER BY total DESC
