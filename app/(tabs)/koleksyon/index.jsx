import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useState, useEffect } from 'react';

import Aklatan from '@/components/Aklatan';
import AklatanModal from '@/components/AklatanModal';

import aklatService from '@/services/aklatService';

const KoleksyonScreen = () => {
  const [aklatan, setAklatan] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newAklat, setNewAklat] = useState('');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAklat();
  }, []);

  const addAklat = async () => {
    if (newAklat.trim() === '') return;

    const response = await aklatService.addAklat(newAklat, '');

    if (response.error) {
      setError(response.error);
      Alert.alert('[ERROR]', response.error);
    } else {
      setAklatan([...aklatan, response.data]);
      setError(null);
    }

    setNewAklat('');
    setModalVisible(false);
  };

  const fetchAklat = async () => {
    setLoading(true);

    const response = await aklatService.getAklat();

    if (response.error) {
      setError(response.error);
      Alert.alert('[ERROR]', response.error);
    } else {
      setAklatan(response.data);
      setError(null);
    }

    setLoading(false);
  };

  const updateAklat = async (id, data) => {
    if (!data.title.trim()) {
      Alert.alert('[ERROR]', 'New title cannot be empty.');

      return;
    }

    const response = await aklatService.updateAklat(id, data);

    if (response.error) {
      setError(response.error);
      Alert.alert('[ERROR]', response.error);
    } else {
      setAklatan((previousAklatan) =>
        previousAklatan.map((aklat) =>
          aklat.$id === id ? { ...data, $id: id } : aklat
        )
      );
      setError(null);
    }
  };

  const deleteAklat = async (id, title) => {
    Alert.alert('Confirm deletion', `Delete ${title}?`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          const response = await aklatService.deleteAklat(id);

          if (response.error) {
            setError(response.error);
            Alert.alert('[ERROR]', response.error);
          } else {
            setAklatan(aklatan.filter((aklat) => aklat.$id !== id));
            setError(null);
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size='large' color='#db8c61' />
      ) : (
        <>
          {error && <Text style={styles.errorText}>{error}</Text>}
          <Aklatan
            aklatan={aklatan}
            onEdit={updateAklat}
            onDelete={deleteAklat}
          />
        </>
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add</Text>
      </TouchableOpacity>

      <AklatanModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newAklat={newAklat}
        setNewAklat={setNewAklat}
        addAklat={addAklat}
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
  },
});

export default KoleksyonScreen;
