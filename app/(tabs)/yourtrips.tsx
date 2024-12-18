import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';

export default function Yourtrips() {
  return (
    <>
      <Stack.Screen options={{ title: 'Vos trajets' }} />
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/yourtrips.tsx" title="Vos trajets" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
