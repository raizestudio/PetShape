import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { Redirect } from 'expo-router';
import { useSession } from '../../context/authContext';

export default function Index() {
  const { signOut } = useSession();
  
  return (
    <SafeAreaView style={styles.container}>
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
          <Redirect href="/signin" />
        }}>
        Sign Out
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#292929"
  },
})
