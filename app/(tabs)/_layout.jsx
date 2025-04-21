import { Tabs } from 'expo-router';

const RootLayout = () => {
  return (
    <Tabs
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
      <Tabs.Screen
        name='index'
        options={{ title: 'Home', headerLeft: () => <></> }}
      />
      <Tabs.Screen name='koleksyon' options={{ headerTitle: 'Koleksyon' }} />
      <Tabs.Screen name='talaan' options={{ headerTitle: 'Talaan' }} />
      <Tabs.Screen name='not-found' options={{ headerShown: false }} />
    </Tabs>
  );
};

export default RootLayout;
