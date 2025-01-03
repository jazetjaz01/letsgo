import React from 'react'
import { Text, View, Image, Pressable, } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, Stack} from 'expo-router';
import trips from '~/assets/trips.json'



export default function TripListItem({trip}) {
 
  return (
    <View className=' flex-1 bg-white'>
     
 <Link href={`/${trip.id}`} asChild> 
    <Pressable className='  border border-slate-300 rounded-xl m-5 mb-0 bg-white '>
    <View className='flex-row  p-5 pb-2'>
   
    
    
    <View className='justify-between  mr-5  bxg-pink-500'>
    
    <Text className="text-slate-700   tracking-widest text-lg" style={{fontFamily:'Outfit_700Bold'}}>{trip.time_trip_departure}h</Text>
   <View className='flex-row '>
    <Ionicons name="time-outline" size={16} color="darkslategrey" />
    <Text className="text-slate-500  ml-1 tracking-widest" style={{fontFamily:'Outfit_500Medium'}}>{trip.duration_trip}h</Text> 
    </View>
      <Text className="text-slate-700   tracking-widest text-lg " style={{fontFamily:'Outfit_700Bold'}}>{trip.time_trip_arrival}h</Text>
   
    </View>



    <View className='justify-between bxg-red-500 mr-5'>
    
    <FontAwesome name="circle-o" size={18} color="darkslategrey" />
   <View className='w-1.5 grow bg-slate-700 ml-1.5 -mt-1 -mb-1'/>
    <FontAwesome name="circle-o" size={18} color="darkslategrey" />
    </View>
    

    <View className='bxg-slate-200 flex-1'>
    <Text className="text-slate-700    tracking-widest text-lg" style={{fontFamily:'Outfit_700Bold'}}>{trip.departure_city}</Text>
    <Text className="text-slate-500     " style={{fontFamily:'Outfit_500Medium'}}>{trip.place_called_departure}</Text> 
    <Text className="text-slate-700    tracking-widest text-lg" style={{fontFamily:'Outfit_700Bold'}}>{trip.arrival_city}</Text>
    <Text className="text-slate-500    " style={{fontFamily:'Outfit_500Medium'}}>{trip.place_called_arrival}</Text> 
  
    </View>

    <View className='  bxg-orange-500 '>
    <Text className="text-slate-700 t  text-right  tracking-widest text-xl" style={{fontFamily:'Outfit_700Bold'}}>{trip.price}€</Text>
    </View> 

   

    
    </View>
    

    <View className='border-t  pt-2 border-slate-300 '>
    <View className='ml-5 mb-3 flex-row gap-5 items-center '>
    <Ionicons  name="car-outline" size={20} color="darkslategrey" />
    {/* <Image   source={{uri:trip.user.avatar_image}} className='w-8 h-8 rounded-full ml-14' /> */}
    <Text className="text-slate-500    tracking-widest align-middle" style={{fontFamily:'Outfit_500Medium'}}>{trip.profiles.username}</Text> 
    <Ionicons  name="star" size={16} color="darkslategrey" />
    <Text className="text-slate-500    tracking-widest align-middle" style={{fontFamily:'Outfit_500Medium'}}>{trip.rate_profile}</Text> 
    </View>
    </View>

    </Pressable>
  </Link> 
    </View>
  )
}
