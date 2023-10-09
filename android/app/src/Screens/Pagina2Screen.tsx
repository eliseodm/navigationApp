import React from 'react';
import {View, Button} from 'react-native';
import {styles} from '../theme/PaginaScreen.style';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}

export const Pagina2Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalScreenStyle}>
      <Button title="Pagina 1" onPress={() => navigation.pop()} />
      <Button title="Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
