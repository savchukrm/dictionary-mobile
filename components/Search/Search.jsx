import { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { fetchData } from '../../redux/data/action';

import { COLORS, FONTS } from '../../constants';
import Button from '../Button';

const Search = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    if (search.length >= 1) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [search]);

  const handleSubmit = async () => {
    dispatch(fetchData(search));
    setSearch('');
  };

  const handleChange = (value) => {
    setSearch(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={search}
        placeholder="Input here..."
        onChangeText={handleChange}
      />
      <Button disabled={validForm} title="Search" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    height: 40,
    padding: 10,
    width: '67%',
    marginBottom: 10,
    borderRadius: 10,
    fontFamily: FONTS.light,
    backgroundColor: COLORS.white,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    color: COLORS.white,
    backgroundColor: COLORS.teal,
  },
});

export default Search;
