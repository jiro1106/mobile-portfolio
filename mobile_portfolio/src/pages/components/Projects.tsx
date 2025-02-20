import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Linking } from "react-native";
import { useTheme } from "../themetoggle/ThemeContext"; // Import theme
import { styles } from "../../styles/Projects";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; 

// Import local images correctly
const localImages = {
  hangman: require("../../../assets/hangman.png"),
  xtravagala: require("../../../assets/xtravagala.png"),
  randomPassGenerator: require("../../../assets/password.png"),
  hotelReservation: require("../../../assets/dlsl.png"),
};

// Sample project data with GitHub links
const PROJECTS = [
  {
    id: "1",
    name: "Hangman Game in Python",
    image: localImages.hangman,
    description: "A simple Hangman game built using Python.",
    link: "https://github.com/jiro1106/hangman-game",
  },
  {
    id: "2",
    name: "Xtravagala",
    image: localImages.xtravagala,
    description: "An event management website for organizing events efficiently.",
    link: "https://github.com/jiro1106/final-project-group-2-webdevt",
  },
  {
    id: "3",
    name: "Random Password Generator in Python",
    image: localImages.randomPassGenerator,
    description: "A Python program that generates secure passwords.",
    link: "https://github.com/jiro1106/random-password-generator",
  },
  {
    id: "4",
    name: "DLSL Hotel Reservation System",
    image: localImages.hotelReservation,
    description: "A hotel reservation system for DLSL.",
    link: "https://github.com/jiro1106/dlsl-hotel-reservation-system",
  },
];

const Projects = () => {
  const { theme } = useTheme(); // Get theme

  // Function to handle project click
  const handlePress = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
  };

  return (
    <View
      style={[
        styles.projectsContainer,
        { borderColor: theme === "dark" ? "white" : "black" },
        theme === "dark" && styles.dark,
      ]}
    >
      <View style={styles.projectsIconWithTitle}>
        <Icon name="folder-open" size={20} color={theme === "dark" ? "#fff" : "#333"} />
        <Text style={[styles.projectsTitle, theme === "dark" && styles.darkText]}>Projects</Text>
      </View>

      {/* flatList for projects */}
      <FlatList
        data={PROJECTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.link)}>
            <View style={[styles.projectItem, { borderColor: theme === "dark" ? "white" : "black" }]}>
              <Image source={item.image} style={styles.projectImage} />
              <View style={styles.projectDetails}>
                <Text style={[styles.projectName, theme === "dark" && styles.darkText]}>{item.name}</Text>
                <Text style={[styles.projectDescription, theme === "dark" && styles.darkText]}>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

export default Projects;
