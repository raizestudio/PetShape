import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { useSession } from '../context/authContext';

export default function SignIn() {
  const { signIn } = useSession();

  return (
    <View>
      <Text>LOGIN</Text>
      <Text
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('root/');
        }}>
        Sign In
      </Text>
    </View>
  );
}
