import Title from '@/components/ui/text/Title/Title';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View, Text, ScrollView, TextInput, Image } from 'react-native';
import Header from '../ui/Layout/Header';
import ImageComponent from '../ui/Image/ImageComponent';
import CustomTextInput from '../ui/TextInput/CustomTextInput';


export default function TurmaScreen() {
  return (
    <View style={styles.container}>

      <Header
        title='Turma'
        subtitle='DSM4'
        titleStyle={{ color: '#ff0000' }}
        subtitleStyle={{ color: '#000000' }}
      />
      <ImageComponent
        uri='https://cdn-icons-png.flaticon.com/512/7092/7092289.png'
      />
      <CustomTextInput hint='Digite '/>
      
      <View style={styles.separator} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
