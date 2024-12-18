import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

type TabsType = {
  name: string;
  title: string;
  icon: (prop: {
    focused: boolean;
    color: string;
    size: number;
  }) => React.ReactNode;
};

const pages = [
  {
    name: "(home)/index",
    title: "Instagram",
    icon: ({ color }) => (
      <IconSymbol size={28} name="house.fill" color={color} />
    ),
  },
  {
    name: "(explore)/index",
    title: "Explore",
  },
  {
    name: "(create)/index",
    title: "Create",
  },
  {
    name: "(reels)/index",
    title: "Reels",
  },
  {
    name: "(profile)/index",
    title: "Profile",
  },
] as TabsType[];

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors["light"].tint,
        headerShown: true,
        tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      {pages.map((page, index) => (
        <Tabs.Screen
          key={index}
          name={page.name}
          options={{
            title: page.title,
            tabBarIcon: page.icon,
          }}
        />
      ))}
    </Tabs>
  );
}
