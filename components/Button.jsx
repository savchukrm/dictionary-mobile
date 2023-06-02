import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { COLORS } from '../constants';

const Button = ({ title, onPress, disabled }) => (
  <TouchableOpacity
    style={[
      styles.button,
      disabled ? styles.disabledButton : styles.enabledButton,
    ]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLORS.white,
  },
  enabledButton: {
    backgroundColor: COLORS.greysecond,
  },
  disabledButton: {
    backgroundColor: COLORS.greylight,
  },
});

export default Button;
