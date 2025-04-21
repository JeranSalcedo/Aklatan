import { FlatList } from 'react-native';

import AklatanItem from './AklatanItem';

const Aklatan = ({ aklatan }) => {
  return (
    <FlatList
      data={aklatan}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <AklatanItem item={item} />}
    />
  );
};

export default Aklatan;
