import { limparReservas } from './reservaService.js'

async function sistema(){
  const agora = new Date()
  const horas = agora.getHours() - 3

  if(horas >= 17 || horas < 14){
    try {
      return true
    } catch (error) {
      console.error('Erro ao limpar reservas:', error)
    }
  }else{
    await limparReservas()
    return false
  }
}

export { sistema }
