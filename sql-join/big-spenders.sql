 SELECT "firstName",
        "lastName",
        p.amount AS amount
    FROM "customers"
    JOIN "payments" AS p USING ("customerId")
ORDER BY "amount" DESC
   LIMIT 10;
