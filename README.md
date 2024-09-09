# Proyecto Arquitectura Web:
## Alumno: Iair David Eisemberg

## Descripción del Sistema: Sistema de Gestión de Fútbol
Este sistema está diseñado para gestionar la información relacionada con jugadores, equipos, ligas, partidos y estadísticas de jugadores en un contexto de fútbol profesional. Permite realizar operaciones de CRUD (Crear, Leer, Actualizar, Eliminar) para las entidades principales, así como consultas más avanzadas para generar reportes.

## Entidades Principales:
- **Jugador**: Información sobre los jugadores, como nombre, edad, posición y equipo al que pertenecen.
- **Equipo**: Información sobre los equipos, como nombre y la liga en la que compiten.
- **Liga**: Información sobre las ligas, como el nombre de la liga y los equipos que la componen.
- **Partido**: Información sobre los partidos, como equipos participantes, fecha y liga a la que pertenece el partido.

---
## Servicios expuestos a traves de la API:
## Endpoints y Status Codes:

### **Endpoints para Jugador**:

#### 1. Crear jugador
- **Método HTTP**: `POST/api/jugador`
- **Status Codes**:
  - `201 - Created`: Jugador creado exitosamente.
  - `400 - Bad Request`: Datos del jugador faltan o son incorrectos.

#### 2. Obtener jugador por ID
- **Método HTTP**: `GET/api/jugador/{id}`
  - **Status Codes**:
  - `200 - OK`: Jugador obtenido correctamente.
  - `404 - Not Found`: Jugador no encontrado.

#### 3. Actualizar jugador por ID
- **Método HTTP**: `PUT/api/jugador/{id}`
  - **Status Codes**:
  - `200 - OK`: Jugador actualizado correctamente.
  - `404 - Not Found`: Jugador no encontrado.

#### 4. Eliminar jugador por ID
- **Método HTTP**: `DELETE/api/jugador/{id}`
  - **Status Codes**:
  - `200 - OK`: Jugador eliminado correctamente.
  - `404 - Not Found`: Jugador no encontrado.

---

### **Endpoints para Equipo**

#### 1. Crear equipo
- **Método HTTP**: `POST/api/equipo`
- **Status Codes**:
  - `201 - Created`
  - `400 - Bad Request`

#### 2. Obtener equipo por ID
- **Método HTTP**: `GET/api/equipo/{id}`
- **Status Codes**:
  - `200 - OK`
  - `404 - Not Found`

#### 3. Actualizar equipo por ID
- **Método HTTP**: `PUT/api/equipo/{id}`
- **Status Codes**:
  - `200 - OK`
  - `404 - Not Found`
 
#### 4. Eliminar equipo por ID
- **Método HTTP**: `DELETE/api/equipo/{id}`
- **Status Codes**:
  - `200 - OK`
  - `404 - Not Found`

---

### **Endpoints para Liga**
#### 1. Crear liga
- **Método HTTP**: `POST/api/liga`
- **Status Codes**:
  - `201 - Created`
  - `400 - Bad Request`

#### 2. Obtener liga por ID
- **Método HTTP**: `GET/api/liga/{id}`
- **Status Codes**:
  - `200 - OK`
  - `404 - Not Found`

#### 3. Actualizar liga por ID
- **Método HTTP**: `PUT/api/liga/{id}`
- **Status Codes**:
  - `200 - OK`
  - `404 - Not Found`

#### 4. Eliminar equipo por ID
- **Método HTTP**: `DELETE/api/liga/{id}`
- **Status Codes**:
  - `200 - OK`
  - `404 - Not Found`

---

### **Endpoints para Partido**
#### 1. Crear partido
- **Método HTTP**: `POST/api/partido`
- **Status Codes**:
  - `201 - Created`
  - `400 - Bad Request`

#### 2. Obtener partido por ID
- **Método HTTP**: `GET/api/partido/{id}`
- **Status Codes**:
  - `200 - OK`
  - `404 - Not Found`

#### 3. Actualizar partido por ID
- **Método HTTP**: `PUT/api/partido/{id}`
- **Status Codes**:
  - `200 - OK`
  - `404 - Not Found`

#### 4. Eliminar partido por ID
- **Método HTTP**: `DELETE/api/partido/{id}`
- **Status Codes**:
  - `200 - OK`
  - `404 - Not Found`

### **Endpoints para Reportes Adicionales**
