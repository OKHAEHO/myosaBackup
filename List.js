import React, { useState, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";

const Page = styled.SafeAreaView`
  flex: 1;
  margintop: 1;
  backgroundcolor: "rgba(242,243,248,1.0)";
`;

const SearchIcon = styled.View`
  margin: 10px;
  align-items: flex-end;
`;

const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: rgba(45, 75, 142, 0.2);
`;

const Item = styled.Text`
  margin: 10px;
  color: black;
  font-size: 15px;
  margin-left: 18px;
  width: 300px;
`;

const SectionView = styled.View`
  border-radius: 12px;
  margin: 4px;
`;

const SectionHeader = styled.Text`
  padding-top: 2px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 2px;
  margin: 4px;
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

const List = () => {
  const [expandedItem, setExpandedItem] = useState("");
  const navigation = useNavigation();

  return (
    <Page>
      <SearchIcon>
        <Icon
          name="search"
          size={25}
          color={"rgba(45,75,142,1.0)"}
          onPress={() => navigation.navigate("ex")}
        />
      </SearchIcon>
      <SectionList
        sections={Listdata}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                setExpandedItem(item.name === expandedItem ? null : item.name);
              }}
            >
              <ItemContainer>
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

                  {expandedItem === item.name && <Item>{item.value}</Item>}
                </View>
                <Icon
                  name={
                    expandedItem === item.name ? "expand-less" : "expand-more"
                  }
                  size={25}
                  color={"rgba(45,75,142,1.0)"}
                />
              </ItemContainer>
            </TouchableOpacity>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <SectionView>
            <SectionHeader>{section.title}</SectionHeader>
          </SectionView>
        )}
        keyExtractor={(item) => `basicListEntry-${item.name}`}
      />
    </Page>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: 5,
    padding: 10,
    fontSize: 18,
    height: 44,
    width: 330,
    marginLeft: 10,
  },
  expandedItem: {
    padding: 10,
    fontSize: 18,
    height: 33,
    width: 330,
    marginLeft: 10,
  },
});
export default List;
