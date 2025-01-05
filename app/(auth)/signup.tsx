import React, { useState, } from 'react'
import { Stack, Link } from 'expo-router';
import { Alert, StyleSheet, View, AppState, Button, TextInput, Text, Pressable } from 'react-native'
import { supabase } from '~/utils/supabase'
import FontAwesome from '@expo/vector-icons/FontAwesome';


// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }

  return (
    <View className='gap-10 bg-white flex-1 p-10'>
      <Stack.Screen options={{ title: 'Inscription',headerTitleAlign: 'center', headerTintColor:'#64748b', headerTitleStyle:{fontFamily:'Outfit_500Medium'}} }  />
      <View >
        <Text className='pt-10 pb-10 text-4xl  'style={{  fontFamily: 'Outfit_700Bold', color:'#64748b', }}>Je m'inscris</Text>
        <TextInput
          
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Votre adresse email ici"
          autoCapitalize={'none'}
           className="rounded-xl border border-gray-200 p-5 text-xl bg-gray-100"
           style={{  fontFamily: 'Outfit_500Medium', }}
           placeholderTextColor="#64748b" 
        />
      </View>


     





      <View >
      <TextInput
          
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Votre mot de passe ici"
          autoCapitalize={'none'}
           className="rounded-xl border border-gray-200 p-5 text-xl bg-gray-100"
           style={{  fontFamily: 'Outfit_500Medium', }}
           placeholderTextColor="#64748b" 
        />
      </View>

    
      <View className="flex-row gap-3 ">
        <Pressable 
          onPress={() => signUpWithEmail()}
          disabled={loading}
          
          className="flex-1 items-center rounded-2xl  border border-gray-300 p-3 px-8 ">
           
           <Text className=" text-center text-xl  text-slate-500" style={{fontFamily:'Outfit_500Medium'}}>S'inscrire</Text>
      

        </Pressable>
        

      {/* <View>
        <Button title="Sign up" disabled={loading} onPress={() => signUpWithEmail()} />
      </View> */}
      </View>
     
     

      <Link href="/cgu" asChild>
                <Pressable>
                
                <View className='   mt-12 flex-row items-center'>
                <FontAwesome name="file-text-o" size={20} color="teal" />
                <Text className='underline p-3 text-lg  tracking-widest 'style={{  fontFamily: 'Outfit_500Medium', color:'#64748b', }}>Conditions Générales d'utilisation</Text>
                </View>
               
                </Pressable>
                </Link> 
 



    </View>
  )
}

