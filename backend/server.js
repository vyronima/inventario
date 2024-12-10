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

app.put('/eliminarProducto/:id', (req, res) => {
  const { id } = req.params;
  db.query('UPDATE productos SET Visible = 0 WHERE id = ?;', [id], (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Error al Eliminar producto' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).send({ error: 'Producto no encontrado' });
    }

    res.json({ message: 'Producto Eliminado correctamente', results });
  });
});

// Endpoint para actualizar un producto
app.post('/productos', (req, res) => {
  const { nombre, cantidad, categoria, disponible } = req.body; // Datos del producto a insertar

  // Verificar que todos los campos necesarios están presentes
  if (!nombre || cantidad === undefined || !categoria || disponible === undefined) {
    return res.status(400).send({ error: 'Todos los campos son necesarios' });
  }

  // Query para insertar el producto
  const query = `
    INSERT INTO productos (nombre, cantidad, categoria, disponible)
    VALUES (?, ?, ?, ?)
  `;

  // Ejecutar la query
  db.query(query, [nombre, cantidad, categoria, disponible], (err, result) => {
    if (err) {
      console.error('Error al insertar el producto:', err);
      res.status(500).send({ error: 'Error al insertar el producto' });
    } else {
      res.send({ message: 'Producto insertado exitosamente', id: result.insertId });
    }
  });
});

// Obtener las categorías de la base de datos
app.get('/categorias', (req, res) => {
  const query = 'SELECT * FROM categorias'; // Cambia a tu consulta real

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error al obtener las categorías:', err);
      res.status(500).send({ error: 'Error al obtener las categorías' });
    } else {
      res.json(result);  // Devuelve las categorías
    }
  });
});

app.get('/productos', (req, res) => {
  const query = `
    SELECT 
    productos.id, 
    productos.nombre, 
          categorias.nombre AS categoria, 
          productos.cantidad, 
          productos.disponible
    FROM productos
    LEFT JOIN categorias
    ON categorias.id = productos.categoria
    WHERE productos.visible = 1
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error al obtener los productos:', err);
      res.status(500).send({ error: 'Error al obtener los productos' });
    } else {
      res.json(result);  // Devuelve los productos junto con la categoría
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
