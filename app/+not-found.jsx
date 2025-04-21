import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: '404: page not found.' }} />
      <View style={StyleSheet.container}>
        <Link href='/' style={styles.button}>
          Go back to Home
        </Link>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff2f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    backgroundColor: '#db8c61',
  },
});

export default NotFoundScreen;
