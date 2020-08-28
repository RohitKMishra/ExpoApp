import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Picker,
} from "react-native";
import { Icon } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function AddingUserAndAssets() {
  return (
    <ScrollView pagingEnabled>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Icon
            name="arrow-back"
            onPress={() => console.log("Arrow clicked!")}
          />
          <Text style={styles.text}>CREATE A NEW TASK</Text>
        </View>
      </View>
      <View>
        <Text style={styles.taskDetailsText}>Add User</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    height: hp("6%"),
    padding: 15,
    borderBottomColor: "#708090",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerIcon: {
    flexDirection: "row",
  },
  text: {
    color: "#c0c0c0",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    width: wp("80%"),
  },
  taskDetailsText: {
    marginLeft: 20,
    marginTop: 20,
    fontWeight: "bold",
  },
});
