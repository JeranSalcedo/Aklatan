import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from '@/contexts/AuthContext';

const RootLayout = () => {
  return (
    <AuthProvider>
      <StatusBar style='light' />
      <Stack>
        <Stack.Screen
          name='(tabs)'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name='auth' options={{ headerTitle: 'Login' }} />
        <Stack.Screen name='not-found' options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;
