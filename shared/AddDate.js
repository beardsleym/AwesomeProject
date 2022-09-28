import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";

const AddDate = ({ submitHandler }) => {
  const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");

  const [date, setDate] = useState(new Date());

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

  const handlePress = () => {
    if (title.length && date.length) {
      submitHandler(title, date);
      setTitle("");
      setDate("");
    }
  };

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
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
        {/* IMAGE PICKER */}
        <View style={tw`text-xs shadow-lg mb-2`}>
          {/* <Button title="Pick an image from camera roll" onPress={pickImage}> */}
          <MaterialIcons
            style={tw`text-white mb-4 bg-purple-500 text-center`}
            name="image"
            size={36}
            onPress={pickImage}
          />
          {/* </Button> */}

          {image && <Image source={{ uri: image }} style={tw`w-full h-42`} />}
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
