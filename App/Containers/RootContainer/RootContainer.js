import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import ReduxNavigation from '../../Navigation/ReduxNavigation';
import { StartupActions } from '../../Redux/StartupRedux';

// Styles
import styles from './RootContainerStyles';

const RootContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(StartupActions.startup());
  }, []);

  return (
    <View style={styles.applicationView}>
      <StatusBar barStyle="light-content" />
      <ReduxNavigation />
    </View>
  );
};

export default RootContainer;
