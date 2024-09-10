import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import { green, gray } from "./Constants";

const DoctorTypeItem = ({ icon, text }) => (
  <TouchableOpacity>
    <View style={styles.doctorTypeBox}>
      <Image source={icon} style={styles.doctorTypeIcon} />
      <Text style={styles.doctorTypeText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const PatientHomepage = (props) => {
  const [isInputFieldFocused, setInputFieldFocused] = useState(false);
  const [isMicroscopeClicked, setMicroscopeClicked] = useState(false);

  const handleMicroscopeClick = () => {
    setMicroscopeClicked(true);
    setInputFieldFocused(true);
  };

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <View>
          <Text style={styles.helloText}>Hello,</Text>
          <Text style={styles.priyaText}>Priya Sharma</Text>
        </View>
        <TouchableOpacity style={styles.profileContainer}>
          <Image
            style={styles.loginProfile}
            source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Avatar Pack/Ellipse 53.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.medicalCard}>
        <Image
          style={styles.animatedDoctor}
          source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/animatedDoctor.png")}
        />
        <View style={styles.medicalCardContent}>
          <View style={{ marginLeft: 30 }}>
            <Text style={styles.feelText}>How do you feel?</Text>
            <Text style={styles.medicalCardText}>
              Fill out your medical card right now
            </Text>
            <TouchableOpacity style={styles.getStartedButton}>
              <Text style={styles.getStartedText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.inputField}
        onPress={handleMicroscopeClick}
      >
        <Image
          style={styles.microscopeIcon}
          source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Microscope.png")}
        />
        {isMicroscopeClicked ? (
          <TextInput
            style={[styles.inputFieldText, isInputFieldFocused && {}]}
            placeholder="How can we help you?"
            onFocus={() => setInputFieldFocused(true)}
            onBlur={() => setInputFieldFocused(false)}
          />
        ) : (
          <Text style={styles.helpText}>How can we help you?</Text>
        )}
      </TouchableOpacity>
      <View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.doctorTypeContainer}
        >
          <DoctorTypeItem
            icon={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/tooth.png")}
            text="Dentist"
          />
          <DoctorTypeItem
            icon={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Surgeon.png")}
            text="Surgeon"
          />
          <DoctorTypeItem
            icon={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Cardiologist.png")}
            text="Cardiologist"
          />
          <DoctorTypeItem
            icon={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/tooth.png")}
            text="Dentist"
          />
        </ScrollView>
      </View>

      <View style={styles.doctorListContainer}>
        <Text style={styles.doctorListTitle}>Doctor list</Text>
        <Text style={{ marginLeft: "auto" }}>See all</Text>
      </View>

      <ScrollView horizontal={true} style={{ flexDirection: "row" }}>
        {/* doctor 1 */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => props.navigation.navigate("Message")}
        >
          <View style={styles.doctorProfile}>
            <View style={styles.doctorProfileContent}>
              <Image
                source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Doctor 1.png")}
                style={styles.doctorImage}
              />
              <View style={styles.ratingContainer}>
                <Image
                  source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Star.png")}
                  style={styles.starIcon}
                />
                <Text style={styles.ratingText}>4.9</Text>
              </View>
              <Text style={styles.doctorName}>Dr. Arlene McCoy</Text>
              <Text style={styles.doctorDetails}>Therapist, 7 y.e.</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* doctor 2 */}
        <View style={{ marginLeft: 18 }}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => props.navigation.navigate("Message")}
          >
            <View style={styles.doctorProfile}>
              <View style={styles.doctorProfileContent}>
                <Image
                  source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Doctor 2.png")}
                  style={styles.doctorImage}
                />
                <View style={styles.ratingContainer}>
                  <Image
                    source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Star.png")}
                    style={styles.starIcon}
                  />
                  <Text style={styles.ratingText}>4.5</Text>
                </View>
                <Text style={styles.doctorName}>Dr. Ajaya Nand</Text>
                <Text style={styles.doctorDetails}>Surgeon, 5 y.e.</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* doctor 3 */}
        <View style={{ marginLeft: 18 }}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => props.navigation.navigate("Message")}
          >
            <View style={styles.doctorProfile}>
              <View style={styles.doctorProfileContent}>
                <Image
                  source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Doctor 1.png")}
                  style={styles.doctorImage}
                />
                <View style={styles.ratingContainer}>
                  <Image
                    source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Star.png")}
                    style={styles.starIcon}
                  />
                  <Text style={styles.ratingText}>4.9</Text>
                </View>
                <Text style={styles.doctorName}>Dr. Arlene McCoy</Text>
                <Text style={styles.doctorDetails}>Therapist, 7 y.e.</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* doctor 4 */}
        <View style={{ marginLeft: 18 }}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => props.navigation.navigate("Message")}
          >
            <View style={styles.doctorProfile}>
              <View style={styles.doctorProfileContent}>
                <Image
                  source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Doctor 2.png")}
                  style={styles.doctorImage}
                />
                <View style={styles.ratingContainer}>
                  <Image
                    source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Star.png")}
                    style={styles.starIcon}
                  />
                  <Text style={styles.ratingText}>4.5</Text>
                </View>
                <Text style={styles.doctorName}>Dr. Ajaya Nand</Text>
                <Text style={styles.doctorDetails}>Surgeon, 5 y.e.</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* bottom menu options */}
      {/* <View style={{ flexDirection: "row",  }}>
        <TouchableOpacity>
          <Image
            style={styles.bottomMenu}
            source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Homepage Bottom Menu /Home_light.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.bottomMenu}
            source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Homepage Bottom Menu /Chat_Icon.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.bottomMenu}
            source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Homepage Bottom Menu /Bell_Icon.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.bottomMenu}
            source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Homepage Bottom Menu /Calender_Icon.png")}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 74,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  helloText: {
    fontWeight: "600",
    fontSize: 14,
  },
  priyaText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  profileContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: "auto",
  },
  loginProfile: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  medicalCard: {
    flexDirection: "row",
    height: 147,
    width: "100%",
    backgroundColor: "rgba(1,195,141,0.2)",
    borderRadius: 15,
    marginBottom: 30,
  },
  animatedDoctor: {
    marginLeft: 27,
    alignSelf: "center",
  },
  medicalCardContent: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  feelText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  medicalCardText: {
    fontSize: 12,
    fontWeight: "400",
    marginTop: 5,
  },
  getStartedButton: {
    width: 138,
    height: 33,
    backgroundColor: green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  getStartedText: {
    color: "#fff",
    fontWeight: "bold",
  },
  inputField: {
    width: 352,
    height: 70,
    backgroundColor: "rgba(1,195,141, 0.1)",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  inputFieldText: {
    flex: 1,
    height: "100%",
    marginLeft: 10,
    fontSize: 16,
  },
  microscopeIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  helpText: {
    color: gray,
    fontSize: 16,
  },
  doctorTypeContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  doctorTypeBox: {
    paddingHorizontal: 14,
    height: 63,
    flexDirection: "row",
    backgroundColor: "rgba(1,195,141, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    borderRadius: 10,
  },
  doctorTypeIcon: {
    marginRight: 5,
  },
  doctorTypeText: {
    alignSelf: "center",
  },
  doctorListContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  doctorListTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  doctorProfile: {
    height: 167,
    width: 156,
    borderRadius: 15,
    backgroundColor: "rgba(1,195,141, 0.1)",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  doctorProfileContent: {
    alignItems: "center",
  },
  doctorImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  ratingContainer: {
    position: "absolute",
    bottom: 32,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 4,
    width: 45,
  },
  starIcon: {
    marginRight: 4,
  },
  ratingText: {
    fontWeight: "bold",
  },
  doctorName: {
    marginTop: 8,
    fontWeight: "bold",
  },
  doctorDetails: {
    fontSize: 13,
  },
  bottomMenu: {
    height: 30,
    width: 30,
  },
});

export default PatientHomepage;
