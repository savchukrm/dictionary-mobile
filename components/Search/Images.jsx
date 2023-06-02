import { Image, View } from 'react-native';
import { assets } from '../../constants';

const Images = () => {
  return (
    <View>
      <Image
        style={{
          width: 400,
          height: 400,
        }}
        resizeMode="cover"
        source={assets.search}
      />
    </View>
  );
};

export default Images;
