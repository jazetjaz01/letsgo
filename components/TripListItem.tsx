import React from 'react'
import { Text, View ,Image } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'; 

export default function TripListItem() {
  return (
    <View className=' border-slate-300 border rounded-xl m-5 p-5   '>

      <View className='flex-row '>

      <View className='mr-5'>
      <Text  className="mb-3" style={{  fontFamily: 'Outfit_700Bold', color:'darkslategrey', fontSize:14 }} >
      2H45</Text>
      <Text  className="underline" style={{  fontFamily: 'Outfit_700Bold', color:'grey', fontSize:10 }} >
      4H40</Text>
      <Text  className="mt-3" style={{  fontFamily: 'Outfit_700Bold', color:'darkslategrey', fontSize:14 }} >
     16H45</Text>
      </View>
    
      <View className='mr-5 justify-between'>
      <FontAwesome name="circle-o" size={18} color="darkslategrey" />
      <FontAwesome name="circle-o" size={18} color="darkslategrey" />
      </View>


      <View className='justify-between'>
        <View>
      <Text  className="" style={{  fontFamily: 'Outfit_700Bold', color:'darkslategrey', fontSize:14 }} >
      Marseille</Text>
      <Text  className="" style={{  fontFamily: 'Outfit_400Regular', color:'darkslategrey', fontSize:12 }} >
      Rue du Vélodrome</Text>
      </View>
      <View>
      <Text  className="" style={{  fontFamily: 'Outfit_700Bold', color:'darkslategrey', fontSize:14 }} >
      Perpignan</Text>
      <Text  className="" style={{  fontFamily: 'Outfit_400Regular', color:'darkslategrey', fontSize:12 }} >
      Palais des Congrès</Text>
      </View>
     
      </View>


        <View className='flex-1 justify-center items-end'>
        <Text  className=" " style={{  fontFamily: 'Outfit_700Bold', color:'teal', fontSize:16 }} >
        45€</Text>
        </View>
      



      </View>

    
      <View className='flex-row pt-3 border-slate-300 border-t mt-5 items-center gap-2'>
       
      <FontAwesome name="car" size={14} color="grey" />
     
    
      <Image  className='w-10 h-10 ml-3 mr-3'  source={require('../assets/elon.gif')} />
      
      <View>
      <Text  className="underline" style={{  fontFamily: 'Outfit_400Regular', color:'darkslategrey', fontSize:14 }} >
        Elon</Text>
        <Text  className="" style={{  fontFamily: 'Outfit_400Regular', color:'darkslategrey', fontSize:14 }} >
        Avis: 4.3</Text>
        </View>
        <View className='flex-1 '>
        <Text  className="text-right" style={{  fontFamily: 'Outfit_400Regular', color:'darkslategrey', fontSize:14 }} >
        Disponibilité:1</Text>
        </View>

      </View>



    
    
    </View>
    
  )
}
