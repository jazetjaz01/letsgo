
import { Text , ScrollView, View} from 'react-native';
import trips from '../../assets/trips.json';
import TripListItem from '~/components/TripListItem';
import { useLocalSearchParams , Stack} from 'expo-router';


export default function TripDetailsScreen() {
const {id} = useLocalSearchParams();

  const trip =trips.find((trip) => trip.id===id);

  if (!trip) {
    return <Text>Trip not found, voyage non trouvé</Text>
  }


  return( 
  <ScrollView>
    <Stack.Screen options={{title:'Letsgo'}} />
   <View className='items-center mt-5'>
    <TripListItem trip={trip} />
    </View>
  </ScrollView>
  )
}
