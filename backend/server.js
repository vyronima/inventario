const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_inventario',
});

// Conectar a la base de datos
db.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos.');
  }
});

// Endpoint para obtener los departamentos
app.get('/departamentos', (req, res) => {
  db.query('SELECT * FROM departamentos', (err, results) => {
    if (err) {
      res.status(500).send({ error: 'Error al obtener los departamentos' });
    } else {
      res.json(results);
    }
  });
});

// Endpoint para obtener las ciudades de un departamento
app.get('/ciudades/:id_departamento', (req, res) => {
  const { id_departamento } = req.params;
  db.query(
    'SELECT * FROM ciudades WHERE id_departamento = ?',
    [id_departamento],
    (err, results) => {
      if (err) {
        res.status(500).send({ error: 'Error al obtener las ciudades' });
      } else {
        res.json(results);
      }
    }
  );
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
