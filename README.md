# Challenge Desarrollador Junior

## Esta es una sencilla aplicación para gestionar un Tunro. Permite registrar un usuario y este podra Crear, eliminar y guardar turnos en su calendario. 

[BACK END] Requisitos previos Antes de ejecutar este proyecto, asegúrese de tener instalado lo siguiente:

Nodo.js
npm (Administrador de paquetes de nodos)
PostgreSQL
Instalar dependencias del proyecto:
# Instrucciones para Instalar y Configurar PostgreSQL en Debian

Este README proporciona instrucciones paso a paso para instalar, configurar y verificar PostgreSQL en un sistema Debian.

## Instalación de PostgreSQL

1. Actualiza el índice de paquetes:

    ```bash
    sudo apt update
    ```

2. Instala PostgreSQL desde los repositorios de Debian:

    ```bash
    sudo apt install postgresql
    ```

## Configuración de PostgreSQL

1. Cambia la contraseña del usuario `postgres`:

    ```bash
    sudo passwd postgres
    ```

2. Inicia sesión como el usuario `postgres` y accede a la consola de PostgreSQL:

    ```bash
    sudo -u postgres psql
    ```

3. Crea una base de datos llamada "postgres":

    ```sql
    CREATE DATABASE postgres;
    ```

4. Sal de la consola de PostgreSQL:

    ```sql
    \q
    ```

## Verificación del Puerto de PostgreSQL

1. Abre el archivo de configuración `postgresql.conf`:

    ```bash
    sudo nano /etc/postgresql/16/main/postgresql.conf
    ```

2. Busca la línea que comienza con `port` para encontrar el puerto en el que PostgreSQL está configurado para escuchar conexiones.

3. Verifica si PostgreSQL está escuchando en el puerto especificado:

    ```bash
    sudo ss -tuln | grep <puerto>
    ```

    Reemplaza `<puerto>` con el número de puerto que encontraste en `postgresql.conf`.

- Para iniciar el servicio de PostgreSQL, puedes usar:

    ```bash
    sudo service postgresql start

## CON MACOS
[Con Mac] Puedes descargar fácilmente la aplicación desde aquí
- https://postgresapp.com/downloads.html

Si tienes problemas con el puerto en app.module.ts puedes cambiarlo. el valor predeterminado es 5432 pero puedes intentar usar otro si tu computadora ya está usando ese puerto

- Crear una base de datos con nombre postgres y contraseña postgres.

- En el app.module.ts tiene que modificar el puerto como el nombre de la base de datos si es que elige otro.

- Tambien debera acceder al main.ts
    origin: ['http://localhost:3001', 'http://localhost:5173'] y debera agregar el puerto que este usando su front para que no haya errores de Cors. Como fijarse cual esta usando el front? 'npm run dev; pone en la terminal del front

> full-stack-junior@0.0.0 dev
> vite


  VITE v5.2.8  ready in 184 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

## [Front End] Requisitos previos

Instalar dependencias del proyecto:

- npm install 

Y para ejecutar el proyecto 

-npm run dev 