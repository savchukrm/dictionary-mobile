import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { COLORS } from '../../constants';

const Category = () => {
  const [showAll, setShowAll] = useState(false);

  const { word } = useSelector((state) => state.data);

  const nouns = word.results.reduce((all, obj) => {
    if (obj.partOfSpeech === 'noun') {
      const synonyms = Array.isArray(obj.synonyms)
        ? obj.synonyms.filter(Boolean)
        : [];

      if (synonyms.length > 3) {
        synonyms.length = 3;
      }

      if (synonyms.length) {
        return all.concat([[obj.definition, synonyms]]);
      }

      return all.concat([[obj.definition, synonyms]]);
    }
    return all;
  }, []);

  const verbs = word.results.reduce((all, obj) => {
    if (obj.partOfSpeech === 'verb') {
      const synonyms = Array.isArray(obj.synonyms)
        ? obj.synonyms.filter(Boolean)
        : [];

      if (synonyms.length > 3) {
        synonyms.length = 3;
      }

      if (synonyms.length) {
        return all.concat([[obj.definition, synonyms]]);
      }

      return all.concat([[obj.definition, synonyms]]);
    }
    return all;
  }, []);

  const adjectives = word.results.reduce((all, obj) => {
    if (obj.partOfSpeech === 'adjective') {
      const synonyms = Array.isArray(obj.synonyms)
        ? obj.synonyms.filter(Boolean)
        : [];

      if (synonyms.length > 3) {
        synonyms.length = 3;
      }

      if (synonyms.length) {
        return all.concat([[obj.definition, synonyms]]);
      }

      return all.concat([[obj.definition, synonyms]]);
    }
    return all;
  }, []);

  const adverbs = word.results.reduce((all, obj) => {
    if (obj.partOfSpeech === 'adverb') {
      const synonyms = Array.isArray(obj.synonyms)
        ? obj.synonyms.filter(Boolean)
        : [];

      if (synonyms.length > 3) {
        synonyms.length = 3;
      }

      if (synonyms.length) {
        return all.concat([[obj.definition, synonyms]]);
      }

      return all.concat([[obj.definition, synonyms]]);
    }
    return all;
  }, []);

  const adjectivesSatellite = word.results.reduce((all, obj) => {
    if (obj.partOfSpeech === 'adjective satellite') {
      const synonyms = Array.isArray(obj.synonyms)
        ? obj.synonyms.filter(Boolean)
        : [];

      if (synonyms.length > 3) {
        synonyms.length = 3;
      }

      if (synonyms.length) {
        return all.concat([[obj.definition, synonyms]]);
      }

      return all.concat([[obj.definition, synonyms]]);
    }
    return all;
  }, []);

  const partsOfSpeech = [
    ['noun', nouns],
    ['verb', verbs],
    ['adjective', adjectives],
    ['adverb', adverbs],
    ['adjective satellite', adjectivesSatellite],
  ];

  const filteredPartsOfSpeech = partsOfSpeech.filter(
    (obj) => obj[1].length >= 1
  );

  const renderListItem = ({ item }) => {
    const [pos, items] = item;
    const displayItems = showAll ? items : items.slice(0, 5);

    return (
      <View style={styles.list}>
        <Text style={[styles.heading, { color: COLORS.greylight }]}>{pos}</Text>

        {displayItems.map((item, i) => (
          <View key={i} style={{ marginBottom: 10 }}>
            <Text
              style={{ color: COLORS.white, fontSize: 16, fontWeight: '500' }}
            >
              {item[0]}
            </Text>

            <View style={{ flexDirection: 'row', gap: 5 }}>
              {item[1].length > 0 &&
                item[1].map((synonyms, i) => (
                  <Text key={i} style={[styles.synonyms]}>
                    {synonyms}
                  </Text>
                ))}
            </View>
          </View>
        ))}

        {items.length > 5 && (
          <View style={styles.btnBlock}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setShowAll(!showAll)}
            >
              <Text style={styles.btnText}>
                {showAll ? 'See less' : 'See more'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={filteredPartsOfSpeech}
      renderItem={renderListItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginBottom: 20,
  },
  text: {
    color: COLORS.darkblue,
  },
  heading: {
    marginBottom: 8,
  },
  synonyms: {
    fontStyle: 'italic',
    color: COLORS.greylight,
    flexDirection: 'row',
  },
  btnBlock: {
    marginTop: 8,
  },
  btn: {
    width: 75,
    borderBottomColor: COLORS.greylight,
    borderBottomWidth: 1,
  },
  btnText: {
    color: COLORS.greylight,
    fontWeight: 'bold',
  },
});

export default Category;
