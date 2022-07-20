SELECT "line1",
       "district",
       "cities"."name",
       "countries"."name" AS "countryName"
  FROM "addresses"
  JOIN "cities" USING ("cityId")
  JOIN "countries" USING ("countryId")
