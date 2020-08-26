import React from "react";
import { View, ScrollView } from "react-native";
import Task from "./Task";
export default function Monday() {
  return (
    <ScrollView pagingEnabled>
      <View>
        <View style={{ paddingTop: 20, paddingLeft: 20 }}>
          <Task />
        </View>
        <View style={{ paddingTop: 15, paddingLeft: 20 }}>
          <Task />
        </View>
        <View style={{ paddingTop: 15, paddingLeft: 20 }}>
          <Task />
        </View>
        <View style={{ paddingTop: 15, paddingLeft: 20 }}>
          <Task />
        </View>
      </View>
    </ScrollView>
  );
}
