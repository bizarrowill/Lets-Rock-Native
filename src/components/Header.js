//Import Libraries to make component
import React from "react";
import { Text, View } from "react-native";

// Make a component

const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevaton: 4,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
};

// Make component available to the rest of the app
export default Header;
