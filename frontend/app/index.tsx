import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Root = () => {
  
  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text
        style={styles.h1}
      >
        Bienvenue
      </Text>
      <View style={styles.login}>
        <Link style={{fontSize: 16, fontWeight: "700"}} href="/signin">
          Connexion
        </Link>
      </View>
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
  h1: {
    fontSize: 32,
    fontWeight: "900",
    color: "#eee"
  },
  login: {
    backgroundColor: "#8c6fa6",
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  }
})

export default Root;
