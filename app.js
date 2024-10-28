console.log('Iniciando el servidor...'); // Mensaje para verificar que el script se está ejecutando
const express = require('express');

const app = express();

app.use(express.json());

// Array de jugadores
let jugadores = [
    { id: 1, nombre: 'Ansu Fati', edad: 21, posicion: 'Delantero', equipo: 'Barcelona' },
    { id: 2, nombre: 'Frenkie de Jong', edad: 26, posicion: 'Centrocampista', equipo: 'Barcelona' },
    { id: 3, nombre: 'Vinícius Júnior', edad: 23, posicion: 'Delantero', equipo: 'Real Madrid' },
    { id: 4, nombre: 'Kylian Mbappé', edad: 25, posicion: 'Delantero', equipo: 'Real Madrid' }, 
    { id: 5, nombre: 'Marcus Rashford', edad: 26, posicion: 'Delantero', equipo: 'Manchester United' },
    { id: 6, nombre: 'Bruno Fernandes', edad: 29, posicion: 'Centrocampista', equipo: 'Manchester United' },
];


// Array de equipos
let equipos = [
    { id: 1, nombre: 'Barcelona', ligaId: 1 }, // 'La Liga'
    { id: 2, nombre: 'Real Madrid', ligaId: 1 }, // 'La Liga'
    { id: 3, nombre: 'Manchester United', ligaId: 2 }, // 'Premier League'
];

// Array de ligas
let ligas = [
    { id: 1, nombre: 'La Liga' },
    { id: 2, nombre: 'Premier League' },
];

// Array de partidos
let partidos = [
    { id: 1, equipoLocal: 'Barcelona', equipoVisitante: 'Real Madrid', fecha: '2024-10-30', liga: 'La Liga' },
    { id: 2, equipoLocal: 'Manchester United', equipoVisitante: 'Barcelona', fecha: '2024-11-05', liga: 'Premier League' },
];

// -----------------------------------------
// Rutas para jugadores

app.get('/', function(req, res) {
    res.send('Servidor funcionando!');
});

// Obtener todos los jugadores
app.get('/api/jugadores', function(req, res) {
    console.log(req);
    res.json(jugadores);
});


// Obtener un jugador por ID
app.get('/api/jugadores/:id', function(req, res) {
    const { id } = req.params;
    const jugador = jugadores.find(j => j.id == id);
    if (!jugador) return res.status(404).send('Jugador no encontrado.');
    res.json(jugador); // Responder con el jugador encontrado
});

// Agregar un nuevo jugador
app.post('/api/jugadores', function(req, res) {
    const nuevoJugador = req.body;

    // Validar que todos los campos estén
    if (!nuevoJugador.nombre || !nuevoJugador.edad || !nuevoJugador.posicion || !nuevoJugador.equipo) {
        return res.status(400).send('Todos los campos son obligatorios.');
    }
    nuevoJugador.id = jugadores.length + 1;
    jugadores.push(nuevoJugador);
    res.status(201).json(nuevoJugador);
});

// Actualizar un jugador
app.put('/api/jugadores/:id', function(req, res) {
    const { id } = req.params;
    const jugador = jugadores.find(j => j.id == id);
    if (!jugador) return res.status(404).send('Jugador no encontrado.');

    const { nombre, edad, posicion, equipo } = req.body;
    if (nombre) jugador.nombre = nombre;
    if (edad) jugador.edad = edad;
    if (posicion) jugador.posicion = posicion;
    if (equipo) jugador.equipo = equipo;

    res.json(jugador);
});

// Eliminar un jugador
app.delete('/api/jugadores/:id', function(req, res) {
    const { id } = req.params;
    const jugadorExistente = jugadores.find(j => j.id == id);
    if (!jugadorExistente) return res.status(404).send('Jugador no encontrado.');

    jugadores = jugadores.filter(j => j.id != id); // Filtrar la lista
    res.status(204).send(); // Responder con No Content
});

// -----------------------------------------
// Rutas para equipos

app.get('/api/equipos', function(req, res) {
    res.json(equipos);
});

app.get('/api/equipos/:id', function(req, res) {
    const { id } = req.params;
    const equipo = equipos.find(e => e.id == id);
    if (!equipo) return res.status(404).send('Equipo no encontrado.');
    res.json(equipo); // Responder con el equipo encontrado
});

app.post('/api/equipos', function(req, res) {
    const nuevoEquipo = req.body;

    // Validar que todos los campos estén
    if (!nuevoEquipo.nombre || !nuevoEquipo.liga) {
        return res.status(400).send('Todos los campos son obligatorios.');
    }
    nuevoEquipo.id = equipos.length + 1;
    equipos.push(nuevoEquipo);
    res.status(201).json(nuevoEquipo);
});

app.put('/api/equipos/:id', function(req, res) {
    const { id } = req.params;
    const equipo = equipos.find(e => e.id == id);
    if (!equipo) return res.status(404).send('Equipo no encontrado.');

    const { nombre, liga } = req.body;
    if (nombre) equipo.nombre = nombre;
    if (liga) equipo.liga = liga;

    res.json(equipo);
});

app.delete('/api/equipos/:id', function(req, res) {
    const { id } = req.params;
    const equipoExistente = equipos.find(e => e.id == id);
    if (!equipoExistente) return res.status(404).send('Equipo no encontrado.');

    equipos = equipos.filter(e => e.id != id); // Filtrar la lista
    res.status(204).send(); // Responder con No Content
});

// -----------------------------------------
// Rutas para ligas

app.get('/api/ligas', function(req, res) {
    res.json(ligas);
});

app.get('/api/ligas/:id', function(req, res) {
    const { id } = req.params;
    const liga = ligas.find(l => l.id == id);
    if (!liga) return res.status(404).send('Liga no encontrada.');
    res.json(liga); // Responder con la liga encontrada
});

app.post('/api/ligas', function(req, res) {
    const nuevaLiga = req.body;

    // Validar que todos los campos estén
    if (!nuevaLiga.nombre) {
        return res.status(400).send('El campo nombre es obligatorio.');
    }
    nuevaLiga.id = ligas.length + 1;
    ligas.push(nuevaLiga);
    res.status(201).json(nuevaLiga);
});

app.put('/api/ligas/:id', function(req, res) {
    const { id } = req.params;
    const liga = ligas.find(l => l.id == id);
    if (!liga) return res.status(404).send('Liga no encontrada.');

    const { nombre } = req.body;
    if (nombre) liga.nombre = nombre;

    res.json(liga);
});

app.delete('/api/ligas/:id', function(req, res) {
    const { id } = req.params;
    const ligaExistente = ligas.find(l => l.id == id);
    if (!ligaExistente) return res.status(404).send('Liga no encontrada.');

    ligas = ligas.filter(l => l.id != id); // Filtrar la lista
    res.status(204).send(); // Responder con No Content
});

// -----------------------------------------
// Rutas para partidos

app.get('/api/partidos', function(req, res) {
    res.json(partidos);
});

app.get('/api/partidos/:id', function(req, res) {
    const { id } = req.params;
    const partido = partidos.find(p => p.id == id);
    if (!partido) return res.status(404).send('Partido no encontrado.');
    res.json(partido); // Responder con el partido encontrado
});

app.post('/api/partidos', function(req, res) {
    const nuevoPartido = req.body;

    // Validar que todos los campos estén
    if (!nuevoPartido.equipoLocal || !nuevoPartido.equipoVisitante || !nuevoPartido.fecha || !nuevoPartido.liga) {
        return res.status(400).send('Todos los campos son obligatorios.');
    }
    nuevoPartido.id = partidos.length + 1;
    partidos.push(nuevoPartido);
    res.status(201).json(nuevoPartido);
});

app.put('/api/partidos/:id', function(req, res) {
    const { id } = req.params;
    const partido = partidos.find(p => p.id == id);
    if (!partido) return res.status(404).send('Partido no encontrado.');

    const { equipoLocal, equipoVisitante, fecha, liga } = req.body;
    if (equipoLocal) partido.equipoLocal = equipoLocal;
    if (equipoVisitante) partido.equipoVisitante = equipoVisitante;
    if (fecha) partido.fecha = fecha;
    if (liga) partido.liga = liga;

    res.json(partido);
});

app.delete('/api/partidos/:id', function(req, res) {
    const { id } = req.params;
    const partidoExistente = partidos.find(p => p.id == id);
    if (!partidoExistente) return res.status(404).send('Partido no encontrado.');

    partidos = partidos.filter(p => p.id != id); // Filtrar la lista
    res.status(204).send(); // Responder con No Content
});


// Obtener equipos por liga
app.get('/api/equipos/ligas/:id', (req, res) => {
    const ligaId = parseInt(req.params.id);
    const equiposDeLiga = equipos.filter(equipo => equipo.ligaId === ligaId);

    if (equiposDeLiga.length > 0) {
        res.status(200).json(equiposDeLiga);
    } else {
        res.status(404).json({ message: 'No se encontraron equipos para esta liga.' });
    }
});

// Buscar jugadores que jugaron un partido
app.get('/api/partido/:id/jugadores', (req, res) => {
    const partidoId = parseInt(req.params.id);
    
    // Encuentra el partido por ID
    const partido = partidos.find(p => p.id === partidoId);
    
    if (!partido) {
        return res.status(404).json({ message: 'Partido no encontrado.' });
    }

    // Encuentra los jugadores que pertenecen a los equipos que jugaron en el partido
    const jugadoresEnPartido = jugadores.filter(jugador => 
        jugador.equipo === partido.equipoLocal || jugador.equipo === partido.equipoVisitante
    );

    if (jugadoresEnPartido.length > 0) {
        res.status(200).json(jugadoresEnPartido);
    } else {
        res.status(404).json({ message: 'No se encontraron jugadores para este partido.' });
    }
});


// -----------------------------------------
// Inicializar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, function() {
    console.log(`Servidor escuchando en el puerto ${PORT}...`);
});