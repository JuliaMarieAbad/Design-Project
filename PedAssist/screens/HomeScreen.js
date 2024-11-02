import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  // Access the username passed from the SignupScreen
  const { userName } = route.params; 

  return (
    <ImageBackground 
      source={require('../assets/BG2.png')} // Set the background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image 
          source={require('../assets/blood.png')} // Logo image
          style={styles.logo} 
        />

        <Text style={styles.title}>Welcome, {userName}!</Text> {/* Display the username */}

        {/* Custom Button for Video Tutorial */}
        <TouchableOpacity 
          style={styles.videoButton} // Updated style for the Video Tutorial button
          onPress={() => navigation.navigate('Tutorial')} // Navigate to Tutorial screen
        >
          <Text style={styles.buttonText}>Video Tutorial</Text>
        </TouchableOpacity>

        <Text style={styles.chooseModeText}>Choose a Mode</Text>

        {/* Walkthrough Mode Button */}
        <TouchableOpacity 
          style={styles.walkthroughButton} // Updated style for the Walkthrough button
          onPress={() => navigation.navigate('Walkthrough')} // Navigate to Walkthrough screen
        >
          <View style={styles.modeContainer}>
            <Text style={styles.modeTitle}>Walkthrough</Text>
            <Text style={styles.modeDescription}>Step-by-step guide & immediate feedback</Text>
            <Image 
              source={require('../assets/WM.png')} // Logo for Walkthrough
              style={styles.modeLogo} 
            />
          </View>
        </TouchableOpacity>

        {/* RetDem Mode Button */}
        <TouchableOpacity 
          style={styles.modeButton} 
          onPress={() => navigation.navigate('RetDem')} // Navigate to RetDem screen
        >
          <View style={styles.modeContainer}>
            <Image 
              source={require('../assets/RTM.png')} // Logo for RetDem
              style={styles.modeLogo} 
            />
            <View style={styles.modeTextContainer}>
              <Text style={styles.modeTitle}>RetDem</Text>
              <Text style={styles.modeDescription}>Unassisted Performance & Overall Assessment</Text>
            </View>
          </View>
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
    padding: 16,
  },
  logo: {
    width: 150,  
    height: 150, 
    marginBottom: 20, 
    alignSelf: 'center', 
  },
  title: { 
    fontSize: 24, 
    marginBottom: 20,
    fontWeight: 'bold', 
    color: '#973535', // Title text color
  },
  chooseModeText: {
    fontSize: 13, 
    marginVertical: 0, 
    fontWeight: 'bold', 
    color: '#8a3030', // Choose mode text color
  },
  videoButton: {
    backgroundColor: '#8a3030', // Set Video Tutorial button background color
    padding: 12,
    borderRadius: 8,
    marginVertical: 8, 
    alignSelf: 'center', // Center the Video Tutorial button
  },
  walkthroughButton: {
    backgroundColor: '#ff7878', // Set Walkthrough button background color
    padding: 16, // Increased padding for a bigger button
    borderRadius: 8,
    marginVertical: 8, 
    width: '100%', 
    alignItems: 'center', // Center items within the button
  },
  modeButton: {
    backgroundColor: '#c95555', // Set button background color for RetDem
    padding: 12,
    borderRadius: 8,
    marginVertical: 8, 
    width: '100%', 
    alignItems: 'center', // Center items within the button
  },
  modeContainer: {
    flexDirection: 'row', // Align items horizontally for Walkthrough mode
    alignItems: 'center', // Center items vertically
    justifyContent: 'center', // Center items horizontally
    width: '100%',
  },
  modeTextContainer: {
    marginLeft: 10, // Add some space between the logo and text
    alignItems: 'center', // Center the text vertically
    textAlign: 'center', // Center the text within its container
  },
  modeTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: 'white', // Change title text color to white
    marginBottom: 4, // Space between title and description
  },
  modeDescription: {
    fontSize: 14, 
    color: 'white', // Keep description color as white
    textAlign: 'center', // Center the description text
  },
  modeLogo: {
    width: 40,  // Set width for logos
    height: 40, // Set height for logos
    marginHorizontal: 10, // Space between the logo and text
  },
  buttonText: {
    color: 'white', // Button text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});
