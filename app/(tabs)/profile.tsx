import { Stack } from 'expo-router';
import { Button, StyleSheet, View , } from 'react-native';
import { Redirect } from 'expo-router';
import { supabase } from '~/utils/supabase';
import { ScreenContent } from '~/components/ScreenContent';
import { useAuth } from '~/contexts/AuthProvider';
export default function Profile() {

  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Profile' }} />
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/profile.tsx" title="Profile" />
      </View>
    
      <Button title="Sign out" onPress={() => supabase.auth.signOut()} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
