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
import { Icon, Radio, List, ListItem, CheckBox } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ToggleSwitch from "toggle-switch-react-native";
export default function CreateTask() {
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
          <Icon name="arrow-back" />
          <Text style={styles.text}>CREATE A NEW TASK</Text>
        </View>
      </View>
      <View>
        <Text style={styles.taskDetailsText}>Task details</Text>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.taskNameText}>TASK NAME</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => onChangeText(text)}
            value={value}
          ></TextInput>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.taskNameText}>TASK DESCRIPTION</Text>
          <TextInput
            style={styles.textInputDesc}
            multiline={true}
            onChangeText={(text) => onChangeText(text)}
            value={value}
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
        <Text style={styles.taskDetailsText}>Task Schedule</Text>
        <List style={{ flexDirection: "row" }}>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Radio selected={true} radioColor="green" />
            <Text style={{ paddingHorizontal: 8 }}>Ad hoc</Text>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Radio selected={false} />
            <Text style={{ paddingHorizontal: 8 }}>Scheduled</Text>
          </ListItem>
        </List>
        <Text style={styles.taskDetailsText}>Select shift(s)</Text>
        <List style={{ flexDirection: "row" }}>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <CheckBox checked={true} />
            <Text style={{ paddingHorizontal: 8 }}>Morning</Text>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <CheckBox checked={false} />
            <Text style={{ paddingHorizontal: 8 }}>Evening</Text>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <CheckBox checked={false} />
            <Text style={{ paddingHorizontal: 8 }}>Night</Text>
          </ListItem>
        </List>
      </View>
      <View style={styles.borderClass2}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={styles.taskDetailsText}>Task repetition</Text>
          <ToggleSwitch
            isOn={false}
            onColor="blue"
            offColor="gray"
            size="medium"
            onToggle={(isOn) => console.log("changed to : ", isOn)}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text style={styles.taskNameText}>REPEAT TASK</Text>
          <View style={styles.picker}>
            <Picker
              selectedValue={day}
              onValueChange={(itemValue, itemIndex) => {
                console.log("Picker");
              }}
            >
              <Picker.Item label="Everyday" value="everyday" />
              <Picker.Item label="Weekly" value="weekly" />
              <Picker.Item label="Monthly" value="Monthly" />
            </Picker>
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
  textInput: {
    height: hp("5%"),
    borderColor: "#c0c0c0",
    borderWidth: 2,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  taskNameText: {
    left: 30,
    padding: 5,
    fontWeight: "bold",
    color: "#c0c0c0",
  },
  textInputDesc: {
    height: hp("15%"),
    borderWidth: 2,
    borderColor: "#c0c0c0",
    borderRadius: 10,
    marginHorizontal: 20,
  },
  picturetext: {
    fontWeight: "bold",
    color: "#c0c0c0",
    marginTop: 15,
    marginLeft: 30,
    padding: 5,
  },
  pictureBox: {
    height: hp("10%"),
    marginHorizontal: 20,
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
    marginVertical: 20,
  },
  borderClass2: {
    borderTopWidth: 1,
    borderTopColor: "#c0c0c0",
    marginVertical: 10,
  },
  picker: {
    width: wp("50%"),
    height: hp("8%"),
    borderWidth: 2,
    borderColor: "#c0c0c0",
    marginLeft: 20,
    borderRadius: 10,
    color: "#c0c0c0",
  },
  bottomView: {
    width: wp("100%"),
    height: hp("8%"),
    backgroundColor: "#1E90FF",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  bottomText: {
    color: "#fff",
    fontSize: 22,
  },
});
