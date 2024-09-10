import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { green, black, gray } from "./Constants";

const GetStarted = (props) => {
  return (
    <View style={styles.background}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={styles.getStartedImg}
          source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/getStarted.png")}
        />
        <View
          style={{
            marginTop: 35,
            alignItems: "center",
          }}
        >
          <Text style={styles.getStartedText}>
            Ready to take control of your health? Tap{" "}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.getStartedText}>below to begin with </Text>
            <Text style={[styles.green]}>Medi</Text>
            <Text style={[styles.black]}>Connect.</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.getStartedBtn}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={styles.getStartedBtnTxt}> Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  background: {
    flex: 1,
    backgroundColor: "#fff",
  },
  getStartedImg: {
    marginTop: 145,
  },
  getStartedText: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Baloo Bhaijaan 2",
  },
  green: {
    color: green,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Baloo Bhaijaan 2",
  },
  black: {
    color: black,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Baloo Bhaijaan 2",
  },

  getStartedBtn: {
    marginTop: 149,
    height: 49,
    width: 267,
    borderRadius: 25,
    backgroundColor: green,
    alignItems: "center", // Fixed typo 'allignItems' to 'alignItems'
    justifyContent: "center",
  },

  getStartedBtnTxt: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Alatsi",
  },
};

export default GetStarted;
