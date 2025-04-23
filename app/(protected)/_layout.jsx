import { Stack, Redirect } from 'expo-router';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

import { useAuth } from '@/contexts/AuthContext';

const ProtectedLayout = () => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size='large' color='#db8c61' />
      </View>
    );

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

const styles = StyleSheet.create({
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default ProtectedLayout;
