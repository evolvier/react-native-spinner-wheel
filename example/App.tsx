import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ReactNativeSpinWheel from "@evolvier/react-native-spin-wheel";

export default function App() {
  return (
    <View style={styles.container}>
      <ReactNativeSpinWheel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
