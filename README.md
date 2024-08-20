# **Proyecto arquitectura web:**
# **Alumno: Iair David Eisemberg**
## Descripcion del sistema: Sistema de gestion academica:
### Este sistema está diseñado para gestionar la información de alumnos, profesores y cursos en una facultad. Permite realizar operaciones de CRUD (Crear, Leer, Actualizar, Eliminar) para las entidades principales, así como consultas más avanzadas para generar reportes y realizar análisis de datos académicos.
### Entidades Principales:
### **Alumno**: Información sobre los estudiantes, como nombre, matrícula, y cursos en los que están inscriptos.
### **Profesor**: Información sobre los docentes, como nombre, especialidad, y cursos que brindan.
### **Curso**: Información sobre los cursos ofrecidos por la facultad, incluyendo el nombre del curso, código y profesor asignado.
### **Inscripción**: Registro de los alumnos en cursos específicos.
## Servicios expuestos a traves de la API:
### Ademas de las acciones CRUD (POST, GET, PUT, DELETE) que se pueden realizar sobre las entidades, tambien se pueden realizar otras acciones, como por ejemplo:
### Listar los cursos en los que in alumno esta inscripto.
### Obtener todos los alumnos inscritos en un curso específico.
### Reportes de rendimiento de cursos, por ejemplo, calificacion promedio de un curso.
