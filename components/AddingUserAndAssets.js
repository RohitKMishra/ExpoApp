import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Picker,
  FlatList,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { Icon } from "native-base";
import BottomSheet from "../components/BottomSheet";

export default function AddingUserAndAssets() {
  const [value, onChangeText] = useState();

  const supervisor = [
    "Supervisor a",
    "Supervisor b",
    "Supervisor c",
    "Supervisor d",
  ];

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
      <View
        style={{
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: "#c0c0c0",
        }}
      >
        <Text style={styles.taskDetailsText}>Add User</Text>
        <Text style={styles.taskNameText}>SUPERVISOR</Text>
        <View style={styles.supervisor}>
          <Text style={{ fontSize: hp(2), fontWeight: "bold" }}>Raj Anand</Text>
          <TouchableOpacity
            onPress={() => {
              console.log("Change button");
            }}
          >
            <Text style={styles.listtext}>Change</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.taskNameText}>SEARCH</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder={"Search for workers to add"}
          ></TextInput>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              console.log("Invite Worker");
            }}
          >
            <Text style={styles.inviteWorker}>Invite New worker</Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding: wp(4) }}>
          <FlatList
            // data={["Devin", "Den", "Dominc", "Jack"]}
            data={[
              { name: "Worker a", action: "Add" },
              { name: "Worker b", action: "Remove" },
              { name: "Worker c", action: "Add" },
              { name: "Worker d", action: "Remove" },
              { name: "Worker e", action: "Add" },
            ]}
            renderItem={({ item }) => (
              <View style={styles.listview}>
                <Text style={styles.listtext}>{item.name}</Text>
                <TouchableOpacity
                  onPress={() => {
                    console.log("Action button");
                  }}
                >
                  <Text style={styles.listtext}>{item.action}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
      {/* Add Assets */}
      <View
        style={{
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: "#c0c0c0",
        }}
      >
        <Text style={styles.taskDetailsText}>Add Assets</Text>
        <View>
          <Text style={styles.taskNameText}>SEARCH</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder={"Search for assets to add"}
          ></TextInput>
        </View>
        <View style={{ padding: wp(5) }}>
          <FlatList
            // data={["Devin", "Den", "Dominc", "Jack"]}
            data={[
              { name: "Asset a", action: "Add" },
              { name: "Asset b", action: "Remove" },
              { name: "Asset c", action: "Add" },
              { name: "Asset d", action: "Remove" },
            ]}
            renderItem={({ item }) => (
              <View style={styles.listview}>
                <Text style={styles.listtext}>{item.name}</Text>
                <TouchableOpacity
                  onPress={() => {
                    console.log("Action button");
                  }}
                >
                  <Text style={styles.listtext}>{item.action}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
      {/* Task Details */}
      <View
        style={{
          marginTop: hp(3),
          borderTopColor: "#c0c0c0",
          borderTopWidth: StyleSheet.hairlineWidth,
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            margin: wp(5),
          }}
        >
          <View>
            <Text style={{ fontSize: hp(1.9), fontWeight: "bold" }}>
              TASK 01
            </Text>
            <Text>AD HOC</Text>
          </View>
          <Text style={styles.listtext}>Collapse</Text>
        </View>
        <View
          style={{
            marginTop: hp(2),
            borderTopColor: "#c0c0c0",
            borderTopWidth: StyleSheet.hairlineWidth,
          }}
        >
          <View style={{ flexDirection: "row", margin: wp(5) }}>
            <View>
              <Text style={{ color: "#c0c0c0", fontSize: hp(1.7) }}>SHIFT</Text>
              <Text style={{ fontSize: hp(1.7) }}>Morning</Text>
            </View>
            <View style={{ marginLeft: wp(8) }}>
              <Text style={{ color: "#c0c0c0", fontSize: hp(1.7) }}>ROUTE</Text>
              <Text style={{ fontSize: hp(1.7) }}>Route 24</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <BottomSheet
          child={
            <View>
              <Text style={styles.header}>CHANGE SUPERVISOR</Text>
              {/*               
              <View style={{ margin: wp(5) }}>
                <ScrollView contentContainerStyle={{ marginTop: hp(2) }}>
                  {supervisor.map((item) => {
                    return (
                      <Button transparent onPress={() => console.log(item)}>
                        <Text style={styles.supervisorText}>{item}</Text>
                      </Button>
                    );
                  })}
                </ScrollView>
              </View> */}
            </View>
          }
          containerStyle={{ height: hp(70) }}
        />
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
    marginTop: hp(2.4),
    fontWeight: "bold",
  },
  taskNameText: {
    left: wp(5),
    padding: hp(0.1),
    color: "#c0c0c0",
    marginTop: hp(1.2),
    fontWeight: "bold",
  },
  textInput: {
    height: hp("7%"),
    borderColor: "#c0c0c0",
    borderWidth: 2,
    marginHorizontal: wp(4.5),
    borderRadius: 10,
    paddingLeft: wp(5),
  },
  supervisor: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: wp(5),
  },
  inviteWorker: {
    color: "#1E90FF",
    marginLeft: wp(5),
    marginTop: hp(1),
    fontWeight: "bold",
  },
  listview: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listtext: {
    color: "#1E90FF",
    fontWeight: "bold",
    marginVertical: hp(1.2),
    fontSize: hp(1.8),
  },
  supervisorText: {
    fontWeight: "bold",
    marginVertical: hp(1.2),
    fontSize: hp(1.8),
  },
});
