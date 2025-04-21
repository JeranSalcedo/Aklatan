import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useState, useRef } from 'react';

const AklatanItem = ({ item, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(item.title);

  const inputRef = useRef(null);

  const handleSave = () => {
    if (newTitle.trim() === '') return;

    const data = {
      title: newTitle,
      author: item.author,
    };

    onEdit(item.$id, data);
    setIsEditing(false);
  };

  return (
    <View style={styles.item}>
      {isEditing ? (
        <TextInput
          ref={inputRef}
          style={styles.input}
          value={newTitle}
          onChangeText={setNewTitle}
          autoFocus
          onSubmitEditing={handleSave}
          returnKeyType='done'
        />
      ) : (
        <Text style={styles.itemText}>
          {item.title} {item.author}
        </Text>
      )}
      <View style={styles.actions}>
        {isEditing ? (
          <TouchableOpacity
            onPress={() => {
              handleSave();
              inputRef.current?.blur();
            }}
          >
            <Text style={styles.edit}>💾</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIsEditing(true)}>
            <Text style={styles.edit}>✏️</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => onDelete(item.$id, item.title)}>
          <Text style={styles.delete}>❌</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f3c9b1',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  itemText: {
    color: '#5e4646',
    fontSize: 18,
  },
  actions: {
    flexDirection: 'row',
  },
  edit: {
    fontSize: 18,
    marginRight: 10,
    color: 'blue',
  },
  delete: {
    fontSize: 18,
    color: 'red',
  },
});

export default AklatanItem;
