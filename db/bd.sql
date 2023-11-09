CREATE DATABASE nombre_de_tu_base_de_datos;
USE nombre_de_tu_base_de_datos;


-- Tabla Personas
CREATE TABLE Personas (
    id INT PRIMARY KEY,
    Nombres VARCHAR(50),
    Apellidos VARCHAR(50),
    NumeroIdentificacion VARCHAR(20),
    Email VARCHAR(100),
    TipoIdentificacion VARCHAR(20),
    FechaCreacion DATE,
    NumIdentificacionTipo AS (NumeroIdentificacion + TipoIdentificacion),
    NombresApellidosConcatenados AS (Nombres + ' ' + Apellidos)
);

-- Tabla Usuario
CREATE TABLE Usuario (
    Identificador INT PRIMARY KEY,
    Usuario VARCHAR(50),
    Pass VARCHAR(100),
    FechaCreacion DATE
);


INSERT INTO Usuario (Identificador, Usuario, Pass, FechaCreacion)
VALUES (1, 'testDVP', '123456', '2023-11-08');
