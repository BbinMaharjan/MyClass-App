import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Detail Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
export default DetailScreen;
