import { View, Text, StyleSheet } from 'react-native';

const Tala = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.text}</Text>
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
});

export default Tala;
