SELECT "line1",
       "district",
       "cities"."name",
       "countries"."name" AS country
  FROM "addresses"
  JOIN "cities" USING ("cityId")
  JOIN "countries" USING ("countryId")
