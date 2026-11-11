import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Linking } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.kicker}>FREE-TO-PLAY DEMO</Text>
      <Text style={styles.title}>WISH SLOTS</Text>
      <Text style={styles.copy}>An original arcade-style game experience is coming soon.</Text>
      <Pressable style={styles.button} onPress={() => Linking.openURL("http://localhost:5173")}>
        <Text style={styles.buttonText}>Open game preview</Text>
      </Pressable>
      <Text style={styles.note}>Demo only. Credits have no cash value.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#100d20", alignItems: "center", justifyContent: "center", padding: 28 },
  kicker: { color: "#c3a6ff", letterSpacing: 3, fontSize: 11, marginBottom: 16 },
  title: { color: "white", fontSize: 38, fontWeight: "900" },
  copy: { color: "#c9c1d8", textAlign: "center", lineHeight: 24, marginVertical: 20 },
  button: { backgroundColor: "#9258dc", paddingHorizontal: 22, paddingVertical: 14, borderRadius: 12 },
  buttonText: { color: "white", fontWeight: "700" },
  note: { color: "#9f96b2", fontSize: 12, marginTop: 24 }
});
