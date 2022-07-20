SELECT "filmId",
       "title",
       "rentalRate"
  FROM "films"
 WHERE "rentalRate" < 1
 LIMIT 50
