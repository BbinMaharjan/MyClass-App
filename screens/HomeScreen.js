import React from "react";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Categories from "../components/Categories";
import FoodHeader from "../components/FoodHeader";
import Title from "../components/Title";

const HomeScreen = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions({ headerShown: false });
  });
  return (
    <View style={styles.screen}>
      <FoodHeader />
      <Title>Select a category</Title>
      <Categories />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default HomeScreen;
