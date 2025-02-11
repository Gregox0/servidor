import { limparReservas } from './reservaService.js'

async function sistema(){
  const agora = new Date()
  const horas = agora.getHours()

  if(horas >= 17 || horas < 9){
    try {
      await limparReservas()
      return true
    } catch (error) {
      console.error('Erro ao limpar reservas:', error)
    }
  }else{
    return false
  }
}

export { sistema }