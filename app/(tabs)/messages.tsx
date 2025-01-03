import { Stack } from 'expo-router';
import {  View, Text, Button} from 'react-native';
import { supabase } from '~/utils/supabase'


export default function Messages() {
  return (
    <>
      <Stack.Screen options={{ title: 'Messages' }} />
      <View>
  <Text>Messages screen</Text>
 
          <Button title="Sign out"  onPress={() => supabase.auth.signOut()} />
      
      </View>
    </>
  );
}