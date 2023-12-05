import { Slot } from 'expo-router';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SessionProvider } from '../context/authContext';

export default function HomeLayout() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
