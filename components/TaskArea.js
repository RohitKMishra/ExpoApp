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
            size={32}
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
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
    width: wp("80%"),
    marginTop: 5,
  },
  taskDetailsText: {
    marginLeft: 20,
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
  addressLine: {
    marginVertical: 5,
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  areaText: {
    color: "#1E90FF",
    fontSize: 18,
    marginLeft: 10,
  },
  avatar: {
    marginLeft: 20,
    marginTop: 5,
  },
  progressText: {
    color: "green",
    marginLeft: 80,
  },
});
