import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Platform, useEffect } from 'react-native';

const App = () => {
  const [statusBarHeight, setStatusBarHeight] = React.useState(0);

  useEffect(() => {
    const getStatusBarHeight = async () => {
      if (Platform.OS === 'android') {
        const height = await StatusBar.currentHeight;
        setStatusBarHeight(height);
      }
    };
    getStatusBarHeight();
  }, []);

  return (
    <SafeAreaView style={[styles.container, { paddingTop: statusBarHeight }]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} translucent={true} />
      <View style={styles.innerContainer}>
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;