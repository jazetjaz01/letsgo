import '../global.css';
import { Stack } from 'expo-router';


import { Outfit_400Regular,Outfit_500Medium, Outfit_700Bold, useFonts } from '@expo-google-fonts/outfit';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import AuthProvider from '~/contexts/AuthProvider';
SplashScreen.preventAutoHideAsync();




export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Outfit_400Regular,Outfit_500Medium, Outfit_700Bold
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <AuthProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
    </AuthProvider>
  );
}
