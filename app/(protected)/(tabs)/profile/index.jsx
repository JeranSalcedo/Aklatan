import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { useAuth } from '@/contexts/AuthContext';

const ProfileScreen = () => {
  const { user, logout } = useAuth();

  return user ? (
    <View style={styles.container}>
      <Text>
        {user.email} {user.$id} {user.password}
      </Text>
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logoutButton: {
    alignItems: 'center',
    backgroundColor: '#db8c61',
    borderRadius: 8,
    marginTop: 10,
    paddingVertical: 12,
    width: '100%',
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
