import { Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack } from "expo-router";
export default function Cgu() {
return (
    
    <View className=' m-6 flex-row items-center'>
       <Stack.Screen options={{ title: 'Conditions Générales', headerTintColor:'#64748b', headerTitleStyle:{fontFamily:'Outfit_500Medium'}} }  />
                <FontAwesome name="file-text-o" size={20} color="teal" />
                <Text className='underline p-3 text-lg  tracking-widest 'style={{  fontFamily: 'Outfit_500Medium', color:'#64748b', }}>Conditions Générales d'utilisation</Text>
                </View>
)

}