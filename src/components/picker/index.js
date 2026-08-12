import { Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'

export default function PickerItem(props) {
  let moedasItem = props.moedas.map(item => {
    return <Picker.Item key={item.key} value={item.key} label={item.key} />
  })

  return (
    <Picker
      selectedValue={props.moedaSelecionada}
      onValueChange={value => props.onChange(value)}
    >
      {moedasItem}
    </Picker>
  )
}
