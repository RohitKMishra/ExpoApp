import React from "react";
import { Container, Header, Content, Tab, Tabs, TabHeading } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import Morning from "./Morning";
import Afternoon from "./Afternoon";
import Evening from "./Evening";
import Others from "./Others";
export default function AllTasks() {
  return (
    <Container>
      <View style={styles.header}>
        <Text style={styles.text}>Tasks</Text>
      </View>
      <Header
        style={{
          backgroundColor: "#fff",
          height: 20,
          borderBottomColor: "#fff",
        }}
      />
      <Tabs
        hasTabs
        tabBarUnderlineStyle={{
          borderBottomWidth: 2,
          borderBottomColor: "#1E90FF",
        }}
        tabContainerStyle={{ elevation: 0 }}
      >
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#fff" }}>
              <Text style={{ color: "#1E90FF", fontWeight: "bold" }}>
                Morning
              </Text>
            </TabHeading>
          }
        >
          <Morning />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#fff" }}>
              <Text style={{ color: "#1E90FF", fontWeight: "bold" }}>
                Afternoon
              </Text>
            </TabHeading>
          }
        >
          <Afternoon />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#fff" }}>
              <Text style={{ color: "#1E90FF", fontWeight: "bold" }}>
                Evening
              </Text>
            </TabHeading>
          }
        >
          <Evening />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#fff" }}>
              <Text style={{ color: "#1E90FF", fontWeight: "bold" }}>
                Others
              </Text>
            </TabHeading>
          }
        >
          <Others />
        </Tab>
      </Tabs>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    height: 60,
    padding: 15,
    borderBottomColor: "#708090",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    color: "#c0c0c0",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  tabs: {},
});
