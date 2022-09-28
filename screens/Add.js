import React, { useState } from "react";
import { View } from "react-native";
import AddDate from "../shared/AddDate";

const Add = ({ submitHandler }) => {
  return (
    <View className="w-full flex-1 bg-slate-700">
      <AddDate submitHandler={submitHandler} />
    </View>
  );
};

export default Add;
