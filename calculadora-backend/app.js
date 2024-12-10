const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());  // Para poder leer JSON en el cuerpo de las solicitudes

// Operaciones
app.post('/sumar', (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = num1 + num2;
    res.json({ resultado });
});

app.post('/restar', (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = num1 - num2;
    res.json({ resultado });
});

app.post('/multiplicar', (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = num1 * num2;
    res.json({ resultado });
});

app.post('/dividir', (req, res) => {
    const { num1, num2 } = req.body;
    if (num2 === 0) {
        return res.status(400).json({ error: "No se puede dividir entre 0" });
    }
    const resultado = num1 / num2;
    res.json({ resultado });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});
