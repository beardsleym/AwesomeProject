import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Card = ({ item, image }) => {
  return (
    <TouchableOpacity>
      {/* CARD */}
      <View className="bg-slate-700 rounded-xl m-3 h-60 shadow-lg">
        {/* CARD CONTENTS */}
        {/* Image */}
        {/* <View className="w-full"> */}
        {/* <Image
            className="w-full h-30 rounded-t-lg"
            source={require("../assets/test.png")}
          /> */}
        {/* <Image
            className="w-full h-30 rounded-t-lg"
            source={require(image)}
          /> */}
        {/* <Image className="w-full h-30 rounded-t-lg" source={item.image} /> */}
        <Image className="w-full h-32 rounded-t-lg" source={item.img} />
        {/* </View> */}
        {/* Text */}
        <View className="px-6 py-4">
          {/* Title */}
          <Text className="text-white text-2xl mb-2">{item.title}</Text>
          {/* Date */}
          <Text className="text-white text-base">
            {dayjs(item.date).format("D MMMM")}
          </Text>
          {/* Relative Time */}
          <Text className="text-white text-base">
            {dayjs(item.date).fromNow()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
