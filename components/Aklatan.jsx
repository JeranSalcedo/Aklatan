import { FlatList } from 'react-native';

import AklatanItem from './AklatanItem';

const Aklatan = ({ aklatan, onEdit, onDelete }) => {
  return (
    <FlatList
      data={aklatan}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <AklatanItem item={item} onEdit={onEdit} onDelete={onDelete} />
      )}
    />
  );
};

export default Aklatan;
