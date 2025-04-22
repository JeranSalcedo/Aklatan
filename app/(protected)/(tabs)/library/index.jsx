import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useState, useEffect } from 'react';

import { useAuth } from '@/contexts/AuthContext';

import Library from '@/components/Library';
import LibraryModal from '@/components/LibraryModal';

import booksService from '@/services/booksService';

const LibraryScreen = () => {
  const { user } = useAuth();

  const [library, setLibrary] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newBook, setNewBook] = useState('');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      fetchBooks();
    }
  }, [user]);

  const addBook = async () => {
    if (newBook.trim() === '') return;

    const response = await booksService.addBook(user.$id, newBook, '');

    if (response.error) {
      setError(response.error);
      Alert.alert('[ERROR]', response.error);
    } else {
      setLibrary([...library, response.data]);
      setError(null);
    }

    setNewBook('');
    setModalVisible(false);
  };

  const fetchBooks = async () => {
    setLoading(true);

    const response = await booksService.getBooks(user.$id);

    if (response.error) {
      setError(response.error);
      Alert.alert('Error', response.error);
    } else {
      setLibrary(response.data);
      setError(null);
    }

    setLoading(false);
  };

  const updateBook = async (id, data) => {
    if (!data.title.trim()) {
      Alert.alert('Error', 'New title cannot be empty.');

      return;
    }

    const response = await booksService.updateBook(id, data);

    if (response.error) {
      setError(response.error);
      Alert.alert('Error', response.error);
    } else {
      setLibrary((previousLibrary) =>
        previousLibrary.map((book) =>
          book.$id === id ? { ...data, $id: id } : book
        )
      );
      setError(null);
    }
  };

  const deleteBook = async (id, title) => {
    Alert.alert('Confirm deletion', `Delete ${title}?`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          const response = await booksService.deleteBook(id);

          if (response.error) {
            setError(response.error);
            Alert.alert('Error', response.error);
          } else {
            setLibrary(library.filter((book) => book.$id !== id));
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
          {library.length === 0 ? (
            <Text style={styles.emptyText}>Your library is empty.</Text>
          ) : (
            <Library
              library={library}
              onEdit={updateBook}
              onDelete={deleteBook}
            />
          )}
        </>
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      <LibraryModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newBook={newBook}
        setNewBook={setNewBook}
        addBook={addBook}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: '#db8c61',
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 15,
    right: 15,
    padding: 15,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#c8c8c8',
    marginTop: 15,
  },
});

export default LibraryScreen;
