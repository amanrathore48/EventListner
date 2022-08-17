import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import { COLORS, SIZES, FONTS } from "../Styles/Theme";
import { assets } from "../constants";

import FocusedStatusBar from "../components/FocusedStatusBar";
import { RectButton, CircleButton } from "../components/Buttons";
import { CardInfo } from "../components/CardInfo";
import DetailsDesc from "../components/DetailsDesc";
import Hosts from "../components/Hosts";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />

    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: 16,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={300} fontSize={24} />
      </View>
      <FlatList
        data={data.hosts}
        renderItem={({ item }) => <Hosts host={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <CardInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.hosts.length > 0 && (
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    color: COLORS.primary,
                  }}
                >
                  Our hosts for the session
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
