import React from "react";
import { View, ScrollView } from "react-native";
import Task from "./Task";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
export default function Monday() {
  return (
    <ScrollView pagingEnabled>
      <View>
        <View style={{ paddingTop: hp(2.5), paddingLeft: wp(6) }}>
          <Task
            trip="Trip 1: Door to door"
            shiftTime="21/7.Morning.06:30 AM"
            address="5th Phase KPHB, Kukatpally"
            status="Start"
          />
        </View>
        <View style={{ paddingTop: hp(2.5), paddingLeft: wp(6) }}>
          <Task
            trip="Trip 2: Door to door"
            shiftTime="21/7.Morning.08:30 AM"
            address="5th Phase KPHB, Kukatpally"
            status="Start"
          />
        </View>
        <View style={{ paddingTop: hp(2.5), paddingLeft: wp(6) }}>
          <Task
            trip="Trip 3: Door to door"
            shiftTime="21/7.Evening.06:30 PM"
            address="5th Phase KPHB, Kukatpally"
            status="Start"
          />
        </View>
        <View style={{ paddingTop: hp(2.5), paddingLeft: wp(6) }}>
          <Task
            trip="Trip 4: Door to door"
            shiftTime="21/7.Evening.08:30 AM"
            address="5th Phase KPHB, Kukatpally"
            status="Start"
          />
        </View>
      </View>
    </ScrollView>
  );
}
