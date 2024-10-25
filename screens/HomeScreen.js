import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  const { userName } = route.params; // Get the user's first name from navigation params

  return (
    <ImageBackground 
      source={require('../assets/BG2.png')} // Adjust the path as needed
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Image at the top center */}
        <Image 
          source={require('../assets/blood.png')} // Adjust the path as needed
          style={styles.logo} 
        />

        <Text style={styles.title}>Welcome, {userName}!</Text>

        {/* Custom Button for Video Tutorial */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Tutorial')}
        >
          <Text style={styles.buttonText}>Video Tutorial</Text>
        </TouchableOpacity>

        {/* Text Label for Choosing a Mode */}
        <Text style={styles.chooseModeText}>Choose a Mode</Text>

        {/* Custom Button for Walkthrough Mode */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => {/* Handle Walkthrough mode */}}
        >
          <Text style={styles.buttonText}>Walkthrough Mode</Text>
        </TouchableOpacity>

        {/* Custom Button for RetDem Mode */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => {/* Handle RetDem mode */}}
        >
          <Text style={styles.buttonText}>RetDem Mode</Text>
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
  logo: {
    width: 100,  // Adjust width as needed
    height: 100, // Adjust height as needed
    marginBottom: 20, // Space between the logo and title
    alignSelf: 'center', // Center the image horizontally
  },
  title: { 
    fontSize: 24, 
    marginBottom: 20,
    fontWeight: 'bold', // Make the text bold
    color: '#973535' // Set the color of the text
  },
  chooseModeText: {
    fontSize: 18, // Adjust the font size as needed
    marginVertical: 10, // Add vertical margin for spacing
    fontWeight: 'bold', // Make the text bold if desired
    color: 'white', // Set the color of the text to white
  },
  button: {
    backgroundColor: '#c95555', // Set button background color
    padding: 12,
    borderRadius: 8,
    marginVertical: 8, // Add vertical margin for spacing between buttons
    width: '100%', // Full-width button
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Text color for buttons
    fontSize: 16,
    fontWeight: 'bold',
  },
});