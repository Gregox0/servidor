import express from 'express'
import cors from 'cors'
import { checarStatus, verificarReservas, realizarReserva } from './src/reservaController.js'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/status', checarStatus)
app.get('/checar', verificarReservas)
app.post('/reservar', realizarReserva)

app.listen(5555, () => {
  console.log('Servidor rodando na porta 5555')
});
