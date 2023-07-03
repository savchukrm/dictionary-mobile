import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Text,
  View,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { FONTS, COLORS } from '../../constants';

const Header = ({ createItem, title }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [validForm, setValidForm] = useState(false);

  const { id } = useSelector((state) => state.user);

  useEffect(() => {
    if (inputText.length >= 1) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [inputText]);

  const handleSubmit = () => {
    createItem(id, inputText);
    setModalVisible(false);
    setInputText('');
  };

  return (
    <View
      style={{
        width: '90%',
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={33} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon name="add" size={33} color="white" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Create a new {title}</Text>

            <TouchableOpacity
              style={styles.closeIcon}
              onPress={() => setModalVisible(false)}
            >
              <Icon name="close" size={33} color="white" />
            </TouchableOpacity>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>new {title}</Text>

              <TextInput
                style={styles.input}
                placeholder="Input here..."
                value={inputText}
                onChangeText={setInputText}
              />
            </View>

            <Pressable
              onPress={() => handleSubmit()}
              disabled={validForm}
              style={[
                styles.button,
                styles.buttonClose,
                {
                  backgroundColor: validForm ? COLORS.greylight : COLORS.green,
                },
              ]}
            >
              <Text style={styles.textStyle}>Create</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 10, 0.6)',
  },
  modalView: {
    width: '90%',
    backgroundColor: '#173554',
    borderRadius: 20,
    paddingVertical: 45,
    paddingHorizontal: 30,

    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 12,
    elevation: 2,
    width: '100%',
  },
  buttonClose: {
    backgroundColor: COLORS.green,
  },
  textStyle: {
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: FONTS.medium,
  },
  modalText: {
    fontSize: 23,
    fontFamily: FONTS.regular,
    textAlign: 'center',
    marginBottom: 20,
    marginBottom: 15,
    textAlign: 'center',
    color: COLORS.white,
  },
  inputBlock: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  input: {
    height: 40,
    padding: 10,
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
    fontFamily: FONTS.light,
    backgroundColor: COLORS.white,
  },
  closeIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    color: COLORS.white,
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 10,
    fontFamily: FONTS.light,
  },
});

export default Header;
