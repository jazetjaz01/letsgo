import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';

export default function Messages() {
  return (
    <>
      <Stack.Screen options={{ title: 'Messages' }} />
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/messages.tsx" title="Messages" />
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
