import React from "react";
import { View, Text, Image, TextInput } from "react-native";

import { COLORS, FONTS, SIZES } from "../Styles/Theme";
import { assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: COLORS.primary,
            fontSize: SIZES.extraLarge,
          }}
        >
          EventListner
        </Text>

        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.p1}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontSize: SIZES.small,
            color: COLORS.secondary,
          }}
        >
          Hello Monika 👋
        </Text>

        <Text
          style={{
            fontSize: SIZES.large,
            color: COLORS.secondary,
            marginTop: SIZES.base / 2,
          }}
        >
          Let’s find an exciting events for you ..
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.white,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search Events"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
