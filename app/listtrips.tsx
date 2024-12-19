import React from 'react'
import {  FlatList, View, Text} from 'react-native'


import  TripListItem  from '~/components/TripListItem';

export default function listtrips() {
  return (
    <View>
    <TripListItem/>
    </View>
  );
}
