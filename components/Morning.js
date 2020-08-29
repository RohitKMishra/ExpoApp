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
          <Task />
        </View>
        <View style={{ paddingTop: hp(2.5), paddingLeft: wp(6) }}>
          <Task />
        </View>
        <View style={{ paddingTop: hp(2.5), paddingLeft: wp(6) }}>
          <Task />
        </View>
        <View style={{ paddingTop: hp(2.5), paddingLeft: wp(6) }}>
          <Task />
        </View>
      </View>
    </ScrollView>
  );
}
