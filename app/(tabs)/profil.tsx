import { Stack, Redirect } from 'expo-router';
import {  View, Text, Modal, Button} from 'react-native';
import { useAuth } from '~/contexts/AuthProvider';
import { useState } from 'react';


export default function Profil() {





  return (
    <>
      <Stack.Screen options={{ title: 'Profil' }} />
      <View> 
        
        <Text> profile page screen </Text>
      
      </View>
    </>
  );
}