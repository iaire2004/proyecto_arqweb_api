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
## Endpoints y Status Codes para acciones CRUD sobre las entidades:

### **Endpoints para Jugador**:

#### 1. Crear jugador
- **Método HTTP**: `POST/api/jugadores`
- **Status Codes**:
  - `201 - Created`: Jugador creado exitosamente.
  - `400 - Bad Request`: Datos del jugador faltan o son incorrectos.

#### 2. Obtener jugador por ID
- **Método HTTP**: `GET/api/jugadores/{id}`
- **Status Codes**:
  - `200 - OK`: Jugador obtenido correctamente.
  - `404 - Not Found`: Jugador no encontrado.

#### 3. Actualizar jugador por ID
- **Método HTTP**: `PUT/api/jugadores/{id}`
- **Status Codes**:
  - `200 - OK`: Jugador actualizado correctamente.
  - `404 - Not Found`: Jugador no encontrado.

#### 4. Eliminar jugador por ID
- **Método HTTP**: `DELETE/api/jugadores/{id}`
- **Status Codes**:
  - `204 - OK`: Jugador eliminado correctamente.
  - `404 - Not Found`: Jugador no encontrado.

---

### **Endpoints para Equipo**

#### 1. Crear equipo
- **Método HTTP**: `POST/api/equipos`
- **Status Codes**:
  - `201 - Created`: Equipo creado exitosamente.
  - `400 - Bad Request`: Datos del equipo faltan o son incorrectos.


#### 2. Obtener equipo por ID
- **Método HTTP**: `GET/api/equipos/{id}`
- **Status Codes**:
  - `200 - OK`: Equipo obtenido correctamente.
  - `404 - Not Found`: Equipo no encontrado.

#### 3. Actualizar equipo por ID
- **Método HTTP**: `PUT/api/equipos/{id}`
- **Status Codes**:
  - `200 - OK`: Equipo actualizado correctamente.
  - `404 - Not Found`: Equipo no encontrado.
 
#### 4. Eliminar equipo por ID
- **Método HTTP**: `DELETE/api/equipos/{id}`
- **Status Codes**:
  - `200 - OK`: Equipo eliminado correctamente.
  - `404 - Not Found`: Equipo no encontrado

---

### **Endpoints para Liga**
#### 1. Crear liga
- **Método HTTP**: `POST/api/ligas`
- **Status Codes**:
  - `201 - Created`: Liga creado exitosamente.
  - `400 - Bad Request`: Datos de la liga faltan o son incorrectos.


#### 2. Obtener liga por ID
- **Método HTTP**: `GET/api/ligas/{id}`
- **Status Codes**:
  - `200 - OK`: Liga obtenida correctamente.
  - `404 - Not Found`: Liga no encontrada.

#### 3. Actualizar liga por ID
- **Método HTTP**: `PUT/api/ligas/{id}`
- **Status Codes**:
  - `200 - OK`: Liga actualizada correctamente.
  - `404 - Not Found`: Liga no encontrada.

#### 4. Eliminar liga por ID
- **Método HTTP**: `DELETE/api/ligas/{id}`
- **Status Codes**:
  - `200 - OK`: Liga eliminada correctamente.
  - `404 - Not Found`: Liga no encontrada

---

### **Endpoints para Partido**
#### 1. Crear partido
- **Método HTTP**: `POST/api/partidos`
- **Status Codes**:
   - `200 - OK`: Partido obtenido correctamente.
   - `404 - Not Found`: Partido no encontrado.

#### 2. Obtener partido por ID
- **Método HTTP**: `GET/api/partidos/{id}`
- **Status Codes**:
  - `200 - OK`: Partido obtenido correctamente.
  - `404 - Not Found`: Partido no encontrado

#### 3. Actualizar partido por ID
- **Método HTTP**: `PUT/api/partidos/{id}`
- **Status Codes**:
  - `200 - OK`: Partido actualizado correctamente.
  - `404 - Not Found`: Partido no encontrado.

#### 4. Eliminar partido por ID
- **Método HTTP**: `DELETE/api/partidos/{id}`
- **Status Codes**:
  - `200 - OK`: Partido eliminado correctamente.
  - `404 - Not Found`: Partido no encontrado.


### **Endpoints para Reportes Adicionales**
#### 1. Obtener todos los juagdores de un equipo especifico.
- **Método HTTP**: `GET/api/jugadoresPorEquipo/{equipoId}`

#### 2. Obtener goleador de uan liga especifica.
- **Método HTTP**: `GET/api/maximoGoleador/{ligaId}`
## .........
