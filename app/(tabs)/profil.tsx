import { Stack } from 'expo-router';
import {  View, Text } from 'react-native';



export default function Profil() {
  return (
    <>
      <Stack.Screen options={{ title: 'Profil' }} />
      <View>
  <Text>Profil screen</Text>
      </View>
    </>
  );
}