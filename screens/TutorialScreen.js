import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TutorialScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Video Tutorial</Text>
      <Text>Here you can play the video tutorial.</Text>
      {/* Replace this with a video player component */}
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 20 },
});