import { FlatList } from 'react-native';

import Log from './Log';

const Logs = ({ logs }) => {
  return (
    <FlatList
      data={logs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Log item={item} />}
    />
  );
};

export default Logs;
