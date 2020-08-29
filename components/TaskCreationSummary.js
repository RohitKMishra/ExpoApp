import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "native-base";
import { SearchBar } from "react-native-elements";
import TaskArea from "./TaskArea";

export default function TaskCreationSummary() {
  const [value, setValue] = useState();
  const Click = () => {
    console.log("Hi there!");
  };
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
        <Text style={styles.taskDetailsText}>Select Route</Text>
      </View>
      <View style={{ marginVertical: hp(1) }}>
        <SearchBar
          lightTheme
          placeholder="Search Zones and Wards"
          onChangeText={Click}
          value={value}
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
            marginHorizontal: wp(4),
          }}
        ></SearchBar>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: wp(5),
          marginVertical: hp(0.6),
        }}
      >
        <TouchableOpacity style={styles.areaButton} onPress={Click}>
          <Text style={styles.areaText}>Kukatpally</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.areaButton} onPress={Click}>
          <Text style={styles.areaText}>Madhapur</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.areaButton} onPress={Click}>
          <Text style={styles.areaText}>Gachibowli</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.showAll} onPress={Click}>
          <Text style={styles.areaText}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginLeft: wp(5), marginTop: hp(1) }}>
        <TaskArea />
      </View>
      <View style={{ marginLeft: wp(5), marginTop: hp(1.3) }}>
        <TaskArea />
      </View>
      <View style={{ marginLeft: wp(5), marginTop: hp(1.3) }}>
        <TaskArea />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    height: hp("6%"),
    padding: hp(1.6),
    borderBottomColor: "#708090",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerIcon: {
    flexDirection: "row",
  },
  text: {
    color: "#c0c0c0",
    fontSize: hp(2),
    textAlign: "center",
    fontWeight: "bold",
    width: wp("80%"),
  },
  taskDetailsText: {
    marginLeft: wp(5),
    marginTop: hp(2),
    fontWeight: "bold",
  },
  searchBar: {
    backgroundColor: "white",
  },
  areaButton: {
    width: wp("22%"),
    height: hp("4%"),
    borderColor: "#c0c0c0",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: wp(1),
  },
  areaText: {
    fontWeight: "bold",
    color: "#1E90FF",
    fontSize: hp(1.4),
  },
  showAll: {
    width: wp("20%"),
    height: hp("4%"),
    justifyContent: "center",
    alignItems: "center",
    marginVertical: hp(0.5),
  },
});
