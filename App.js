import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar 
      style="light" 
      backgroundColor='#87103f'//this color only works when the statusbar is not hidden
      hidden={true} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    paddingTop:Platform.OS === 'android' ? Constants.statusBarHeight : 0//if using android device, this padding is used
  }
});
