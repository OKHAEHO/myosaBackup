import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  SectionList,
  Button,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import * as S from "./TutorialStyle";
import TutorialPg4Data from "./TutorialPg4Data";

function TutorialViewPg4() {
  const navigation = useNavigation();
  const [expandedItem, setExpandedItem] = useState("");
  const [styleChange, setStyleChange] = useState("");
  const [iconState, setIconState] = useState("");

  handleCancel = () => {
    navigation.goBack();
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <S.TextView>
          <S.Ts25Bold>가계약하기</S.Ts25Bold>
        </S.TextView>
        <S.MgRL40>
          <Text style={{ fontSize: 15, margin: 15 }}>
            집주인과 공인중개사와 함께 가계약을 하는 단계에요.
          </Text>
          <Text style={{ fontSize: 15, margin: 15 }}>
            준비해야할 준비물이 많아요 하나하나 체크해보아요.
          </Text>
        </S.MgRL40>

        <SectionList
          sections={TutorialPg4Data}
          renderItem={({ item }) => (
            <View
              style={{
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  padding: 15,
                  borderRadius: 15,
                  backgroundColor: iconState.includes(item.name)
                    ? "#F3F4F8"
                    : "rgba(45,75,142,0.8)",
                }}
                onPress={() => {
                  setExpandedItem(
                    item.name === expandedItem ? null : item.name
                  );
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                      padding: 4,
                      fontSize: 18,
                      marginLeft: 15,
                      fontWeight: "bold",
                      color: iconState.includes(item.name) ? "gray" : "white",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Icon
                    name={
                      expandedItem === item.name ? "expand-less" : "expand-more"
                    }
                    size={25}
                    color={"white"}
                    style={{ marginRight: 10 }}
                  />
                </View>
                {expandedItem === item.name && (
                  <>
                    {[
                      item.value1,
                      item.value2,
                      item.value3,
                      item.value4,
                      item.value5,
                      item.value6,
                      item.value7,
                    ].map(
                      (value, index) =>
                        value && (
                          <TouchableOpacity
                            key={index}
                            style={{ marginTop: 10, padding: 4 }}
                            onPress={() => {
                              setStyleChange((prevState) => {
                                if (prevState.includes(value)) {
                                  return prevState.filter(
                                    (item) => item !== value
                                  );
                                } else {
                                  return [...prevState, value];
                                }
                              });
                            }}
                          >
                            <View style={{ flexDirection: "row" }}>
                              <Icon
                                name={
                                  styleChange.includes(value)
                                    ? "check-box"
                                    : "check-box-outline-blank"
                                }
                                size={25}
                                style={{ marginTop: 3 }}
                                color={
                                  ~styleChange.includes(value)
                                    ? "white"
                                    : "white"
                                }
                              />
                              <Text
                                style={
                                  styleChange.includes(value)
                                    ? {
                                        color:
                                          expandedItem === item.name
                                            ? "white"
                                            : "black",
                                        marginRight: 15,
                                        marginTop: 7,
                                        marginLeft: 5,
                                        fontSize: 18,
                                      }
                                    : {
                                        color: iconState.includes(item.name)
                                          ? "gray"
                                          : "white",
                                        marginRight: 15,
                                        marginTop: 7,
                                        marginLeft: 5,
                                        fontSize: 18,
                                      }
                                }
                              >
                                {value}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        )
                    )}
                  </>
                )}
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => `basicListEntry-${item.name}`}
        />
      </ScrollView>
      <View
        style={{
          bottom: 20,
          width: "100%",
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={handleCancel}>
          <Icon
            style={{ marginLeft: 20 }}
            name={"arrow-circle-left"}
            size={60}
            color={"rgba(45, 75, 142, 0.8)"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("TVP5")}>
          <Icon
            style={{ marginRight: 20 }}
            name={"arrow-circle-right"}
            size={60}
            color={"rgba(45, 75, 142, 0.8)"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TutorialViewPg4;
