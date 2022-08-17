import React from "react";
import { View, Text, Image } from "react-native";

import { COLORS } from "../Styles/Theme";
import { Venue } from "./CardInfo";

const Hosts = ({ host }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
        paddingHorizontal: 8,
      }}
      key={host.id}
    >
      <Image
        source={host.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingHorizontal: 8,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            color: COLORS.primary,
          }}
        >
          {host.name}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 12,
          color: COLORS.primary,
        }}
      >
        {host.position}
      </Text>
    </View>
  );
};

export default Hosts;
