// ForgotPassword.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Pressable } from 'react-native';
import { supabase } from '~/utils/supabase'  // Assurez-vous d'avoir votre fichier supabaseClient.js configuré
import { Stack } from 'expo-router';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Veuillez entrer votre adresse email.');
      return;
    }

    try {
      // Envoi du lien de réinitialisation du mot de passe à l'email
      const { error } = await supabase.auth.resetPasswordForEmail(email);

      if (error) {
        setError('Erreur lors de l\'envoi de l\'email : ' + error.message);
      } else {
        setMessage('Un email de réinitialisation a été envoyé. Vérifiez votre boîte de réception.');
        setEmail('');
      }
    } catch (error) {
      setError('Une erreur est survenue. ' + error.message);
    }
  };

  return (
    
    <View className=' pl-6 pr-6 pt-10 flex-1 bg-white'>
        <Stack.Screen options={{ title: 'Initialiser mot de passe' , headerTitleAlign: 'center', headerTintColor:'#64748b', headerTitleStyle:{fontFamily:'Outfit_500Medium'}} }  />
        <Text className='mb-10 text-3xl  'style={{  fontFamily: 'Outfit_700Bold', color:'#64748b', }}>Nouveau mot de passse</Text>
        <Text className="  mb-10  text-slate-500" style={{fontFamily:'Outfit_500Medium'}}>Vous allez recevoir un email contenant un lien qui activera le nouveau mot de passe</Text>
      <TextInput
       
        placeholder="Entrez votre email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        className="rounded-xl border border-gray-200 p-5 text-xl bg-gray-100 mb-10"
           style={{  fontFamily: 'Outfit_500Medium', }}
           placeholderTextColor="#64748b" 
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      {message ? <Text style={styles.successText}>{message}</Text> : null}
     {/*  <Button title="Envoyer le lien de réinitialisation" onPress={handleForgotPassword} /> */}
   

        <Pressable 
                  onPress={() => handleForgotPassword()}
                  
                  
                  className=" items-center rounded-2xl  border border-gray-300 p-3 mt-5q ">
                   
                   <Text className=" text-center text-xl  text-slate-500" style={{fontFamily:'Outfit_500Medium'}}>Réinitialiser le mot de passe</Text>
              
        
                </Pressable>


   
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  successText: {
    color: 'green',
    marginBottom: 10,
  },
});

export default ForgotPassword;
