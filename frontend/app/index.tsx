import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const Root = () => {
  
  return (
    <SafeAreaView
      style={styles.container}
    >
      <StatusBar
        hidden={true}
      />
      <Text
        style={styles.h1}
      >
        Bienvenue
      </Text>
      <View style={styles.login}>
        <Link style={{fontSize: 24, fontWeight: "700"}} href="/signin">
          Connexion
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee"
  },
  h1: {
    fontSize: 48,
    fontWeight: "900",
    color: "#1f1f1f"
  },
  login: {
    backgroundColor: "#8c6fa6",
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  }
})

export default Root;
