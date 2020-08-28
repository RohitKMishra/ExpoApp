import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Picker,
  FlatList,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "native-base";

export default function AddingUserAndAssets() {
  const [value, onChangeText] = useState();

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
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Raj Anand</Text>
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
        <View style={{ padding: 20 }}>
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
        <View style={{ padding: 20 }}>
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
          marginTop: 15,
          borderTopColor: "#c0c0c0",
          borderTopWidth: StyleSheet.hairlineWidth,
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            margin: 20,
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>TASK 01</Text>
            <Text>AD HOC</Text>
          </View>
          <Text style={styles.listtext}>Collapse</Text>
        </View>
        <View
          style={{
            marginTop: 15,
            borderTopColor: "#c0c0c0",
            borderTopWidth: StyleSheet.hairlineWidth,
          }}
        >
          <View style={{ flexDirection: "row", margin: 20 }}>
            <View>
              <Text style={{ color: "#c0c0c0", fontSize: 12 }}>SHIFT</Text>
              <Text style={{ fontSize: 14 }}>Morning</Text>
            </View>
            <View style={{ marginLeft: 30 }}>
              <Text style={{ color: "#c0c0c0", fontSize: 12 }}>ROUTE</Text>
              <Text style={{ fontSize: 14 }}>Route 24</Text>
            </View>
          </View>
        </View>
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
  taskNameText: {
    left: 20,
    padding: 5,

    color: "#c0c0c0",
    marginTop: 10,
  },
  textInput: {
    height: hp("7%"),
    borderColor: "#c0c0c0",
    borderWidth: 2,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingLeft: 20,
  },
  supervisor: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  inviteWorker: {
    color: "#1E90FF",
    marginLeft: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
  listview: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listtext: {
    color: "#1E90FF",
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 15,
  },
});
