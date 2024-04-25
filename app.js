const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');


const app = express();
app.use(express.json());


app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).send('Usuario autenticado correctamente');
    } else {
      res.status(401).send('Usuario o contraseña incorrectos');
    }
  } catch (error) {
    res.status(500).send('Error al intentar autenticar al usuario');
  }
});


app.post('/registrar', async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(400).send('El usuario ya existe');
    } else {
      const newUser = new User({ username, password });
      await newUser.save();
      res.status(201).send('Usuario registrado correctamente');
    }
  } catch (error) {
    res.status(500).send('Error al intentar registrar al usuario');
  }
});

app.listen(321, () => {
  console.log(`Servidor Express iniciado en el puerto 321`);
});
