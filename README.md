# DMusic

DMusic es mi proyecto final de grado, una interfaz web desarrollada con React, TypeScript y Vite. La aplicación permite a los usuarios explorar música, buscar canciones, reproducir audio, iniciar sesión, registrarse y guardar canciones en su biblioteca personal.

## Descripción general

La app está pensada como una SPA (Single Page Application) con una experiencia tipo reproductor musical web. Su flujo principal se divide en:

- autenticación de usuarios
- exploración de catálogo
- búsqueda de canciones
- reproducción de audio
- favoritos / biblioteca personal
- navegación responsive con menú lateral y header

## Stack tecnológico

- React 19
- TypeScript
- Vite
- React Router DOM
- Axios
- React Icons
- React Toastify
- react-h5-audio-player
- Tailwind CSS

## Funcionalidades principales

- Registro e inicio de sesión con validación básica de formularios
- Persistencia del token JWT en localStorage
- Ruta principal con navegación por secciones: Home, Explorar y Biblioteca
- Búsqueda de canciones desde el header
- Reproducción de música con lista de tracks y navegación entre canciones
- Agregado y eliminación de canciones a favoritos
- UI responsive para desktop y móvil
- Notificaciones de éxito/error con Toast

## Arquitectura del proyecto

El proyecto sigue una estructura modular por features:

```text
src/
├── App.tsx
├── index.css
├── main.tsx
├── api/
│   └── APIUtils.ts
├── config/
│   ├── axios.config.ts
│   └── constants/
│       └── constants.ts
├── context/
│   ├── ComponentContext.tsx
│   ├── SearchContext.tsx
│   └── SongContext.tsx
├── modules/
│   ├── home/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   └── services/
│   ├── login/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   └── services/
│   └── register/
│       ├── hooks/
│       ├── pages/
│       └── services/
└── types/
    └── types.d.ts
```

## Rutas principales

La aplicación configura las siguientes rutas:

- `/login` → pantalla de autenticación
- `/register` → registro de usuario
- `/` → home principal con contenido y reproductor

## Flujo de la aplicación

### 1. Autenticación

El usuario puede iniciar sesión o registrarse. El proceso realiza peticiones HTTP al backend mediante Axios, y al recibir un token exitoso se guarda en `localStorage`:

- `token`
- `initial_name`

Esto permite que el usuario tenga acceso a funciones como:

- reproducir canciones
- agregar canciones a favoritos
- ver la biblioteca personal

### 2. Home y navegación

El componente `Home` usa el contexto `ComponentContext` para alternar entre secciones:

- `1` → contenido principal
- `2` → explorar canciones
- `3` → resultados de búsqueda
- `4` → biblioteca del usuario

### 3. Exploración y búsqueda

Las llamadas a la API para listar canciones y buscar por nombre se manejan desde `homeServices.ts`, mientras que la UI se renderiza en componentes como:

- `Explore.tsx`
- `Search.tsx`
- `Library.tsx`

### 4. Reproducción de música

El estado del reproductor se administra con `SongContext`, que guarda:

- la lista de canciones
- el índice actual
- los métodos para avanzar y retroceder

La reproducción se dispara llamando a `musicServices.handlePlaySong(song_id, url)`, que prepara la URL final para el cliente de audio.

## Variables de entorno

El proyecto usa un archivo `.env` con la configuración del backend:

```env
VITE_API_URL=http://127.0.0.1:8000/api/dmusic
VITE_API_URL_BACK_DEV=http://127.0.0.1:8000/api/dmusic
```

Estos valores deben apuntar a la API del backend de DMusic.

## Instalación

1. Clona el repositorio.
2. Entra a la carpeta del proyecto.
3. Instala las dependencias:

```bash
npm install
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

5. La app estará disponible en el puerto por defecto de Vite, normalmente:

```text
http://localhost:5173
```

## Endpoints consumidos

La aplicación consume endpoints del backend relacionados con usuarios y música, entre los más importantes:

- `POST /login`
- `POST /register`
- `GET /get-songs`
- `POST /search-song/:song_name`
- `POST /play-song/:song_id`
- `POST /add-favorite-song/:song_id`
- `POST /get-favorite-songs`
- `DELETE /delete-favorite-song/:song_id`

## Notas de desarrollo

- La lógica de autenticación y servicios está separada por módulos (`login`, `register`, `home`).
- Los providers de React (`ComponentContext`, `SearchContext`, `SongContext`) permiten gestionar estado global sin sobrecargar componentes.
- El proyecto usa `react-toastify` para notificaciones visuales sobre errores o acciones exitosas.
- La interfaz está construida con composición de componentes y estilos responsivos.

## Requisitos recomendados

- Node.js 18 o superior
- npm o pnpm
- Backend de DMusic disponible en la URL configurada en `.env`

## Estado del proyecto

Es una aplicación frontend funcional para gestionar música y autenticación, orientada a una experiencia de streaming con navegación y reproducción básica.

## Autor

Donato Marino
