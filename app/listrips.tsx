import React, { useEffect, useState } from 'react'
import { Text, FlatList } from 'react-native'
import TripListItem from '~/components/TripListItem'
import { Stack } from 'expo-router'
/* import trips from '../assets/trips.json'  */
import { supabase } from '~/utils/supabase'


export default function ListTrips() {
 const [trips, SetTrips] = useState([])
useEffect(()=>{
fetchTrips();
}, []);

const fetchTrips  = async () => {
  const { data, error } = await supabase
  .from('trips')
  .select('*,profiles(*)');
  SetTrips(data)
};  
  

  return (
  <>
  <Stack.Screen options={{title:'Letsgo'}} />
  {/* <TripListItem trip={trips[1]}/> */}  

 <FlatList
    className='bg-white'
    data={trips}
    renderItem={({item}) =><TripListItem trip={item} />} />
    
   
   
   </>
   
  )
}