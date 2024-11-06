import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  console.log("LoginScreen is rendering"); // Log to check if screen renders

  const [username, setUsername] = useState('');

  return (
    <ImageBackground 
      source={require('../assets/BG.png')} 
      style={styles.background}
      resizeMode="cover"
      onError={(error) => console.log("Error loading background image:", error)} // Error handling for background image
    >
      <View style={styles.container}>
        <Image 
          source={require('../assets/PedAssist Logo.png')} 
          style={styles.logo} 
          onError={(error) => console.log("Error loading logo image:", error)} // Error handling for logo image
        />
        <Text style={styles.title}>Get Started!</Text>
        
        {/* Username Input Field */}
        <TextInput 
          style={styles.input} 
          placeholder="Username" 
          placeholderTextColor="gray" 
          value={username}
          onChangeText={setUsername}
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
          onPress={() => {
            console.log("Navigating to Home with username:", username); // Log navigation action
            navigation.navigate('Home', { userName: username });
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => {
            console.log("Navigating to Sign Up"); // Log navigation action
            navigation.navigate('Sign Up');
          }}
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
    marginBottom: 0 
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
