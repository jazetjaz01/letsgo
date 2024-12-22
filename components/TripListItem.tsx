import React from 'react'
import { Text, View ,Image, Pressable } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'; 

import { Link, Stack } from 'expo-router';


type TripListItemProps = {
trip:Trip

};


export default function TripListItem({trip}: TripListItemProps) {
  return (
    
       <Link href={`/trips/${trip.id}`} asChild>

      <Pressable>
      <Stack.Screen options={{title:'Letsgo', headerTintColor:'teal'}} /> 
    <View className=' border-slate-300 border rounded-xl p-5  min-w-96  '>

      <View className='flex-row '>

      <View className='mr-5'>
      <Text  className="mb-3" style={{  fontFamily: 'Outfit_700Bold', color:'darkslategrey', fontSize:14 }} >
      {trip.time_trip_departure}h</Text>
      <Text  className="" style={{  fontFamily: 'Outfit_700Bold', color:'grey', fontSize:12 }} >
      {trip.duration_trip}h</Text>
      <Text  className="mt-3" style={{  fontFamily: 'Outfit_700Bold', color:'darkslategrey', fontSize:14 }} >
      {trip.time_trip_arrival}h</Text>
      </View>
    
      <View className='mr-5 justify-between'>
      <FontAwesome name="circle-o" size={18} color="darkslategrey" />
      <FontAwesome name="circle-o" size={18} color="darkslategrey" />
      </View>


      <View className='justify-between'>
        <View>
      <Text  className="tracking-widest" style={{  fontFamily: 'Outfit_700Bold', color:'darkslategrey', fontSize:14 }} >
      {trip.departure_city}</Text>
      <Text  className="" style={{  fontFamily: 'Outfit_400Regular', color:'darkslategrey', fontSize:12 }} >
      {trip.place_called_departure}</Text>
      </View>
      <View>
      <Text  className="tracking-widest" style={{  fontFamily: 'Outfit_700Bold', color:'darkslategrey', fontSize:14 }} >
      {trip.arrival_city}</Text>
      <Text  className="" style={{  fontFamily: 'Outfit_400Regular', color:'darkslategrey', fontSize:12 }} >
      {trip.place_called_arrival}</Text>
      </View>
     
      </View>


        <View className='flex-1 justify-center items-end'>
        <Text  className=" " style={{  fontFamily: 'Outfit_700Bold', color:'teal', fontSize:16 }} >
      {trip.price} €</Text>
        </View>
      



      </View>

    
      <View className='flex-row pt-3 border-slate-300 border-t mt-5 items-center gap-2'>
       
      <FontAwesome name="car" size={14} color="grey" />
     
    
      <Image  className='w-10 h-10 shadow lg:hidden'  source={require('../assets/elon.gif')} />
      
      <View>
      <Text  className="underline" style={{  fontFamily: 'Outfit_400Regular', color:'darkslategrey', fontSize:14 }} >
      {trip.user.user_name}</Text>
        <Text  className="" style={{  fontFamily: 'Outfit_400Regular', color:'darkslategrey', fontSize:14 }} >
        Avis: {trip.user.rate_user}</Text>
        </View>
        <View className='flex-1 '>
        <Text  className="text-right" style={{  fontFamily: 'Outfit_400Regular', color:'darkslategrey', fontSize:14 }} >
        Disponibilité:{trip.available_seat}</Text>
        </View>

      </View>



    
   
    
    </View>
   
    </Pressable>
    </Link>
    
  )
}
