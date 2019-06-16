import { createStackNavigator, createAppContainer } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';

import styles from './NavigationStyles';
import Counter from '../Containers/Counter';

// Manifest of possible screens
// eslint-disable-next-line prettier/prettier
const PrimaryNav = createStackNavigator({
    Counter: { screen: Counter },
    LaunchScreen: { screen: LaunchScreen },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  }
);

export default createAppContainer(PrimaryNav);
