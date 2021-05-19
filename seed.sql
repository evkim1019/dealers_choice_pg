DROP TABLE IF EXISTS zoo;
CREATE TABLE zoo (
  id SERIAL PRIMARY KEY,
  name VARCHAR(25) NOT NULL,
  kind VARCHAR(25) NOT NULL,
  breed VARCHAR(25) NOT NULL,
  age INTEGER NOT NULL
);

INSERT INTO zoo (name, kind, breed, age) VALUES ('Tofu', 'Dog', 'Welsh Corgi', '1');
INSERT INTO zoo (name, kind, breed, age) VALUES ('Chewy', 'Dog', 'Poodle', '8');
INSERT INTO zoo (name, kind, breed, age) VALUES ('Peanut', 'Dog', 'Golden Doodle', '5');
INSERT INTO zoo (name, kind, breed, age) VALUES ('Charley', 'Bird', 'Yellow Crown', '2');
INSERT INTO zoo (name, kind, breed, age) VALUES ('Kings', 'Bird', 'Winter Bird', '5');
INSERT INTO zoo (name, kind, breed, age) VALUES ('Red', 'Dog', 'Pug', '1');
INSERT INTO zoo (name, kind, breed, age) VALUES ('Rice', 'Cat', 'Himalayn', '1');
INSERT INTO zoo (name, kind, breed, age) VALUES ('Sponge', 'Cat', 'Persian', '10');
INSERT INTO zoo (name, kind, breed, age) VALUES ('Glue', 'Dog', 'Welsh Corgi', '7');
INSERT INTO zoo (name, kind, breed, age) VALUES ('Tofu', 'Fish', 'Goofy', '1');
INSERT INTO zoo (name, kind, breed, age) VALUES ('Tofu', 'Fish', 'Gold Fish', '2');
