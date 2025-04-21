import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const RootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5e4646',
        },
        headerShadowVisible: false,
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
        tabBarActiveTintColor: '#db8c61',
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='library'
        options={{
          title: 'Library',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'library' : 'library-outline'}
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='logs'
        options={{
          title: 'Logs',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'document' : 'document-text-outline'}
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'person-circle' : 'person-circle-outline'}
              color={color}
              size={20}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default RootLayout;
