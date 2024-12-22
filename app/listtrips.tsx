import React from 'react';
import {  FlatList, View, Text} from 'react-native';
import  TripListItem  from '~/components/TripListItem';
import trips from '~/assets/trips.json';



export default function ListTrips() {
  return (
 
      <FlatList
     
      data={trips}
      renderItem={({item}) =><TripListItem trip={item}/>}
      contentContainerStyle={{gap:25, alignItems: 'center', marginTop:'20'}}
      
    />
    
    
  );
}
