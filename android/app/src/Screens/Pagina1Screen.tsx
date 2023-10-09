import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/PaginaScreen.style';

export const Pagina1Screen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.globalScreenStyle}>
      <Button title="Pagina 2" onPress={() => navigation.navigate('Pagina2')} />
    </View>
  );
};
