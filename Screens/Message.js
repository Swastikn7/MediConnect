import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

const Message = (props) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "doctor",
      text: "Hello! How can I help you today?",
    },
    {
      id: 2,
      sender: "patient",
      text: "Hi Doctor! I've been feeling unwell lately.",
    },
    {
      id: 3,
      sender: "doctor",
      text: "I see. Could you please describe your symptoms?",
    },
  ]);

  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim().length === 0) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages.length + 1,
        sender: "patient",
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const renderItem = ({ item }) => {
    const isDoctor = item.sender === "doctor";
    return (
      <View
        style={{
          flexDirection: isDoctor ? "row" : "row-reverse",
          marginVertical: 5,
        }}
      >
        {isDoctor && (
          <Image
            style={{ marginLeft: 12, marginRight: 5 }}
            source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Messaging_page_Images/doctor profile small.png")}
          />
        )}
        <View
          style={[
            isDoctor ? styles.doctorMessage : styles.patientMessage,
            { alignSelf: isDoctor ? "flex-start" : "flex-end" },
          ]}
        >
          <Text
            style={
              isDoctor ? styles.doctorMessageText : styles.patientMessageText
            }
          >
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("PatientHomepage")}
          >
            <Image
              style={{ marginTop: 10, marginLeft: 24 }}
              source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Messaging_page_Images/back arrow.png")}
            />
          </TouchableOpacity>
          <Image
            style={{ marginLeft: 12 }}
            source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Messaging_page_Images/doctor profile small.png")}
          />
          <View style={{ flexDirection: "column", marginLeft: 5 }}>
            <Text style={styles.doctorName}>Dr. Arlene McCoy</Text>
            <Text>Active Now</Text>
          </View>
          <TouchableOpacity>
            <Image
              style={{ marginLeft: 36 }}
              source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Messaging_page_Images/call button.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ marginLeft: 16 }}
              source={require("/Users/swastiknayak/Desktop/college project/mediconnect/Assets/Messaging_page_Images/video call button.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.messageContainer}
        // Removing the inverted prop
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    height: 124,
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    shadowOffset: { width: -2, height: 2 },
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  messageContainer: {
    flex: 1,
    paddingRight: 10,
    paddingTop: 10,
  },
  doctorMessage: {
    backgroundColor: "#F2F7FB",
    borderRadius: 16,
    borderTopLeftRadius: 0,
    marginBottom: 10,
    maxWidth: "80%",
    padding: 12,
  },
  patientMessage: {
    backgroundColor: "#20A090",
    borderRadius: 16,
    borderTopRightRadius: 0,
    marginBottom: 10,
    maxWidth: "80%",
    padding: 10,
    marginRight: 5,
  },
  patientMessageText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 15,
  },
  doctorMessageText: {
    color: "#000E08",
    fontWeight: "800",
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#CCCCCC",
    height: 115,
  },
  input: {
    flex: 1,
    backgroundColor: "#F4F6F6",
    borderRadius: 15,
    paddingHorizontal: 20,
    marginRight: 10,
    marginLeft: 12,
    height: 40,
  },
  sendButton: {
    backgroundColor: "#0084FF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 12,
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default Message;
