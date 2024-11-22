-- En este archivo deben estar tus ejercicios de consultas sql

-- 1 - Muestra los nombres de los empleados en orden alfabético descendente.
SELECT nombres 
FROM empleados 
ORDER BY nombres DESC

-- 2 - Muestra el nombre, el puesto y la localidad de los empleados con el puesto de 'Soporte'.
SELECT e.nombres, p.puesto, l.localidad
FROM empleados e
JOIN puestos p ON e.puesto_id = p.puesto_id
JOIN departamentos d ON e.departamento_id = d.id
JOIN localidades l ON l.id = d.localidad_id
WHERE p.puesto = 'Soporte'

-- 3 - Lista los nombres de los empleados cuyo nombre termina con la letra 'o'.
SELECT nombres
FROM empleados
WHERE nombres LIKE '%o'

-- 4 - Muestra el nombre, sueldo y localidad de los empleados que trabajan en la localidad Carlos Paz.
SELECT e.nombre, e.sueldo, l.localidad
FROM empleados e
JOIN departamentos d ON e.departamento_id = d.id
JOIN localidades l ON d.localidad_id = l.id
WHERE l.localidad = 'Carlos Paz'

-- 5 - Muestra el nombre, sueldo y localidad de los empleados cuyo sueldo se encuentra entre 10000 y 13000.
SELECT e.nombre, e.sueldo, l.localidad
FROM empleados e
JOIN departamentos d ON e.departamento_id = d.id
JOIN localidades l ON d.localidad_id = l.id
WHERE e.sueldo >= 10000 AND e.sueldo <= 13000

-- 6 - Visualiza los departamentos que tienen más de 5 empleados.
SELECT d.*
FROM departamentos d
JOIN empleados e ON d.id = e.departamento_id
GROUP BY d.denominacion, d.id, d.localidad_id
HAVING COUNT(e.id) > 5

-- 7 - Muestra los nombres de los empleados que trabajan en Córdoba y tienen el puesto de 'Analista' o 'Programador'.
SELECT e.nombres
FROM empleados e 
JOIN puestos p ON e.puesto_id = p.id
JOIN departamentos d ON e.departamento_id = d.id
JOIN localidades l ON d.localidad_id = l.id
WHERE l.localidad = 'Córdoba'
AND (p.puesto = 'Analista' OR p.puesto = 'Programador')

-- 8 - Calcula el sueldo medio de todos los empleados.
