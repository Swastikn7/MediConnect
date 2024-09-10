import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { green, black, gray } from "./Constants";

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.background}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={styles.loginProfile}
          source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/loginProfile.png")}
        />
        <Text style={styles.titleTxt}>Login</Text>
        <Text style={styles.subTitleTxt}>Sign in to continue</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={"#01C38D"}
          />
          <View style={styles.input}>
            <TextInput
              style={{ flex: 1 }}
              placeholder="Password"
              placeholderTextColor={gray}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={{ padding: 10 }}
            >
              <Text>{showPassword ? "Hide" : "Show"}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => props.navigation.navigate("PatientHomepage")}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("Create Account")}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text style={styles.createAccount}>Don't have an account? </Text>
              <Text style={[styles.createAccount, styles.green]}>
                Create a new account.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  background: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  loginProfile: {
    marginTop: 50,
  },
  titleTxt: {
    marginTop: 23,
    fontSize: 30,
    fontWeight: "500",
  },
  subTitleTxt: {
    fontSize: 14,
    fontWeight: "500",
    color: "#696E79",
  },
  inputContainer: {
    marginTop: 64,
    width: 333,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: 333,
    borderColor: gray,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  forgotPassword: {
    marginTop: 10,
    textAlign: "right",
    color: "rgba(1, 195,141,0.8)",
  },
  loginButton: {
    backgroundColor: green,
    height: 50,
    width: 333,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  createAccount: {
    marginTop: 10,
  },
  green: {
    color: green,
  },
};

export default Login;
