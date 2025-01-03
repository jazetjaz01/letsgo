import { Stack } from 'expo-router';
import {  View, Text } from 'react-native';



export default function Publish() {
  return (
    <>
      <Stack.Screen options={{ title: 'Publier' }} />
      <View>
  <Text>publier screen</Text>
      </View>
    </>
  );
}

