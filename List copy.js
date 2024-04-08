import React, { useState, useMemo, useEffect } from "react";
import {
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import Listdata from "./Listdata";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const SectionListBasics = () => {
  const [expandedItem, setExpandedItem] = useState("");
  const [expandedIcon, setExpandedIcon] = useState({});
  const navigation = useNavigation();

  const storeIconState = async (value) => {
    try {
      await AsyncStorage.setItem("@iconState", JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };
  const loadIconState = async () => {
    try {
      const value = await AsyncStorage.getItem("@iconState");
      if (value !== null) {
        setExpandedIcon(JSON.parse(value));
      }
    } catch (e) {
      // loading error
    }
  };
  const handlePress = (name) => {
    setExpandedIcon((prevIcons) => {
      const newIcons = {
        ...prevIcons,
        [name]: prevIcons[name] === "star" ? "star-outline" : "star",
      };
      storeIconState(newIcons); // 아이콘 상태 저장
      return newIcons;
    });
  };
  useEffect(() => {
    loadIconState();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchIcon}>
        <Icon
          name="search"
          size={25}
          color={"rgba(45,75,142,1.0)"}
          onPress={() => navigation.navigate("ex")}
        />
      </View>
      <SectionList
        sections={Listdata}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableWithoutFeedback
              onPress={() => {
                handlePress(item.name);
              }}
            >
              <View style={styles.icon}>
                <Icon
                  name={expandedIcon[item.name] || "star-outline"}
                  size={25}
                  color={"rgba(45,75,142,1.0)"}
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableOpacity
              onPress={() => {
                setExpandedItem(item.name === expandedItem ? null : item.name);
              }}
            >
              <View style={styles.itemContainer}>
                <View>
                  <Text
                    style={
                      expandedItem === item.name
                        ? styles.expandedItem
                        : styles.item
                    }
                  >
                    {item.name}
                  </Text>

                  {expandedItem === item.name && (
                    <Text style={styles.listvalue}>{item.value}</Text>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) => `basicListEntry-${item.name}`}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
    backgroundColor: "white",
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    margin: 0,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "rgba(45,75,142,1.0)",
  },
  item: {
    marginTop: 5,
    padding: 10,
    fontSize: 20,
    height: 44,
    width: 400,
    marginLeft: -15,
  },
  expandedItem: {
    padding: 10,
    fontSize: 20,
    height: 33,
    width: 400,
    marginLeft: -15,
  },
  listvalue: {
    paddingEnd: 50,
    margin: 10,
    color: "black",
    fontSize: 15,
    marginLeft: -5,
  },

  searchIcon: {
    margin: 10,
    alignItems: "flex-end",
  },
  icon: {
    width: 40,
    marginLeft: 5,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default SectionListBasics;
