import { Link, Stack } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import InputText from './components/input';

export default function Page() {
  return (
    <View className={styles.container}>
      <Stack.Screen options={{ title: 'Overview' }} />
      <View className={styles.main}>
        <View className="flex flex-col justify-center items-center mt-2 p-4">
          <Text className={styles.title}>Igreja Paiol</Text>
          <Text className={styles.subtitle}>App feito para descomplicar sua vida</Text>
        </View>
        <View className="bg-white shadow-lg rounded-[2rem] p-4 h-[65%] flex flex-col">
          <InputText placeholder="Insira o seu e-mail" value="" label="E-mail" />
          <InputText placeholder="Insira a senha" value="" label="Senha" />
          <View className="flex-row justify-end my-4">
            <Link href={{ pathname: '/details' }}>Recuperar senha</Link>
          </View>
          <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
            <TouchableOpacity className={styles.button}>
              <Text className={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </Link>
          <View className="flex-row justify-center my-10">
            <Text className="font-bold text-xl ">Ou</Text>
          </View>
          <View className="flex w-full m-auto flex-row items-center justify-center">
            <View className="bg-white shadow-sm p-2 rounded-xl mr-6">
              <Image
                style={{ width: 32, height: 32 }}
                source={{
                  uri: 'https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png',
                }}
              />
            </View>
            <View className="bg-white shadow-sm p-2 rounded-xl">
              <Image
                style={{ width: 32, height: 32 }}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/0/747.png',
                }}
              />
            </View>
            <View className="bg-white shadow-sm p-2 rounded-xl ml-6">
              <Image
                style={{ width: 32, height: 32 }}
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png',
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = {
  button: 'items-center bg-orange-400 rounded-[28px] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center ',
  container: 'flex-1',
  main: 'flex-1 max-w-[960] justify-between bg-violet-400',
  title: 'text-[64px] text-white font-bold',
  subtitle: 'text-4xl text-gray-700 text-white  text-center',
};
