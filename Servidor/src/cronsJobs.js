import { limparReservas } from './reservaService.js'

async function sistema(){
  const agora = new Date()
  const horas = agora.getHours() - 3
  const check = false

  if(horas >= 17 || horas < 12){
    try {
      if(!check){
        await limparReservas()
      }
      check = true
      return true
    } catch (error) {
      console.error('Erro ao limpar reservas:', error)
    }
  }else{
    return false
    check = false
  }
}

export { sistema }
