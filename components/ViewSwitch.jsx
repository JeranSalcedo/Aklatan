import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const ViewSwitch = ({ viewMode, setViewMode }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setViewMode(0)}>
        <Ionicons
          name={viewMode === 0 ? 'list' : 'list-outline'}
          color='#f3c9b1'
          size={20}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setViewMode(1)}>
        <Ionicons
          name={viewMode === 1 ? 'grid' : 'grid-outline'}
          color='#f3c9b1'
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#5e4646',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 30,
    width: 70,
  },
});

export default ViewSwitch;
