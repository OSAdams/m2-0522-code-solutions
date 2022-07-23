SELECT name AS genre,
       COUNT("filmGenre"."genreId") AS total
  FROM genres
  JOIN "filmGenre" USING ("genreId")
  JOIN "castMembers" USING ("filmId")
 WHERE "actorId" = 178
 GROUP BY name
