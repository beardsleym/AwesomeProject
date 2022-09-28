import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "./screens/Home";
import Add from "./screens/Add";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function MyTabs({ dates, image, submitHandler, navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "white" },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} className="" color={color} />
          ),
        }}
      >
        {(props) => <Home {...props} dates={dates} />}
      </Tab.Screen>
      <Tab.Screen
        name="Add"
        options={{
          tabBarLabel: "Add",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add" size={24} className="" color={color} />
          ),
        }}
      >
        {(props) => <Add {...props} submitHandler={submitHandler} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

// const image = {
//   uri: "https://images.unsplash.com/photo-1606925595154-06943574f13c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
// };

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
  const submitHandler = (title, date, image) => {
    console.log(title, date, image);
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
      <MyTabs dates={dates} submitHandler={submitHandler} />
    </NavigationContainer>
  );
}
