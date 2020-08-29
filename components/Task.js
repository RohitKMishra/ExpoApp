import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

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
          <Text style={{ top: hp(3), left: wp(7) }}>
            5th Phase KPHB, Kukatpally
          </Text>
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
    height: hp(27),
    width: wp(88),
    borderColor: "#c0c0c0",
    borderWidth: 2,
    borderRadius: 10,
  },
  tripText: {
    left: wp(6.5),
    top: hp(2.2),
  },
  tripAddress: {
    top: hp(2.4),
    left: wp(7.5),
    fontWeight: "bold",
  },
  viewBorder1: {
    borderTopColor: "#c0c0c0",
    borderWidth: StyleSheet.hairlineWidth,
    top: hp(5.5),
    borderColor: "#fff",
  },
  viewBorder2: {
    borderTopColor: "#c0c0c0",
    borderWidth: StyleSheet.hairlineWidth,
    top: hp(11),
    borderColor: "#fff",
  },
  button: {
    backgroundColor: "#fff",
    alignItems: "center",
    padding: wp(5),
  },
  buttonText: {
    fontSize: hp(2),
    fontWeight: "bold",
    color: "#1E90FF",
  },
});
