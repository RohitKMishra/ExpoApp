import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { Icon, Radio, List, ListItem, CheckBox } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ToggleSwitch from "toggle-switch-react-native";
export default function RaiseComplaint() {
  const [value, onChangeText, day] = useState();
  const onPress = () => {
    console.log("Camera on!!!");
  };
  const onClick = () => {
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
          <Text style={styles.text}>RAISE A COMPLAINT</Text>
        </View>
      </View>
      <View>
        <Text style={styles.taskDetailsText}>Complaint details</Text>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.taskNameText}>TASK NAME</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder={"Assign a name to the task"}
          ></TextInput>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.taskNameText}>TASK DESCRIPTION</Text>
          <TextInput
            style={styles.textInputDesc}
            multiline={true}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder={"Describe your task"}
          ></TextInput>
        </View>
        <View>
          <Text style={styles.picturetext}>PICTURE</Text>
          <View style={styles.pictureBox}>
            <View style={styles.cameraBox}>
              <Icon name="camera" />
            </View>
            <TouchableOpacity style={styles.cameraButton} onPress={onPress}>
              <Text>Add a picture</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.borderClass1}>
        <Text style={styles.taskDetailsText}>Location Details</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: wp(5),
            alignItems: "center",
            marginTop: hp(2.1),
          }}
        >
          <View>
            <Text style={styles.addressLine1}>
              180/137 - F Block River View A
            </Text>
            <Text style={styles.addressLine1}>KPHB 5th Phase, Kukatpally</Text>
          </View>

          {/* <Text style={styles.addressLine1}>KPHB 5th Phase, Kukatpally</Text> */}
          <TouchableOpacity
            onPress={() => {
              console.log("Edit Text");
            }}
          >
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: hp(15) }}>
          <Button
            style={styles.buttonText}
            title="SUBMIT"
            onPress={() => console.log("Simple Button pressed")}
          />
        </View>
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
    marginTop: hp(2.1),
    fontWeight: "bold",
  },
  textInput: {
    height: hp("5%"),
    borderColor: "#c0c0c0",
    borderWidth: 2,
    marginHorizontal: wp(5),
    borderRadius: 10,
    paddingLeft: wp(4),
  },
  taskNameText: {
    left: wp(6),
    padding: hp(0.6),
    fontWeight: "bold",
    color: "#c0c0c0",
  },
  textInputDesc: {
    height: hp("15%"),
    borderWidth: 2,
    borderColor: "#c0c0c0",
    borderRadius: 10,
    marginHorizontal: wp(5),
  },
  picturetext: {
    fontWeight: "bold",
    color: "#c0c0c0",
    marginTop: hp(1),
    marginLeft: wp(6),
    padding: wp(1),
  },
  pictureBox: {
    height: hp("10%"),
    marginHorizontal: wp(5),
    borderColor: "#c0c0c0",
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
  },
  cameraBox: {
    width: wp("20%"),
    alignItems: "center",
    justifyContent: "center",
    borderRightColor: "#c0c0c0",
    borderRightWidth: 1,
  },
  cameraButton: {
    alignItems: "center",
    justifyContent: "center",
    width: wp("50%"),
  },
  borderClass1: {
    borderTopWidth: 1,
    borderTopColor: "#c0c0c0",
    marginVertical: hp(3.5),
  },
  buttonText: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: "#fff",
  },
  addressLine1: {
    fontSize: wp(4),
    fontWeight: "bold",
  },
});
