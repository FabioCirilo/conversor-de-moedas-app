import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import PickerItem from './src/components/picker'
import { useEffect, useState } from 'react'
import api from './src/services/api'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [moedas, setMoedas] = useState([])
  const [moedaSelecionada, setMoedaSelecionada] = useState(null)

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
      setMoedaSelecionada(arrayMoedas[0].key)
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
        <PickerItem
          moedas={moedas}
          moedaSelecionada={moedaSelecionada}
          onChange={moeda => setMoedaSelecionada(moeda)}
        />
      </View>

      <View style={styles.areaValor}>
        <Text style={styles.titulo}>
          Digite um valor para converter em real(R$)
        </Text>
        <TextInput
          placeholder="Ex: 1.50"
          style={styles.input}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.areaBotao}>
        <Text style={styles.botaoText}>Converter</Text>
      </TouchableOpacity>
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
    padding: 8,
    marginBottom: 1
  },
  titulo: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 5,
    paddingTop: 5
  },
  areaValor: {
    width: '90%',
    backgroundColor: '#f9f9f9',
    paddingTop: 8,
    paddingBottom: 8
  },
  input: {
    width: '100%',
    color: '#000',
    fontSize: 18,
    backgroundColor: '#fff',
    marginTop: 5,
    padding: 10
  },
  areaBotao: {
    width: '90%',
    height: 45,
    backgroundColor: '#fb4b57',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 8,
    marginTop: 1
  },
  botaoText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center'
  }
})
