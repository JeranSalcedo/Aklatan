import { FlatList } from 'react-native';

import LibraryItem from './LibraryItem';

const Library = ({ library, onEdit, onDelete }) => {
  return (
    <FlatList
      data={library}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <LibraryItem item={item} onEdit={onEdit} onDelete={onDelete} />
      )}
    />
  );
};

export default Library;
