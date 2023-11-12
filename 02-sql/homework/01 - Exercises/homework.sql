
-- consulta 1
SELECT * FROM movies WHERE duration<90

-- consulta 2

SELECT * FROM movies WHERE year<1941 AND year>1929;

-- consulta  3 

SELECT * FROM movies WHERE title LIKE '%til%';

-- consulta 4

SELECT * FROM movies WHERE cardinality(actors) = 1;

-- consulta 5

SELECT *,
  ROUND((SELECT AVG(valor) FROM unnest(ratings) AS valor):: numeric,1) AS media 
  FROM movies;

-- consulta 6 

SELECT title,
  ROUND((SELECT AVG(valor) FROM unnest(ratings) AS valor):: numeric,1) AS media 
  FROM movies;

--   consulta 7

	SELECT * FROM movies
	WHERE title LIKE '%Fast and%' AND year='2016'