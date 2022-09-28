import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, Button } from "react-native";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";
import AddDate from "../shared/AddDate";

const Add = ({ submitHandler }) => {
  return (
    <View style={tw`w-full flex-1`}>
      <AddDate submitHandler={submitHandler} />
    </View>
  );
};

export default Add;
