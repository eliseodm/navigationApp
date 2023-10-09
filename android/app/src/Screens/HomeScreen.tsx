import {View, Text, Button} from 'react-native';
import React from 'react';
import {styles} from '../theme/PaginaScreen.style';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.globalScreenStyle}>
      <Button title="Pagina1" onPress={() => navigation.navigate('Pagina1')} />
      <Button title="Pagina2" onPress={() => navigation.navigate('Pagina2')} />
    </View>
  );
};
