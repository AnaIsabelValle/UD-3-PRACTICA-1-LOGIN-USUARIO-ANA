import React from "react";
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from "@react-navigation/drawer";

import { RootDrawerParamList } from "../types/types";
import BienvenidaScreen from "../screens/BienvenidaScreen";
import appColors from "../../assets/styles/appColors";
import LoginScreen from "../screens/LoginScreen";

import RegisterScreen from "../screens/RegisterScreen";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const CustomerDrawer = () => {
  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    headerTitle: "My App Sunset",
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: appColors.golden,
    },
    headerTintColor: appColors.white,
    drawerItemStyle: {
      width: "100%",
    },
    drawerActiveTintColor: appColors.white,
    drawerActiveBackgroundColor: appColors.golden,
    drawerInactiveTintColor: "lightgray",
    drawerInactiveBackgroundColor: appColors.secondary,
    drawerType: "slide",
  };

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={drawerNavigatorScreenOptions}
    >
      <Drawer.Screen
        name="Home"
        component={BienvenidaScreen}
        options={{ title: "Home" }}
      />

      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Register" component={RegisterScreen} />
    </Drawer.Navigator>
  );
};

export default CustomerDrawer;
