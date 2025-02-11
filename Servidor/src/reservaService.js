import { db } from './firebaseConfig.js'

const reservasRef = db.collection('reservas')

async function limparReservas() {
    try {
      const snapshot = await reservasRef.get()
      snapshot.forEach(doc => {
        doc.ref.delete()
      })
      console.log('Reservas limpas com sucesso!')
    } catch (error) {
      console.error('Erro ao limpar reservas:', error)
    }
}

async function contarReservas() {
    const snapshot = await reservasRef.get()
    return snapshot.size
  
}

export { limparReservas, contarReservas, reservasRef  }