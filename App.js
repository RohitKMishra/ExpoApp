import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import AllTasks from "./components/AllTasks";
import CreateTask from "./components/CreateTask";
import TaskCreationSummary from "./components/TaskCreationSummary";
import AddingUserAndAssets from "./components/AddingUserAndAssets";
import RaiseComplaint from "./components/RaiseComplaint";
import CollapseWorker from "./components/CollapseWorkers";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* <CreateTask /> */}
        {/* <AllTasks /> */}
        {/* <TaskCreationSummary /> */}
        {/* <AddingUserAndAssets /> */}
        {/* <RaiseComplaint /> */}
        <CollapseWorker />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
});
