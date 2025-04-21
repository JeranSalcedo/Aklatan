import { FlatList } from 'react-native';

import Tala from './Tala';

const Talaan = ({ talaan }) => {
  return (
    <FlatList
      data={talaan}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Tala item={item} />}
    />
  );
};

export default Talaan;
