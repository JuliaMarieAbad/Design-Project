import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

export default function RetDemScreen({ navigation }) {
  console.log("RetDemScreen is rendering"); // Log to check if screen renders

  return (
    <ImageBackground 
      source={require('../assets/R2.png')} // Background image for the RetDem screen
      style={styles.background}
      resizeMode="cover"
      onError={(error) => console.log("Error loading background image:", error)} // Error handling for background image
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.finishButton} onPress={() => {
          console.log("Finish button pressed");
          navigation.navigate('FinishRDScreen'); // Navigate to FinishRDScreen
        }}>
          <Text style={styles.buttonText}>Finish</Text> {/* Finish button text */}
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
    backgroundColor: 'transparent', // Make the background transparent to see the image
    paddingBottom: 50, // Add some padding to prevent the button from being too close to the bottom
  },
  finishButton: {
    backgroundColor: '#FF8A8A', // Button background color
    paddingVertical: 10, // Vertical padding for button
    paddingHorizontal: 20, // Horizontal padding for button
    borderRadius: 8, // Rounded corners
    alignItems: 'center', // Center the text within the button
  },
  buttonText: {
    color: '#FFFFFF', 
    fontWeight: 'bold', 
    fontSize: 16,
  },
});
