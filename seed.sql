DROP TABLE IF EXISTS zoo;
CREATE TABLE zoo (
  id SERIAL PRIMARY KEY,
  name VARCHAR(25) NOT NULL,
  kind VARCHAR(25) NOT NULL,
  age INTEGER NOT NULL
);

INSERT INTO zoo (name, kind, age) VALUES ('Tofu', 'Dog', '1');
INSERT INTO zoo (name, kind, age) VALUES ('Chewy', 'Dog', '8');
INSERT INTO zoo (name, kind, age) VALUES ('Peanut', 'Dog', '5');
INSERT INTO zoo (name, kind, age) VALUES ('Charley', 'Bird', '2');
INSERT INTO zoo (name, kind, age) VALUES ('Kings', 'Bird', '5');
INSERT INTO zoo (name, kind, age) VALUES ('Red', 'Dog', '1');
INSERT INTO zoo (name, kind, age) VALUES ('Rice', 'Cat', '1');
INSERT INTO zoo (name, kind, age) VALUES ('Sponge', 'Cat', '10');
INSERT INTO zoo (name, kind, age) VALUES ('Glue', 'Dog', '7');
INSERT INTO zoo (name, kind, age) VALUES ('Tofu', 'Fish', '1');
INSERT INTO zoo (name, kind, age) VALUES ('Tofu', 'Fish', '2');
