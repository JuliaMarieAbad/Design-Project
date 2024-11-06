import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export default function FinishRDScreen({ navigation }) {
  console.log("FinishRDScreen is rendering"); // Log to check if screen renders

  return (
    <ImageBackground 
      source={require('../assets/R1.png')} // Background image for the FinishRDScreen
      style={styles.background}
      resizeMode="cover"
      onError={(error) => console.log("Error loading background image:", error)} // Error handling for background image
    >
      <View style={styles.container}>
        <Text style={styles.title}></Text>

        {/* Back to Home Button - Positioned at the bottom center */}
        <TouchableOpacity style={styles.homeButton} onPress={() => {
          console.log("Back to Home button pressed"); // Log button press
          navigation.navigate('Home'); // Navigate to HomeScreen
        }}>
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
    justifyContent: 'flex-end', // Align items to the bottom of the container
    alignItems: 'center',
    backgroundColor: 'transparent', // Make sure the background is transparent
    paddingBottom: 5, // Add padding to prevent the button from being too close to the bottom
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#FFFFFF', // Text color for visibility on the background
  },
  homeButton: {
    backgroundColor: '#FF6B6B', // Button color
    paddingVertical: 10, 
    paddingHorizontal: 10, 
    borderRadius: 8,
    alignItems: 'center', // Center the text within the button
  },
  buttonText: {
    color: '#FFFFFF', 
    fontWeight: 'bold', 
    fontSize: 16,
  },
});
