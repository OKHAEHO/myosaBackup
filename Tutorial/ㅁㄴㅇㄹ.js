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

  const [textItem, setTextItem] = useState("");

  handleCancel = () => {
    navigation.goBack();
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
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
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 40,
              marginRight: 40,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (textItem === "daeriin") {
                  setTextItem("");
                } else {
                  setTextItem("daeriin");
                }
              }}
            >
              <View
                style={{
                  padding:
                    textItem === "" ? 20 : textItem === "daeriin" ? 30 : 15,

                  borderRadius: 10,
                  backgroundColor:
                    textItem === ""
                      ? "rgba(45,75,142,0.8)"
                      : textItem === "daeriin"
                      ? "rgba(45,75,142,1.0)"
                      : "rgba(45,75,142,0.5)",
                }}
              >
                <Text
                  style={{
                    fontSize:
                      textItem === "" ? 15 : textItem === "daeriin" ? 25 : 13,
                  }}
                >
                  daeriin
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (textItem === "soyouju") {
                  setTextItem("");
                } else {
                  setTextItem("soyouju");
                }
              }}
            >
              <View
                style={{
                  padding:
                    textItem === "" ? 20 : textItem === "soyouju" ? 30 : 15,
                  borderRadius: 10,
                  backgroundColor:
                    textItem === ""
                      ? "rgba(45,75,142,0.8)"
                      : textItem === "soyouju"
                      ? "rgba(45,75,142,1.0)"
                      : "rgba(45,75,142,0.5)",
                }}
              >
                <Text
                  style={{
                    fontSize:
                      textItem === "" ? 15 : textItem === "soyouju" ? 25 : 13,
                  }}
                >
                  soyouju
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {textItem && (
          <View
            style={{
              position: "absolute",
              backgroundColor: "rgba(45,75,142,1.0)",
              borderRadius: 15,
              marginLeft: 40,
              marginRight: 40,
              padding: 10,

              bottom: 160,
              width: "80%",
              height: "50%",
            }}
          >
            <Text style={{ fontSize: 25 }}>asdf</Text>
          </View>
        )}
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
          <TouchableOpacity onPress={() => navigation.navigate("TVP4")}>
            <Icon
              style={{ marginRight: 20 }}
              name={"arrow-circle-right"}
              size={60}
              color={"rgba(45, 75, 142, 0.8)"}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default TutorialViewPg5;
