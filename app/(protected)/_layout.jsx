import { Stack, Redirect } from 'expo-router';

import { useAuth } from '@/contexts/AuthContext';

const ProtectedLayout = () => {
  const { user } = useAuth();

  return !user ? (
    <Redirect href='/auth' />
  ) : (
    <Stack>
      <Stack.Screen
        name='(tabs)'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ProtectedLayout;
