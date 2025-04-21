import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

import Talaan from '@/components/Talaan';

const TalaanScreen = () => {
  const [talaan, setTalaan] = useState([
    { id: '1', text: 'tala_1' },
    { id: '2', text: 'tala_2' },
    { id: '3', text: 'tala_3' },
  ]);

  return (
    <View style={styles.container}>
      <Talaan talaan={talaan} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff2f1',
  },
});

export default TalaanScreen;
