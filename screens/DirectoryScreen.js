import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DirectoryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Directory</Text>
      <Text>Welcome to the Directory! Here you can explore various options.</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 20 },
});