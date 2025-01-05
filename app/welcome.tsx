import { Text, ImageBackground, SafeAreaView, StyleSheet, Pressable, View, Image } from 'react-native'
import { Stack, Link } from 'expo-router'
export default function Welcome() {
  return (
   
        <>
       <SafeAreaView className=''  style={styles.container}>
   <Stack.Screen    options={{  headerShown:false }} /> 
   
    <ImageBackground   className ='  overflow-hidden ' source={require('../assets/paysage.png')} style={{flex:1, height:"50%" , minWidth:400}}>
 <View className='flex justify-center items-center mt-20'>
 <Image source={require('../assets/logo-letsgo.png')} className='w-16 h-16' /> 
 </View>
   <Text className="text-white  text-center text-3xl mt-32" style={{fontFamily:'Outfit_700Bold'}}>"je voyage quand je veux"</Text>

         <Link href="/signup" asChild>
                <Pressable>
                <View className='bg-white border border-gray-300 rounded-3xl mr-8 ml-8 mt-60'>
                <Text className='p-3 text-lg text-center tracking-widest 'style={{  fontFamily: 'Outfit_500Medium', color:'#64748b', }}>Inscription</Text>
                </View>
                </Pressable>
                </Link> 


                <Link href="/login" asChild>
                <Pressable>
                
                <View className='  rounded-3xl m-8 mt-12'>
                <Text className='underline p-3 text-lg text-center tracking-widest 'style={{  fontFamily: 'Outfit_500Medium', color:'#64748b', }}>Connexion</Text>
                </View>
               
                </Pressable>
                </Link> 


                






   </ImageBackground>
 </SafeAreaView>
   </>
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