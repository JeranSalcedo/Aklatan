import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
  return (
    <>
      <StatusBar style='light' />
      <Stack>
        <Stack.Screen
          name='(tabs)'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name='not-found' options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default RootLayout;
