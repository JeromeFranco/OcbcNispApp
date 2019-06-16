import React, { useCallback } from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from './CounterStyle';
import { CounterActions } from '../../Redux/CounterRedux';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const increment = useCallback(() => dispatch(CounterActions.increment()), [dispatch]);
  const decrement = useCallback(() => dispatch(CounterActions.decrement()), [dispatch]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Counter Container</Text>
      <Text style={styles.text}>{counter}</Text>
      <Button title="+" onPress={increment} />
      <Button title="-" onPress={decrement} />
    </ScrollView>
  );
};

export default Counter;
