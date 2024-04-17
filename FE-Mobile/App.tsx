import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from "@gluestack-ui/config";
import Home from './src/screens/buyer/Home';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Home />
      <StatusBar style="auto" />
    </GluestackUIProvider>
  );
}
