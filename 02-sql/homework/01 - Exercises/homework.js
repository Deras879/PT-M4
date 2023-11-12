/* ¡Escribe tus comandos en este archivo! */

const ejercicio02 = 'SELECT * FROM movies WHERE year<1941 AND year>1929;';

const ejercicio03 = 'SELECT * FROM movies WHERE title LIKE '%til%';';

const ejercicio04 = 'SELECT * FROM movies WHERE cardinality(actors) = 1;';

const ejercicio05 = 'SELECT *, ROUND((SELECT AVG(valor) FROM unnest(ratings) AS valor):: numeric,1) AS media FROM movies;';

const ejercicio06 = 'SELECT title, ROUND((SELECT AVG(valor) FROM unnest(ratings) AS valor):: numeric,1) AS media FROM movies;';

const ejercicio07 = 'SELECT * FROM movies WHERE title LIKE '%Fast and%' AND year=2016;';

module.exports = {
   ejercicio02,
   ejercicio03,
   ejercicio04,
   ejercicio05,
   ejercicio06,
   ejercicio07,
};
