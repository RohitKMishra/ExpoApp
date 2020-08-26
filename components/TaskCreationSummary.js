import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "native-base";
import { SearchBar } from "react-native-elements";

export default function TaskCreationSummary() {
  const [search] = useState();
  return (
    <ScrollView pagingEnabled>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Icon name="arrow-back" />
          <Text style={styles.text}>CREATE A NEW TASK</Text>
        </View>
      </View>
      <View>
        <Text style={styles.taskDetailsText}>Select Route</Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <SearchBar
          lightTheme
          placeholder="Search Zones and Wards"
          onChangeText={console.log("Search Bar!!")}
          value={search}
          containerStyle={{
            backgroundColor: "white",
            borderTopColor: "white",
            borderBottomColor: "white",
          }}
          inputContainerStyle={{
            backgroundColor: "white",
            borderWidth: 2,
            borderColor: "#c0c0c0",
            borderRadius: 10,
            marginHorizontal: 20,
          }}
        ></SearchBar>
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
    paddingLeft: 20,
    paddingTop: 20,
    fontWeight: "bold",
  },
  search: {},
});
