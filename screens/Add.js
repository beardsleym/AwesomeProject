import React, { useState } from "react";
import { View } from "react-native";
import AddDate from "../shared/AddDate";

const Add = (props, { submitHandler }) => {
  return (
    <View className="w-full flex-1 bg-slate-700">
      <AddDate submitHandler={submitHandler} {...props} />
    </View>
  );
};

export default Add;
