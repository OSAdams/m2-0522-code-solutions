INSERT INTO "actors" ("firstName", "lastName")
VALUES ('Jon', 'Snow'),
       ('Eddard', 'Stark'),
       ('Bruce', 'Willis')
RETURNING *;
