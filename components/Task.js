import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Task() {
  const onPress = () => {
    console.log("Hi there!");
  };
  return (
    <View>
      <View style={styles.box}>
        <View>
          <Text style={styles.tripText}>Trip 1: Door to door</Text>
        </View>
        <View style={styles.viewBorder1}>
          <Text style={styles.tripAddress}>21/7.Morning.06:30 AM</Text>
          <Text style={{ top: 25, left: 30 }}>5th Phase KPHB, Kukatpally</Text>
        </View>
        <View style={styles.viewBorder2}>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 220,
    width: 350,
    borderColor: "#c0c0c0",
    borderWidth: 2,
    borderRadius: 10,
  },
  tripText: {
    left: 30,
    top: 20,
  },
  tripAddress: {
    top: 20,
    left: 30,
    fontWeight: "bold",
  },
  viewBorder1: {
    borderTopColor: "#c0c0c0",
    borderWidth: StyleSheet.hairlineWidth,
    top: 40,
    borderColor: "#fff",
  },
  viewBorder2: {
    borderTopColor: "#c0c0c0",
    borderWidth: StyleSheet.hairlineWidth,
    top: 80,
    borderColor: "#fff",
  },
  button: {
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#1E90FF",
  },
});
