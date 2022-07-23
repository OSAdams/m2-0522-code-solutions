SELECT COUNT("countryId") AS total_cities,
       c.name AS country,
       c."countryId"
  FROM cities
  JOIN countries AS c USING ("countryId")
 GROUP BY c."name"
