import { View, Text } from 'react-native';

import { useSelector } from 'react-redux';

const Word = () => {
  const { word, status } = useSelector((state) => state.data);

  return (
    <View>
      {word.results && <Text>{word.pronunciation.all}</Text>}
      <Text>Word</Text>
    </View>
  );
};

export default Word;
