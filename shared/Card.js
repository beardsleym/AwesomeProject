import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Card = ({ item, image }) => {
  return (
    <TouchableOpacity>
      <View style={tw`w-full bg-white rounded-xl m-1 shadow-lg`}>
        {/* CARD CONTENTS */}
        {/* Image */}
        <View style={tw`w-full`}>
          {/* <Image
            style={tw`w-full h-30 rounded-t-lg`}
            source={require("../assets/test.png")}
          /> */}
          {/* <Image
            style={tw`w-full h-30 rounded-t-lg`}
            source={require(image)}
          /> */}
          {/* <Image style={tw`w-full h-30 rounded-t-lg`} source={item.image} /> */}
          <Image style={tw`w-full h-30 rounded-t-lg`} source={item.img} />
        </View>
        {/* Text */}
        <View style={tw`px-6 py-4`}>
          {/* Title */}
          <Text style={tw`text-gray-700 text-2xl mb-2`}>{item.title}</Text>
          {/* Date */}
          <Text style={tw`text-gray-500 text-base`}>
            {dayjs(item.date).format("D MMMM")}
          </Text>
          {/* Relative Time */}
          <Text style={tw`text-gray-500 text-base`}>
            {dayjs(item.date).fromNow()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
