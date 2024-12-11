import { StyleSheet, Text, View, Platform, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.header, { width: dimensions.width }]}>
        <Text style={styles.headerText}>Cross Platform App</Text>
      </View>
      <View style={[styles.content, { width: dimensions.width }]}>
        <Text style={styles.text}>Welcome to our my cross-platform app!</Text>
        <Text style={styles.platformText}>
          Current Platform: {Platform.OS}
        </Text>
        <Text style={styles.dimensionsText}>
          Screen Width: {dimensions.width}px{'\n'}
          Screen Height: {dimensions.height}px
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  platformText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  dimensionsText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});
