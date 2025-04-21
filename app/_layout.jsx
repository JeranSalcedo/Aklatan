import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5e4646',
        },
        headerTintColor: '#f3c9b1',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        contentStyle: {
          paddingHorizontal: 10,
          paddingTop: 10,
          backgroundColor: '#fff',
        },
      }}
    >
      <Stack.Screen name='index' options={{ title: 'Home' }} />
      <Stack.Screen name='koleksyon' options={{ headerTitle: 'Koleksyon' }} />
      <Stack.Screen name='talaan' options={{ headerTitle: 'Talaan' }} />
    </Stack>
  );
};

export default RootLayout;
