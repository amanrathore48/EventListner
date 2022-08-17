import React, { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import EventCard from "../components/EventCard";
import { EventData } from "../constants";
import { COLORS } from "../Styles/Theme";

import FocusedStatusBar from "../components/FocusedStatusBar";
import {
  BackgroundContainer,
  BottomContainer,
  TopContainer,
} from "../Styles/Home.Styles";
import HomeHeader from "../components/HomeHeader";

const Home = () => {
  const [eventData, setEventData] = useState(EventData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setEventData(EventData);
    }
    const filteredData = EventData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setEventData(EventData);
    } else {
      setEventData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 1 }}>
          <FlatList
            data={eventData}
            renderItem={({ item }) => <EventCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <BackgroundContainer>
          <TopContainer />
          <BottomContainer />
        </BackgroundContainer>
      </View>
    </SafeAreaView>
  );
};

export default Home;
