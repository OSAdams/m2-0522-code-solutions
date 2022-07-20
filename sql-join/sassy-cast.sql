SELECT "firstName",
       "lastName"
  FROM "actors"
  JOIN "castMembers" USING ("actorId")
  JOIN "films" using ("filmId")
 WHERE "title" = 'Jersey Sassy';
