import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, ImageBackground } from 'react-native';

export default function SignupScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const handleSignUp = () => {
    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match. Please try again.");
      return; // Exit the function if passwords do not match
    }

    // Clear the error message if passwords match
    setErrorMessage('');

    // Handle sign-up logic here (e.g., validation, API calls)

    // Navigate to the homepage and pass the username as a parameter
    navigation.navigate('Home', { userName: username });
  };

  return (
    <ImageBackground 
      source={require('../assets/BG.png')} // Set background image
      style={styles.background}
    >
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          placeholderTextColor="gray" // Placeholder text color
        />
        <TextInput 
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          placeholderTextColor="gray" // Placeholder text color
        />
        <TextInput 
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="gray" // Placeholder text color
        />
        <TextInput 
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="gray" // Placeholder text color
        />
        <TextInput 
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="gray" // Placeholder text color
        />
        <TextInput 
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          placeholderTextColor="gray" // Placeholder text color
        />
        
        {/* Render error message if exists */}
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    color: 'gray', // Text color inside the input boxes
  },
  button: {
    backgroundColor: '#c95555', // Button background color
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  buttonText: {
    color: 'white', // Button text color
    textAlign: 'center',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red', // Error message text color
    marginBottom: 12,
    textAlign: 'center',
  },
});