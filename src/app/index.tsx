import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {State} from '../interfaces/reduxInterfaces';
import CounterActions from '../redux/counter/actions';
import arrow from './assets/arrow.png';
import styles from './styles';
import CustomButton from './components/CustomButton';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector<State, number>(
    state => state.counter.counterValue,
  );
  const onPressIncrease = () =>
    dispatch(CounterActions.increaseCounter(counter));
  const onPressDecrease = () =>
    dispatch(CounterActions.decreaseCounter(counter));
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
