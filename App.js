import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import PickerItem from './src/components/picker'
import { useEffect, useState } from 'react'
import api from './src/services/api'

export default function App() {
  const [moedas, setMoedas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadMoedas() {
      const response = await api.get('all')
      //console.log(response.data)

      let arrayMoedas = []
      Object.keys(response.data).map(key => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key
        })
      })

      //console.log(arrayMoedas)
      setMoedas(arrayMoedas)
      setLoading(false)
    }

    loadMoedas()
  }, [])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="#fff" size="large" />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}>Selecione sua moeda</Text>
        <PickerItem />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    alignItems: 'center',
    paddingTop: 50
  },
  areaMoeda: {
    width: '90%',
    backgroundColor: '#f9f9f9',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 8
  },
  titulo: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 5,
    paddingTop: 5
  }
})
