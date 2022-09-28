import React, { useState } from "react";
import { StyleSheet, View, FlatList, Modal, Button } from "react-native";
import tw from "twrnc";
import AddDate from "../shared/AddDate";
import Card from "../shared/Card";
import { MaterialIcons } from "@expo/vector-icons";

const Home = ({ dates, image, submitHandler }) => {
  const [visible, setVisible] = useState(false);

  const renderItem = ({ item }) => <Card item={item} image={image} />;
  const handleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <View style={tw`w-full flex-1`}>
      {/* <Modal visible={visible} style={tw`p-8`}>
        <AddDate
          submitHandler={submitHandler}
          handleVisibility={handleVisibility}
        />
      </Modal> */}
      <FlatList
        style={tw`w-full`}
        data={dates}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      {/* <View style={tw`text-white`}>
        <MaterialIcons
          style={tw`text-white mt-4 self-end bg-purple-600 rounded-full`}
          name="add"
          size={36}
          onPress={handleVisibility}
        />
      </View> */}
    </View>
  );
};

export default Home;
