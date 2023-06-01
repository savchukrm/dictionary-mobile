import { View, Text } from 'react-native';

const Navigation = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingBottom: 20,
        justifyContent: 'space-between',
      }}
    >
      <Text>search</Text>
      <Text>folders</Text>
      <Text>profile</Text>
    </View>
  );
};

export default Navigation;
