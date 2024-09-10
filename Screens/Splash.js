import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { green, black, gray } from "./Constants";

const Splash = (props) => {
  return (
    <View style={styles.background}>
      <TouchableOpacity onPress={() => props.navigation.navigate("GetStarted")}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.logo}>Medi</Text>
          <Text style={[styles.logo, styles.black]}>connect</Text>
        </View>

        <Text style={styles.subTitle}>Saving Lives</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  background: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    color: green,
    marginTop: 385,
    fontFamily: "Baloo Bhaijaan 2",
    fontSize: 48,
    fontWeight: "bold",
  },
  black: {
    color: black,
  },
  subTitle: {
    color: gray,
    fontFamily: "Baloo Bhaijaan 2",
    marginLeft: 260,
  },
};

export default Splash;
