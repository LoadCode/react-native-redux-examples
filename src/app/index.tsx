import React, {useState} from 'react';
import {View, SafeAreaView, Text} from 'react-native';

import arrow from './assets/arrow.png';
import styles from './styles';
import CustomButton from './components/CustomButton';

function App() {
  const [counter, setCounter] = useState(0);
  const onPressIncrease = () => setCounter(counter + 1);
  const onPressDecrease = () => setCounter(counter - 1);
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <Text style={styles.display}>{counter}</Text>
        <View style={styles.buttonContainer}>
          <CustomButton
            style={styles.button}
            onPress={onPressIncrease}
            title="Incrementar"
            icon={arrow}
          />
          <CustomButton
            onPress={onPressDecrease}
            style={styles.button}
            title="Disminuir"
            icon={arrow}
            iconStyle={styles.icon}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
