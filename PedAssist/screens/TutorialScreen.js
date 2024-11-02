import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function TutorialScreen({ navigation }) {
  return (
    <ImageBackground 
      source={require('../assets/BG2.png')}  // Use the specified background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Video Tutorial</Text>
        <Text style={styles.description}>Here you can play the video tutorial.</Text>
        
        {/* Custom Back to Home button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
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
    padding: 16 
  },
  title: { 
    fontSize: 24, 
    marginBottom: 20,
    fontWeight: 'bold', // Make text bold
    color: '#973535', // Set color to #973535
  },
  description: {
    fontSize: 15,
    marginBottom: 18,
    fontWeight: 'bold', // Make description text bold
    color: '#973535', // Set color to #973535
  },
  button: {
    backgroundColor: '#973535', // Set button background color
    paddingVertical: 10, // Padding for vertical sides
    paddingHorizontal: 20, // Padding for horizontal sides
    borderRadius: 5, // Rounded corners
  },
  buttonText: {
    color: '#FFFFFF', // Set button text color to white
    fontWeight: 'bold', // Make button text bold
    fontSize: 16, // Button text size
  },
});