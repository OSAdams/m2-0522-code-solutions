SELECT name AS genre,
       COUNT("filmGenre"."genreId") AS total
  FROM genres
  JOIN "filmGenre" USING ("genreId")
  JOIN "castMembers" USING ("filmId")
  JOIN actors USING ("actorId")
 WHERE actors."firstName" = 'Lisa'
   AND actors."lastName" = 'Monroe'
 GROUP BY name
