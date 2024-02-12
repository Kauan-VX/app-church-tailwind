import { Text, TextInput, View } from 'react-native';

interface IInputData {
  label: string;
  placeholder: string;
  value: string;
}

export default function InputText({ label, placeholder, value }: IInputData) {
  return (
    <View>
      <Text className="py-2 px-2">{label}</Text>
      <TextInput value={value} className="bg-slate-100 rounded-xl p-4" placeholder={placeholder} />
    </View>
  );
}
