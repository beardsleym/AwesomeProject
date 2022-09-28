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
import { MaterialIcons } from "@expo/vector-icons";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";

const AddDate = ({ submitHandler, navigation }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [image, setImage] = useState(null);

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
    if (title.length && date && image.length) {
      submitHandler(title, date, image);
      navigation.navigate("Home");
      setTitle("");
      setImage(null);
      setDate(new Date());
    }
  };

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
      <View className="p-8">
        {/* <MaterialIcons
          className="text-white mb-4 self-end bg-purple-600 rounded-full"
          name="close"
          size={36}
          onPress={handleVisibility}
        /> */}
        {/* Inputs */}
        <View className="space-y-3">
          <View>
            <TextInput
              className="w-full bg-gray-100 text-gray-700 rounded-xl p-2"
              placeholder="Event Title"
              onChangeText={(value) => setTitle(value)}
            ></TextInput>
          </View>
          {/* DATE PICKER */}
          <View>
            <Button onPress={showDatepicker} title={date.toLocaleString()} />
          </View>
          {/* IMAGE PICKER */}
          <View className=" bg-purple-500 rounded-full h-16 w-16">
            <MaterialIcons
              className=""
              name="image"
              size={36}
              onPress={pickImage}
            />
          </View>
          {/* Image Preview*/}
          <View className="text-xs shadow-lg">
            {image && <Image source={{ uri: image }} className="w-full h-32" />}
          </View>
          {/* Submit Button */}
          <View className="w-32 text-xs shadow-lg">
            <Button
              title="Create event"
              color="hotpink"
              onPress={handlePress}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddDate;
