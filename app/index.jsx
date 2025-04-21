import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import TempImage from '@/assets/images/react-logo.png';

const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={TempImage} style={styles.image} />
      <Text style={styles.title}>Welcome to Aklatan</Text>
      <Text style={styles.subtitle}>test</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/talaan')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff2f1',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#db8c61',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff2f1',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
