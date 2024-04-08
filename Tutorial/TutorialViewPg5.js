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
import TutorialPg5Data from "./TutorialPg5Data";

function TutorialViewPg5() {
  const navigation = useNavigation();
  const [styleChange, setStyleChange] = useState("");
  const titles = TutorialPg5Data.map((item) => item.title);
  const values = TutorialPg5Data.map((item) => [
    item.value1,
    item.value2,
    item.value3,
    item.value4,
    item.value5,
    item.value6,
    item.value7,
  ]);
  const [textItem, setTextItem] = useState("");

  handleCancel = () => {
    navigation.goBack();
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <S.TextView>
          <S.Ts25Bold>계약하기</S.Ts25Bold>
        </S.TextView>
        <S.MgRL40>
          <Text style={{ fontSize: 14, margin: 15 }}>
            직접 계약하는 단계에요.
          </Text>
          <Text style={{ fontSize: 14, margin: 15 }}>
            소유주가 직접 나올 수도 있고 대리인이 나올 수가 있어요. {"\n"}
            확인해야할 것을 살펴보아요.
          </Text>
        </S.MgRL40>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 30,
            marginRight: 30,
          }}
        >
          {titles.map((title, index) => (
            <TouchableOpacity
              key={index}
              style={{ flex: 1, alignItems: "center" }}
              onPress={() => {
                if (textItem === title) {
                  setTextItem("");
                } else {
                  setTextItem(title);
                }
              }}
            >
              <View
                style={{
                  padding: textItem === "" ? 20 : textItem === title ? 30 : 10,
                  width:
                    textItem === ""
                      ? "60%"
                      : textItem === title
                      ? "80%"
                      : "40%",
                  alignItems: "center",
                  borderRadius: 10,
                  backgroundColor:
                    textItem === ""
                      ? "rgba(45,75,142,0.8)"
                      : textItem === title
                      ? "rgba(45,75,142,1.0)"
                      : "rgba(45,75,142,0.5)",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize:
                      textItem === "" ? 15 : textItem === title ? 25 : 13,
                  }}
                >
                  {title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ alignItems: "center" }}>
          {textItem !== "" && (
            <View
              style={{
                backgroundColor: "rgba(45,75,142,1.0)",
                borderRadius: 15,
                width: "80%",
                padding: 15,
                paddingRight: 40,
              }}
            >
              {values[titles.indexOf(textItem)].map(
                (value, index) =>
                  // Check if value exists before rendering
                  value && (
                    <TouchableOpacity
                      key={index}
                      style={{ padding: 1 }}
                      onPress={() => {
                        setStyleChange((prevState) => {
                          if (prevState.includes(index)) {
                            return prevState.filter((item) => item !== index);
                          } else {
                            return [...prevState, index];
                          }
                        });
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          padding: 8,
                          marginLeft: 5,
                        }}
                      >
                        <Icon
                          name={
                            styleChange.includes(index)
                              ? "check-box"
                              : "check-box-outline-blank"
                          }
                          size={25}
                          style={{
                            marginTop: 3,
                            marginBottom: 5,
                          }}
                          color={
                            styleChange.includes(index) ? "white" : "white"
                          }
                        />
                        <View style={{ padding: 4 }}>
                          <Text style={{ color: "white" }}>{value}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )
              )}
            </View>
          )}
        </View>
      </ScrollView>

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 20,
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
        <TouchableOpacity onPress={() => navigation.navigate("TVP4")}>
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

export default TutorialViewPg5;
