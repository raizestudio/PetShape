import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import LoginView from "../components/auth/login"

export default function Page() {
  return (
    <View>
      <LoginView />
    </View>
  );
}
