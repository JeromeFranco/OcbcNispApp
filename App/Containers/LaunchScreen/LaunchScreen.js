import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, Image, View } from 'react-native';
import { Images } from '../../Themes';

// Styles
import styles from './LaunchScreenStyle';
import Logo from '../../Components/Logo';

const LaunchScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.push('Counter');
    }, 2000);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Image source={Images.background} style={styles.backgroundImage} resizeMode="stretch" />
      <ScrollView style={styles.container}>
        <Logo />
        <View style={styles.section}>
          <Image source={Images.ready} />
          <Text style={styles.sectionText}>
            This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in
            that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of
            your fully functioning app using Ignite.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

LaunchScreen.propTypes = {
  navigation: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default LaunchScreen;
