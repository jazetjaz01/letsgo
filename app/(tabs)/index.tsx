import { Stack } from 'expo-router';
import { StyleSheet, View, ImageBackground, Text, SafeAreaView, } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
       
      <Stack.Screen    options={{ title: 'Rechercher', headerShown:false }} />
      
      <ImageBackground source={require('../../assets/greencar.jpg')} style={{flex:1, height:"50%"}}>
      
      <View className='p-5 m-10 mt-40  border-gray-300  bg-white rounded-xl'>
        
        <View className='flex-row border-slate-300 border-b rounded-xl pb-5'>
        <FontAwesome name="circle-o" size={20} color="darkslategrey" />
        <Text className="text-slate-700   ml-5" style={{fontFamily:'Outfit_700Bold'}}>Lieu de départ</Text>
        </View>
       
        <View className='flex-row border-slate-300 border-b rounded-xl pb-5 mt-5'>
        <FontAwesome name="circle-o" size={20} color="darkslategrey" />
        <Text className="text-slate-700   ml-5" style={{fontFamily:'Outfit_700Bold'}}>Lieu d'arrivée</Text>
        </View>
       
        <View className='flex-row border-slate-300 border-b rounded-xl pb-5 mt-5'>
        <FontAwesome name="calendar" size={20} color="darkslategrey" />
        <Text className="text-slate-700   ml-5" style={{fontFamily:'Outfit_400Regular'}}>Choisir votre date de départ</Text>
        </View>
       
        <View className='flex-row  pb-5 mt-5'>
        <FontAwesome name="user-o" size={20} color="darkslategrey" />
        <Text className="text-slate-700   ml-5" style={{fontFamily:'Outfit_400Regular'}}>1</Text>
        </View>

        <View className='bg-teal-700 rounded-lg '>
        <Text className='pt-2 pb-3  text-center 'style={{  fontFamily: 'Outfit_700Bold', color:'white', fontSize:14, }}>Rechercher</Text>
        </View>


       
        </View>
       




      </ImageBackground>
     
   
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});