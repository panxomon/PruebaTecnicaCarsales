
# Test Car Sales

![Angular](https://img.shields.io/badge/Angular-12.0-red?logo=angular&style=flat-square)
![.NET Core](https://img.shields.io/badge/.NET%20Core-8.0-blue?logo=.net&style=flat-square)

Este es un proyecto que combina un frontend en Angular y un backend en C# .NET Core. Este repositorio está diseñado para gestionar episodios de una serie.

## Requisitos Previos

Asegúrate de tener [Docker](https://www.docker.com/get-started) y [Make](https://www.gnu.org/software/make/) instalados en tu sistema.

## Instrucciones

### Levantar el Proyecto

Para levantar el sitio, utiliza el siguiente comando:

```bash
make up
```

Esto construirá y levantará ambos servicios: el frontend y el backend.

### Abrir el Navegador

Para abrir el navegador en la URL especificada, puedes usar el siguiente comando:

```bash
make open
```

Este comando abrirá el navegador en `http://localhost:4200/episode`, donde podrás ver la lista de episodios.

## Estructura del Proyecto

- **Frontend**: La aplicación Angular que se ejecuta en el puerto 4200.
- **Backend**: La API en C# .NET Core que se ejecuta en el puerto 5001.


### Makefile

```makefile
.PHONY: up down open

up:
	docker-compose up --build

down:
	docker-compose down

open:
	@xdg-open http://localhost:4200/episode || open http://localhost:4200/episode || start http://localhost:4200/episode
```
