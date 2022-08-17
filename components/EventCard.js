import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";
import {
  CardContainer,
  CardImageContainer,
  CardInfoContainer,
} from "../Styles/Card";
import { SIZES } from "../Styles/Theme";
import { assets } from "../constants";
import { CardInfo, EventTitle, Venue } from "./CardInfo";
import { CircleButton, RectButton } from "./Buttons";

const EventCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <CardContainer>
      <CardImageContainer>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </CardImageContainer>
      <CardInfoContainer>
        <CardInfo />

        <View style={{ width: "100%", padding: 16 }}>
          <EventTitle
            title={data.name}
            subTitle={data.creator}
            titleSize={18}
            subTitleSize={12}
          />

          <View
            style={{
              marginTop: 16,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Venue venue={data.venue} />
            <RectButton
              minWidth={120}
              handlePress={() => navigation.navigate("Details", { data })}
            />
          </View>
        </View>
      </CardInfoContainer>
    </CardContainer>
  );
};

export default EventCard;
