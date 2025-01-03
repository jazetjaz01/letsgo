import { Stack } from 'expo-router';
import {  View, Text } from 'react-native';



export default function YourTrips() {
  return (
    <>
      <Stack.Screen options={{ title: 'Vos trajets' }} />
      <View>
  <Text>Vos trajets</Text>
      </View>
    </>
  );
}