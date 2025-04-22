import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { AuthProvider } from '@/contexts/AuthContext';

const RootLayout = () => {
  return (
    <AuthProvider>
      <StatusBar style='light' />
      <Stack>
        <Stack.Screen
          name='(protected)'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='auth'
          options={{ headerTitle: 'Login', headerShown: false }}
        />
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;
