import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';

export default function Publish() {
  return (
    <>
      <Stack.Screen options={{ title: 'Publier' }} />
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/publish.tsx" title="Publier" />
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
