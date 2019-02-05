/** @format */
// import { AppRegistry } from "react-native";
// import App from "./App";
// import { name as appName } from "./app.json";

// Import Library to help create component
import React from "react";
import { View, AppRegistry } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

// Create a component
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={"Aye Rock!"} />
      <AlbumList />
    </View>
  );
};

// Render it to the device

AppRegistry.registerComponent("getSome", () => App);

// AppRegistry.registerComponent(appName, () => App);
