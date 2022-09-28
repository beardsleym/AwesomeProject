import React, { useState } from "react";
// import { StyleSheet, View, Button, Modal, FlatList, Alert, Input, TextInput } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Header = () => {
  return (
    <View>
      <Text className="text-gray-900 font-bold text-2xl tracking-wider bg-blue-400 pt-10 pb-4 text-center">
        COUNTDOWN
      </Text>
    </View>
  );
};

export default Header;
