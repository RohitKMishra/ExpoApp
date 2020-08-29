import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import UserAvatar from "react-native-user-avatar";
import { Avatar, Colors } from "react-native-paper";

export default function TaskArea() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.box1}>
        <Image style={styles.img} source={require("../assets/maps.png")} />
        <View style={styles.addressLine}>
          <Text style={styles.taskDetailsText}>Route 24</Text>
          <Text style={styles.text}>KPHB 5th Phase, Kukatpally</Text>
        </View>
        <View style={styles.addressLine}>
          {/* <UserAvatar
            style={styles.avatar}
            size={30}
            borderRadius={30 * 0.7}
            bgColor="#c0c0c0"
            onPress={() => console.log("Works")}
          /> */}
          <Avatar.Icon
            size={hp(4.3)}
            color={Colors.grey600}
            backgroundColor={Colors.grey300}
            icon="account-circle"
            onPress={() => console.log("Avatar")}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.areaText}>23 Workers</Text>
            <Text style={styles.progressText}>IN PROGRESS</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box1: {
    borderColor: "#c0c0c0",
    width: wp("90%"),
    height: hp("32%"),
    borderWidth: 2,
    borderRadius: 10,
  },
  img: {
    width: wp("89%"),
    height: hp("22%"),
  },
  text: {
    color: "#c0c0c0",
    fontSize: hp(1.3),
    textAlign: "center",
    fontWeight: "bold",
    width: wp("80%"),
    marginTop: hp(1),
  },
  taskDetailsText: {
    marginLeft: wp(3),
    marginTop: hp(0.8),
    fontWeight: "bold",
    fontSize: hp(1.8),
  },
  addressLine: {
    marginVertical: hp(0.5),
    marginLeft: wp(3),
    flexDirection: "row",
    alignItems: "center",
  },
  areaText: {
    color: "#1E90FF",
    fontSize: hp(2.2),
    marginLeft: wp(3),
  },
  avatar: {
    marginLeft: wp(5),
    marginTop: hp(1),
  },
  progressText: {
    color: "green",
    marginLeft: wp(16),
  },
});
