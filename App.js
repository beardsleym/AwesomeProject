import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
// import { StyleSheet, View, Button, Modal, FlatList, Alert, Input, TextInput } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Header from "./shared/Header";
import Home from "./screens/Home";
import Add from "./screens/Add";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator();

function MyTabs({ dates, image, submitHandler, navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "grey" },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <MaterialIcons name="home" size={24} className="bg-red-700" />
          ),
        }}
      >
        {(props) => <Home {...props} dates={dates} image={image} />}
      </Tab.Screen>
      <Tab.Screen
        name="Add"
        options={{
          tabBarLabel: "Add",
          tabBarIcon: () => (
            <MaterialIcons name="add" size={24} className="text-gray-700" />
          ),
        }}
      >
        {(props) => (
          <Add
            {...props}
            submitHandler={submitHandler}
            navigation={navigation}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const image = {
  uri: "https://images.unsplash.com/photo-1606925595154-06943574f13c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
};

const data = [
  {
    id: 1,
    title: "Christmas Day",
    date: "2021-12-25",
    img: require("./assets/test.png"),
  },
  {
    id: 2,
    title: "New Years Eve",
    date: "2021-12-31",
    img: require("./assets/showcase-stills.jpg"),
  },
  {
    id: 3,
    title: "Matt's B'day",
    date: "2022-04-03",
    img: require("./assets/test.png"),
  },
  {
    id: 4,
    title: "Cannelle's B'day",
    date: "2022-08-31",
    img: require("./assets/showcase-stills.jpg"),
  },
  {
    id: 5,
    title: "Olivia's B'day",
    date: "2022-04-12",
    img: require("./assets/showcase-stills.jpg"),
  },
  {
    id: 6,
    title: "Diwali",
    date: "2022-11-04",
    img: require("./assets/showcase-stills.jpg"),
  },
  {
    id: 7,
    title: "Easter",
    date: "2022-04-15",
    img: require("./assets/showcase-stills.jpg"),
  },
];

export default function App() {
  const [dates, setDates] = useState(data);
  const submitHandler = (title, date) => {
    const newDate = {
      id: Math.random(),
      img: image,
      title,
      date,
    };
    setDates((prevDates) => {
      return [newDate, ...prevDates];
    });
  };

  return (
    <NavigationContainer>
      {/* <View style={tw`flex-1`}> */}
      {/* <StatusBar /> */}
      {/* <Header /> */}
      {/* <View style={tw`p-3 bg-blue-100 flex-1 items-center`}>
          <Home
            dates={dates.sort((a, b) => {
              return a.date > b.date;
            })}
            image={image}
            submitHandler={submitHandler}
          />
        </View> */}
      {/* </View> */}
      <MyTabs dates={dates} image={image} submitHandler={submitHandler} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
