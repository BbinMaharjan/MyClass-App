import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";

const HomeStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        mode="card"
        initialRouteName="Categories"
        screenOptions={{
          headerStyle: {
            backgroundColor: "green",
          },
          headerTintColor: "white",
        }}
      >
        <HomeStack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ title: "All Categories" }}
        />
        <HomeStack.Screen
          name="Products"
          component={ProductsScreen}
          options={{ title: "Products" }}
        />
        <HomeStack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{ title: "Details" }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
