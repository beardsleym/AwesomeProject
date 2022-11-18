import React, { useState } from "react";
import { View, FlatList, Button } from "react-native";
import Card from "../shared/Card";
import { db } from "../core/firebase";
import { doc, setDoc } from "firebase/firestore";

const Home = ({ dates }) => {
  const create = async () => {
    const myDoc = doc(db, "MyCollection", "MyDocument");
    const docData = { id: "matt" };
    await setDoc(myDoc, docData);
  };
  const read = () => {};
  const update = () => {};
  const destroy = () => {};
  const renderItem = ({ item }) => <Card item={item} />;

  return (
    <View className="w-full flex-1 bg-slate-700">
      <View>
        <Button title="Create Doc" onPress={create}></Button>
      </View>
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
