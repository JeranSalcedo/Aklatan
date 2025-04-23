import { ScrollView, StyleSheet } from 'react-native';

import LibraryItem from './LibraryItem';

const Library = ({ library, onEdit, onDelete }) => {
  return (
    <ScrollView style={styles.container}>
      {library.map((item) => (
        <LibraryItem
          key={item.$id}
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Library;
