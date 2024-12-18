import { Stack } from "expo-router";
import "../global.css";

export default function CreateLayout() {
  return (
    <Stack>
      {/* <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
