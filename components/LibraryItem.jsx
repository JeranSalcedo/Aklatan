import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useState, useRef } from 'react';

import { Ionicons } from '@expo/vector-icons';

import TempImage from '@/assets/images/react-logo.png';

const LibraryItem = ({ item, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(item.title);

  const inputRef = useRef(null);

  // const handleSave = () => {
  //   if (newTitle.trim() === '') return;

  //   const data = {
  //     title: newTitle,
  //     author: item.author,
  //   };

  //   onEdit(item.$id, data);
  //   setIsEditing(false);
  // };

  return (
    <View style={styles.container}>
      <Image style={styles.cover} source={TempImage} />
      <View style={styles.item}>
        <View>
          <Text numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>
          {item.author ? (
            <Text numberOfLines={1} style={styles.author}>
              {item.author}
            </Text>
          ) : null}
          {item.publisher ? (
            <Text numberOfLines={1} style={styles.publisher}>
              {item.publisher}
            </Text>
          ) : null}
          {item.year_published ? (
            <Text numberOfLines={1} style={styles.year}>
              {item.year_published}
            </Text>
          ) : null}
        </View>
        <View style={styles.actions}>
          <TouchableOpacity>
            <Ionicons name='arrow-redo-outline' color='#555' size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsEditing(true)}>
            <Ionicons name='pencil-outline' color='#555' size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete(item.$id, item.title)}>
            <Ionicons name='trash-outline' color='#555' size={20} />
          </TouchableOpacity>
        </View>
      </View>

      {/* <View style={styles.actions}>
        {isEditing ? (
          <TouchableOpacity
            onPress={() => {
              handleSave();
              inputRef.current?.blur();
            }}
          >
            <Text style={styles.edit}>
              <Ionicons name='save-outline' color='#555' size={20} />
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIsEditing(true)}>
            <Text style={styles.edit}>
              <Ionicons name='pencil-outline' color='#555' size={20} />
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => onDelete(item.$id, item.title)}>
          <Text style={styles.delete}>
            <Ionicons name='trash-outline' color='#555' size={20} />
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3c9b1',
    borderRadius: 5,
    flexDirection: 'row',
    padding: 5,
    marginVertical: 5,
  },
  item: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
  },
  cover: {
    height: 125,
    width: 93.75,
  },
  title: {
    color: '#5e4646',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default LibraryItem;
