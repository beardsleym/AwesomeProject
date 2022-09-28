import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AddDate from "../shared/AddDate";

const Add = ({ submitHandler }) => {
  return (
    <View className="w-full flex-1 bg-gray-700">
      <AddDate submitHandler={submitHandler} />
    </View>
  );
};

export default Add;
