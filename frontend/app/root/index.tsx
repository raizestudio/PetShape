import { Text, View } from 'react-native';
import { Redirect } from 'expo-router';
import { useSession } from '../../context/authContext';

export default function Index() {
  const { signOut } = useSession();
  
  return (
    <View>
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
          <Redirect href="/signin" />
        }}>
        Sign Out
      </Text>
    </View>
  );
}
