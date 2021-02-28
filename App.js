import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import AppNavigator from "./navigations/AppNavigator";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const fetchFonts = () => {
    return Font.loadAsync({
      "ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
      "ubuntu-regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
    });
  };
  if (!isReady)
    return (
      <AppLoading
        onError={(err) => console.log(err)}
        startAsync={fetchFonts}
        onFinish={() => setIsReady(true)}
      />
    );

  return <AppNavigator />;
}
