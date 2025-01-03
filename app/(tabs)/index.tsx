
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Stack, Link } from 'expo-router';
import {  View,Text, ImageBackground,SafeAreaView,StyleSheet, Image, Pressable} from 'react-native';



export default function Home() {
  return ( 
  
    <SafeAreaView className=''  style={styles.container}>
       
    <Stack.Screen    options={{ title: 'Rechercher', headerShown:false }} />
    
    <ImageBackground   className ='  overflow-hidden ' source={require('../../assets/paysage.png')} style={{flex:1, height:"50%" , minWidth:400}}>
  
    {/* <Image source={require('../../assets/letsgo_logo.png')} /> */}
    
    <Text className="text-white  text-center text-3xl mt-28" style={{fontFamily:'Outfit_700Bold'}}>"je voyage quand je veux"</Text>
    
    <View className=' m-10  mt-35   bg-slate-50 rounded-t-lg  '>
    
        <View className='flex-row border-slate-300 border-b rounded-xl pb-5 pl-5 pt-5 '>
        <FontAwesome name="circle-o" size={20} color="darkslategrey" />
        <Text className="text-slate-700   ml-5 tracking-widest" style={{fontFamily:'Outfit_700Bold'}}>Lieu de départ</Text>
        </View>
        
        <View className='flex-row border-slate-300 border-b rounded-xl pb-5 mt-5 pl-5 '>
        <FontAwesome name="circle-o" size={20} color="darkslategrey" />
        <Text className="text-slate-700   ml-5 tracking-widest" style={{fontFamily:'Outfit_700Bold'}}>Lieu d'arrivée</Text>
        </View>
       
        <View className='flex-row border-slate-300 border-b rounded-xl pb-5 mt-5 pl-5'>
        <FontAwesome name="calendar" size={20} color="darkslategrey" />
        <Text className="text-slate-700   ml-5" style={{fontFamily:'Outfit_400Regular'}}>Choisir votre date de départ</Text>
        </View>

        <View className='flex-row  pb-5 mt-5 pl-5'>
        <FontAwesome name="user-o" size={20} color="darkslategrey" />
        <Text className="text-slate-700   ml-5" style={{fontFamily:'Outfit_400Regular'}}>1</Text>
        </View>

         <Link href="/listrips" asChild>
        <Pressable>
        <View className='bg-teal-700 rounded-b-lg'>
        <Text className='pt-4  pb-5  text-center tracking-widest leading-6'style={{  fontFamily: 'Outfit_700Bold', color:'white', fontSize:18, }}>Letsgo</Text>
        </View>
        </Pressable>
        </Link> 


     </View>




    </ImageBackground>
   
 
  </SafeAreaView>

);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
alignItems:'center',
backgroundColor:'white',
},
image: {
  
  
},
});