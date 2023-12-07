import { router } from 'expo-router';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Pressable } from 'react-native';

import { useSession } from '../context/authContext';

export default function SignIn() {
  const { signIn } = useSession();

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={styles.h1}
      >Connexion</Text>
      <View
        style={{
          gap: 5,
          width: "100%",
          paddingHorizontal: 80
        }}
      >
        <TextInput 
          style={styles.input}
          keyboardType='email-address'
          placeholder='Email/Utilisateur'
        />
        <TextInput
          style={styles.input}
          keyboardType='ascii-capable'
          secureTextEntry={true}
          placeholder='Mot de passe'
        />
      </View>
      <Pressable
        style={styles.login}
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/root/');
        }}
        >
        <Text>Connexion</Text>
      </Pressable>
      <Pressable
        style={{
          marginTop: 10
        }}
        onPress={() => {
          router.replace('register')
        }}
      >
        <Text>Je n'ai pas de compte</Text>
      </Pressable>
    </SafeAreaView>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee"
  },
  h1: {
    fontSize: 32,
    fontWeight: "900",
    color: "#1f1f1f"
  },
  input: {
    backgroundColor: "#1f1f1f",
    color: "#eee",
    borderRadius: 5,
    padding: 10
  },
  login: {
    backgroundColor: "#8c6fa6",
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  }
})