import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');

  return (
    <ImageBackground 
      source={require('../assets/BG1.png')} // Adjust path as needed
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput 
          style={styles.input} 
          placeholder="First Name" 
          placeholderTextColor="gray" 
          onChangeText={setFirstName} // Update state on input
        />
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          placeholderTextColor="gray" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          secureTextEntry 
          placeholderTextColor="gray" 
        />
        
        {/* Custom Button for Sign Up */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Home', { userName: firstName })} // Pass first name
        >
          <Text style={styles.buttonText}>Sign Up</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'transparent',
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', // Make text bold
    color: '#ff8181',  // Set text color
    marginBottom: 20 
  },
  input: { 
    width: '100%', 
    padding: 10, 
    marginBottom: 10, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    backgroundColor: 'white' // Optional: Set a white background for inputs
  },
  button: {
    backgroundColor: '#c95555', // Set button background color
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    width: '100%', // Full-width button
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Text color for buttons
    fontSize: 16,
    fontWeight: 'bold',
  },
});