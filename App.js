import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import AllTasks from "./components/AllTasks";
import CreateTask from "./components/CreateTask";
import TaskCreationSummary from "./components/TaskCreationSummary";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CreateTask /> */}
      {/* <AllTasks /> */}
      <TaskCreationSummary />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
});
