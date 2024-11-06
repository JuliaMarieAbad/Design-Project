import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';

export default function StartWalkthroughScreen({ navigation }) {
  console.log("StartWalkthroughScreen is rendering"); // Log to check if screen renders

  return (
    <ImageBackground 
      source={require('../assets/WT.png')} // Background image for the walkthrough
      style={styles.background}
      resizeMode="cover"
      onError={(error) => console.log("Error loading background image:", error)} // Error handling for background image
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => {
          console.log("Finish button pressed"); // Log button press
          navigation.navigate('Finish'); // Navigate to FinishScreen
        }}>
          <Text style={styles.buttonText}>Finish</Text> {/* Updated button text */}
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
    resizeMode: 'cover',
  },
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 16,
    backgroundColor: 'transparent',
  },
  backButton: {
    backgroundColor: '#FF8A8A', 
    paddingVertical: 8, // Increased padding for better touch area
    paddingHorizontal: 12, // Increased padding for better touch area
    borderRadius: 8,
    position: 'absolute', // Position to bottom right
    bottom: 20, // Distance from the bottom
    right: 5, // Distance from the right edge
  },
  buttonText: {
    color: '#FFFFFF', 
    fontWeight: 'bold', 
    fontSize: 16,
  },
});