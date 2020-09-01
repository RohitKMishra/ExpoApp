import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon, Button } from "native-base";
import BottomSheet from "../components/BottomSheet";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CollapseWorker() {
  const [showWorker, setShowWorker] = useState(false);
  const [showAsset, setShowAsset] = useState(false);
  const [value, onChangeText] = useState();
  const refRBSheet = useRef();

  return (
    <ScrollView>
      <View>
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
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: hp(2),
            marginRight: wp(3),
          }}
        >
          <View>
            <Text style={styles.taskDetailsText}>Add Users</Text>
          </View>
          {!showWorker && (
            <TouchableOpacity onPress={() => setShowWorker(true)}>
              <MaterialIcons name="keyboard-arrow-down" size={hp(4)} />
            </TouchableOpacity>
          )}
          {showWorker && (
            <TouchableOpacity onPress={() => setShowWorker(false)}>
              <MaterialIcons name="keyboard-arrow-up" size={hp(4)} />
            </TouchableOpacity>
          )}
        </View>
        <View>
          {showWorker && (
            <View>
              <Text style={styles.taskNameText}>SUPERVISOR</Text>
              <View style={styles.supervisor}>
                <Text style={{ fontSize: hp(2), fontWeight: "bold" }}>
                  Raj Anand
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    refRBSheet.current.open();
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

              <View style={{ margin: wp(5) }}>
                <FlatList
                  // data={["Devin", "Den", "Dominc", "Jack"]}
                  data={[
                    { name: "Worker a", action: "Add" },
                    { name: "Worker b", action: "Remove" },
                    { name: "Worker c", action: "Add" },
                    { name: "Worker d", action: "Remove" },
                    { name: "Worker e", action: "Add" },
                  ]}
                  renderItem={({ item, index }) => (
                    <View style={styles.listview}>
                      <Text style={styles.listtext}>{item.name}</Text>
                      <TouchableOpacity
                        onPress={() => {
                          console.log("Action button");
                        }}
                        key={index}
                      >
                        <Text style={styles.listtext}>{item.action}</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
            </View>
          )}
        </View>
        {/* Add Assets */}
        <View style={styles.box2}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: hp(2),
              marginRight: wp(3),
            }}
          >
            <Text style={styles.taskDetailsText}>Add Assets</Text>
            {!showAsset && (
              <TouchableOpacity onPress={() => setShowAsset(true)}>
                <MaterialIcons name="keyboard-arrow-down" size={hp(4)} />
              </TouchableOpacity>
            )}
            {showAsset && (
              <TouchableOpacity onPress={() => setShowAsset(false)}>
                <MaterialIcons name="keyboard-arrow-up" size={hp(4)} />
              </TouchableOpacity>
            )}
          </View>
          <View>
            {showAsset && (
              <View>
                <Text style={styles.taskNameText}>SEARCH</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={(text) => onChangeText(text)}
                  value={value}
                  placeholder={"Search for assets to add"}
                ></TextInput>

                <View style={{ margin: wp(5) }}>
                  <FlatList
                    data={[
                      { name: "Asset a", action: "Add" },
                      { name: "Asset b", action: "Remove" },
                      { name: "Asset c", action: "Add" },
                      { name: "Asset d", action: "Remove" },
                    ]}
                    renderItem={({ item, index }) => (
                      <View style={styles.listview}>
                        <Text style={styles.listtext}>{item.name}</Text>
                        <TouchableOpacity
                          onPress={() => {
                            console.log("Action button");
                          }}
                          key={index}
                        >
                          <Text style={styles.listtext}>{item.action}</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  />
                </View>
              </View>
            )}
          </View>
        </View>
        {/* Task Details */}

        <View
          style={{
            marginTop: hp(5),
            borderTopColor: "#c0c0c0",
            borderBottomColor: "#c0c0c0",
            borderWidth: StyleSheet.hairlineWidth,
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              margin: wp(4),
              marginBottom: wp(1),
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
                <Text style={{ color: "#c0c0c0", fontSize: hp(1.7) }}>
                  SHIFT
                </Text>
                <Text style={{ fontSize: hp(1.7) }}>Morning</Text>
              </View>
              <View style={{ marginLeft: wp(8) }}>
                <Text style={{ color: "#c0c0c0", fontSize: hp(1.7) }}>
                  ROUTE
                </Text>
                <Text style={{ fontSize: hp(1.7) }}>Route 24</Text>
              </View>
            </View>
          </View>
          <View style={styles.submitButton}>
            <TouchableOpacity onPress={() => console.log("Submit Button")}>
              <Text
                style={{ color: "#fff", fontWeight: "bold", fontSize: wp(4) }}
              >
                SUBMIT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <BottomSheet
        refRBSheetIn={refRBSheet}
        child={
          <View>
            <Text style={styles.supText}>CHANGE SUPERVISOR</Text>
            <View style={{ marginTop: hp(4) }}>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => onChangeText(text)}
                value={value}
                placeholder={"Search for workers to add"}
              ></TextInput>
            </View>
            <View style={{ margin: wp(5) }}>
              <FlatList
                contentContainerStyle={{ marginTop: hp(0) }}
                data={[
                  { name: "Supervisor a" },
                  { name: "Supervisor b" },
                  { name: "Supervisor c" },
                  { name: "Supervisor d" },
                ]}
                renderItem={({ item, index }) => (
                  <View style={styles.listview}>
                    <Button
                      transparent
                      onPress={() => console.log(item.name)}
                      key={index}
                    >
                      <Text style={styles.changeListtext}>{item.name}</Text>
                    </Button>
                  </View>
                )}
              />
            </View>
          </View>
        }
        containerStyle={{ height: hp(70) }}
      ></BottomSheet>
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
    fontWeight: "bold",
  },
  taskNameText: {
    left: wp(5),
    padding: hp(0.1),
    color: "#c0c0c0",
    marginTop: hp(1.2),
    fontWeight: "bold",
  },
  supervisor: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: wp(5),
  },
  listtext: {
    color: "#1E90FF",
    fontWeight: "bold",
    marginVertical: hp(1),
    fontSize: hp(1.8),
  },
  listview: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inviteWorker: {
    color: "#1E90FF",
    marginLeft: wp(5),
    marginTop: hp(1),
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
  box2: {
    borderTopColor: "#c0c0c0",
    borderBottomColor: "#c0c0c0",
    borderWidth: StyleSheet.hairlineWidth,
  },
  submitButton: {
    width: wp(100),
    height: hp(7.2),
    backgroundColor: "#1E90FF",
    alignItems: "center",
    justifyContent: "center",
  },
  supText: {
    textAlign: "center",
    padding: hp(0.1),
    color: "#c0c0c0",
    marginTop: hp(1.2),
    fontWeight: "bold",
  },
  changeListtext: {
    color: "#000",

    marginVertical: hp(1),
    fontSize: hp(2),
  },
});
