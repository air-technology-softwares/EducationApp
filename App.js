import * as React from "react";
import { View, Text } from "react-native";

import SwitchNavigator from "./Navigation/SwitchNavigator";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <SwitchNavigator/>
      </View>
    )
  }
}