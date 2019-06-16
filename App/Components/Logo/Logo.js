import React from 'react';
// import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import styles from './LogoStyle';
import { Images } from '../../Themes';

const Logo = () => {
  return (
    <View style={styles.centered}>
      <Image source={Images.launch} style={styles.logo} />
    </View>
  );
};

// Logo.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }

export default Logo;
