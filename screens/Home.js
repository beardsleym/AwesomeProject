import React, { useState } from "react";
import { StyleSheet, View, FlatList, Modal, Button } from "react-native";
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
    <View className="w-full flex-1 bg-slate-900">
      {/* <Modal visible={visible} className="p-8">
        <AddDate
          submitHandler={submitHandler}
          handleVisibility={handleVisibility}
        />
      </Modal> */}
      <FlatList
        className="w-full"
        data={dates}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      {/* <View className="text-white">
        <MaterialIcons
          className="text-white mt-4 self-end bg-purple-600 rounded-full"
          name="add"
          size={36}
          onPress={handleVisibility}
        />
      </View> */}
    </View>
  );
};

export default Home;
