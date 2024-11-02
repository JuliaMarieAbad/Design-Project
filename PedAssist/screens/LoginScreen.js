import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  // State to hold the username input
  const [username, setUsername] = useState('');

  return (
    <ImageBackground 
      source={require('../assets/BG.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image 
          source={require('../assets/PedAssist Logo.png')} 
          style={styles.logo} 
        />
        <Text style={styles.title}>Get Started!</Text>
        
        {/* Username Input Field */}
        <TextInput 
          style={styles.input} 
          placeholder="Username" 
          placeholderTextColor="gray" 
          value={username} // Set the value of the username input
          onChangeText={setUsername} // Update the state on change
        />
        
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          placeholderTextColor="gray" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          placeholderTextColor="gray" 
          secureTextEntry 
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Home', { userName: username })} // Pass the username to the Home screen
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Sign Up')}
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
    fontWeight: 'bold', 
    color: '#c95555', 
    marginBottom: 20 
  },
  input: { 
    width: '100%', 
    padding: 10, 
    marginBottom: 10, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    backgroundColor: 'white' 
  },
  logo: {
    width: 200,  
    height: 200, 
    marginBottom: 0, 
  },
  button: {
    backgroundColor: '#c95555', 
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
    width: '100%', 
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});
