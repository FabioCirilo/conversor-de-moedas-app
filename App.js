import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import PickerItem from './src/components/picker'

export default function App() {
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
