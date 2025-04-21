import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import Aklatan from '@/components/Aklatan';
import AklatanModal from '@/components/AklatanModal';

const KoleksyonScreen = () => {
  const [aklatan, setAklatan] = useState([
    { id: '1', text: 'aklat_1' },
    { id: '2', text: 'aklat_2' },
    { id: '3', text: 'aklat_3' },
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Aklatan aklatan={aklatan} />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add</Text>
      </TouchableOpacity>

      <AklatanModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setAklatan={setAklatan}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff2f1',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#db8c61',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff2f1',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default KoleksyonScreen;
