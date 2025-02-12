import { contarReservas, reservasRef } from './reservaService.js'
import { sistema } from './cronsJobs.js'

async function verificarReservas(req, res) {
  try {
    const numeroDeReservas = await contarReservas()
    if (numeroDeReservas >= 10) {
      return res.status(400).send("Limite de reservas atingido")
    }
    res.status(200).send({ numeroDeReservas })
  } catch (error) {
    console.error("Erro ao verificar o número de reservas:", error)
    res.status(500).send("Erro ao verificar o número de reservas")
  }
}

async function realizarReserva(req, res) {
  try {
    const numeroDeReservas = await contarReservas()
    if (numeroDeReservas >= 10) {
      return res.status(400).send("Limite de reservas atingido")
    }

    const { nome, curso, periodo, ct } = req.body
    await reservasRef.add({
      nome,
      curso,
      periodo,
      ct
    })

    res.status(201).send("Reserva realizada com sucesso")
  } catch (error) {
    console.error("Erro ao salvar reserva:", error)
    res.status(500).send("Erro ao realizar a reserva")
  }
}

async function checarStatus(req, res) {
  try {
    const statusSistema = await sistema()
    if(statusSistema == 'aberto'{
      const numeroDeReservas = await contarReservas()
      if (numeroDeReservas >= 10) {
        return 
      }
    }
    res.send(statusSistema ? 'aberto' : 'fechado')
  } catch (error) {
    console.error("Erro ao verificar o status do sistema:", error)
    res.status(500).send("Erro ao verificar o status do sistema")
  }
}

export { verificarReservas, realizarReserva, checarStatus }
