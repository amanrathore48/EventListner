import React from "react";
import { View, Image, Text } from "react-native";

import { assets } from "../constants";
import { ESubTitle, ETitle } from "../Styles/Card";
import { COLORS } from "../Styles/Theme";

export const EventTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <ETitle>{title}</ETitle>
      <ESubTitle>by {subTitle}</ESubTitle>
    </View>
  );
};

export const Venue = ({ venue, fontSize }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.loc}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text
        style={{
          fontSize: fontSize,
          color: COLORS.primary,
        }}
      >
        {venue}
      </Text>
    </View>
  );
};

const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -14,
      }}
    />
  );
};

export const People = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.p2, assets.p3, assets.p1].map((imgUrl, index) => (
        <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
      ))}
    </View>
  );
};

export const EventDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: 14,
        paddingVertical: 8,
        backgroundColor: COLORS.white,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontSize: 12,
          color: COLORS.primary,
        }}
      >
        Event Date
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: COLORS.primary,
        }}
      >
        15 Aug
      </Text>
    </View>
  );
};

export const CardInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 16,
        marginTop: -24,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EventDate />
    </View>
  );
};
