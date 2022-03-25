import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";

const AddDate = ({ submitHandler, handleVisibility }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handlePress = () => {
    if (title.length && date.length) {
      submitHandler(title, date);
      handleVisibility();
      setTitle("");
      setDate("");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={tw`p-8`}>
        <MaterialIcons
          style={tw`text-white mb-4 self-end bg-purple-600 rounded-full`}
          name="close"
          size={36}
          onPress={handleVisibility}
        />
        {/* Inputs */}
        <View>
          <TextInput
            style={tw`border my-3 w-full bg-gray-100 text-gray-700 rounded-xl p-2`}
            placeholder="Event Title"
            onChangeText={(value) => setTitle(value)}
          ></TextInput>
          <TextInput
            style={tw`border my-3 bg-gray-100 text-gray-700 rounded-xl p-2`}
            placeholder="Date: YYYY-MM-DD"
            onChangeText={(value) => setDate(value)}
            keyboardType="numeric"
          ></TextInput>
        </View>
        {/* Button */}
        <View style={tw`w-25 text-xs shadow-lg mb-16`}>
          <Button title="Add date" color="hotpink" onPress={handlePress} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddDate;
