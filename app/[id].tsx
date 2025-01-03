import { useLocalSearchParams , Stack} from 'expo-router'
import { Text, ScrollView , View, ActivityIndicator} from 'react-native'
import { useEffect, useState } from 'react';
import { supabase } from '~/utils/supabase';


export default function TripDetail() {
  const {id} = useLocalSearchParams();

  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(false);
  
 
 

  useEffect(() => {
    fetchTrip();
  }, [id]);

  const fetchTrip = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('trips').select('*').eq('id', id).single();
    setTrip(data);

    setLoading(false);
    };

  if (!trip) {
    return <Text>Trip not found, voyage non trouvé</Text>
  }

  return (
    <View className="flex-1 gap-3 bg-white p-3">
      <Stack.Screen
        options={{ title: 'Votre voyage',  headerTintColor: 'black' }}
      />

      

      

      <Text className="text-lg font-bold">{trip.price}</Text>

      
      
      
    </View>
  );
}