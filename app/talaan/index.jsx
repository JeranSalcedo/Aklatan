import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import { useState } from 'react';

const Talaan = () => {
  const [talaan, setTalaan] = useState([
    { id: '1', text: 'temp_1' },
    { id: '2', text: 'temp_2' },
    { id: '3', text: 'temp_3' },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [temp, setTemp] = useState('');

  return (
    <View style={styles.container}>
      <FlatList
        data={talaan}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tala}>
            <Text style={styles.talaText}>{item.text}</Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType='slide'
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add new</Text>
            <TextInput
              style={styles.input}
              placeholder='...'
              placeholderTextColor='#aaa'
              value={temp}
              onChangeText={setTemp}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff2f1',
  },
  tala: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f3c9b1',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  talaText: {
    color: '#5e4646',
    fontSize: 18,
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    bacckgroundColor: '#fff2f1',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    color: '#5e4646',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#f3c9b1',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#5e4646',
  },
  saveButton: {
    backgroundColor: '#db8c61',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    color: '#fff2f1',
  },
});

export default Talaan;
