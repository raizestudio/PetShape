import { View, Text, SafeAreaView, StyleSheet, Dimensions } from "react-native"
import { Link, Stack } from "expo-router"
import { TextInput } from "react-native-gesture-handler"
const LoginView = ({props}) => {


  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text
        style={styles.h1}
      >
        Login
      </Text>
      <View
        style={styles.input_container}
      >
        <TextInput
          editable
          maxLength={64}
          keyboardType="email-address"
          placeholder="Email"
          style={styles.text_input}
          />
        <TextInput
          editable
          maxLength={64}
          keyboardType="ascii-capable"
          placeholder="Password"
          style={styles.text_input}
          />
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  h1: {
    color: "#eee",
    fontSize: 32,
    fontWeight: "900",
    marginBottom: 20
  },
  text: {
    color: "#eee"
  },
  input_container: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    gap: 10
  },
  text_input: {
    backgroundColor: "#eee",
    width: "100%",
    fontSize: 18,
    padding: 10,
    borderRadius: 5
  }
})

export default LoginView;