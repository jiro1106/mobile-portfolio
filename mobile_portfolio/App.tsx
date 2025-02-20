import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet } from "react-native";
import { ThemeProvider, useTheme } from "../mobile_portfolio/src/pages/themetoggle/ThemeContext";
import ThemeToggle from "./src/pages/themetoggle/ThemeToggle";
import HomePage from './src/pages/HomePage';

const AppContent = () => {
  const { theme } = useTheme();

  const content = [
    { key: "themeToggle", component: <ThemeToggle /> },
    { key: "divider", component: <View style={{ height: 1, backgroundColor: theme === "dark" ? "white" : "black", marginVertical: 10 }} /> },
    { key: "homePage", component: <HomePage /> },
  ];

  return (
    <SafeAreaView style={[styles.container, theme === "dark" && styles.dark]}>
      <FlatList
        data={content}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => item.component}
      />
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  dark: { backgroundColor: "#333" },
});
