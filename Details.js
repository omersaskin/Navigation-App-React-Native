import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Details({ route, navigation }) {
	const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.textBottom}>Details Screen</Text>
      <Text style={styles.textBottom}>itemId: {JSON.stringify(itemId)}</Text>
      <Text style={styles.textBottom}>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button title="Go back" style={styles.buttonTop} onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  textBottom:{marginBottom:20},
});