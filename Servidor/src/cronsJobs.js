import { limparReservas } from './reservaService.js'

async function sistema(){
  const agora = new Date()
  const horas = agora.getHours() - 3
  const check = false

  if(horas >= 17 || horas < 14){
    try {
      if(!check){
        await limparReservas()
      }
      check = true
      return false
    } catch (error) {
      console.error('Erro ao limpar reservas:', error)
    }
  }else{
    check = false
    return false
  }
}

export { sistema }
