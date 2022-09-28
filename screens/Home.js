import React, { useState } from "react";
import { View, FlatList } from "react-native";
import Card from "../shared/Card";

const Home = ({ dates }) => {
  const renderItem = ({ item }) => <Card item={item} />;

  return (
    <View className="w-full flex-1 bg-slate-700">
      <FlatList
        className="w-full"
        data={dates}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
