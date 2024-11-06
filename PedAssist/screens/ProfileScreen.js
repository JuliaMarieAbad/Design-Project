import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function ProfileScreen({ route }) {
  const { userName } = route.params; // Retrieve the username passed from HomeScreen

  return (
    <ImageBackground 
      source={require('../assets/BG2.png')} // Set the background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        
        <Text style={styles.infoText}>Username: {userName}</Text>
        {/* Additional user information can go here */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 16,
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#973535', 
    marginBottom: 20 
  },
  infoText: {
    fontSize: 18,
    color: '#8a3030',
  },
});
