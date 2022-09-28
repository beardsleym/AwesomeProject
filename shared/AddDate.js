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
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const AddDate = ({ submitHandler }) => {
  const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");

  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const handlePress = () => {
    if (title.length && date.length) {
      submitHandler(title, date);
      setTitle("");
      setDate("");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={tw`p-8`}>
        {/* <MaterialIcons
          style={tw`text-white mb-4 self-end bg-purple-600 rounded-full`}
          name="close"
          size={36}
          onPress={handleVisibility}
        /> */}
        {/* Inputs */}
        <View>
          <TextInput
            style={tw`border my-3 w-full bg-gray-100 text-gray-700 rounded-xl p-2`}
            placeholder="Event Title"
            onChangeText={(value) => setTitle(value)}
          ></TextInput>
          {/* <TextInput
            style={tw`border my-3 bg-gray-100 text-gray-700 rounded-xl p-2`}
            placeholder="Date: YYYY-MM-DD"
            keyboardType="numeric"
            value={date.toLocaleString()}
          ></TextInput> */}
        </View>
        <View style={tw`text-xs shadow-lg mb-2`}>
          <Button onPress={showDatepicker} title={date.toLocaleString()} />
          {/* <Button onPress={showTimepicker} title="Show time picker!" /> */}
          {/* <Text>selected: {date.toLocaleString()}</Text> */}
        </View>
        {/* Button */}
        <View style={tw`w-32 text-xs shadow-lg mb-16`}>
          <Button title="Create event" color="hotpink" onPress={handlePress} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddDate;
