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
import TutorialPg3Data from "./TutorialPg3Data";

function TutorialViewPg3() {
  const [styleChange, setStyleChange] = useState("");
  const navigation = useNavigation();
  handleCancel = () => {
    navigation.goBack();
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <S.TextView>
          <S.Ts25Bold>매물 방문하기</S.Ts25Bold>
        </S.TextView>
        <S.MgRL40>
          <Text style={{ fontSize: 15, margin: 15 }}>
            매물을 공인중개사와 함께 방문해서 직접 내부를 살펴보는 시간이에요.
          </Text>
          <Text style={{ fontSize: 15, margin: 15 }}>
            아래의 체크리스트를 이용해주세요.
          </Text>
        </S.MgRL40>

        <SectionList
          scrollEnabled={false}
          sections={TutorialPg3Data}
          renderItem={({ item }) => (
            <View
              style={{
                marginTop: 10,
                marginLeft: 40,
                marginRight: 40,
                marginBottom: item.name === "집 주변 Check List" ? 100 : 30,
                alignItems: "center",
              }}
            >
              <View style={{ marginBottom: 10 }}>
                <S.Ts25Bold>{item.name}</S.Ts25Bold>
              </View>
              <View
                style={{
                  paddingRight: 25,
                  borderRadius: 15,
                  backgroundColor: "rgba(45,75,142,0.8)",
                }}
              >
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
                        style={{ padding: 1 }}
                        onPress={() => {
                          setStyleChange((prevState) => {
                            if (prevState.includes(value)) {
                              return prevState.filter((item) => item !== value);
                            } else {
                              return [...prevState, value];
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
                              styleChange.includes(value)
                                ? "check-box"
                                : "check-box-outline-blank"
                            }
                            size={25}
                            style={{
                              marginTop: 3,
                              marginBottom: 5,
                            }}
                            color={
                              styleChange.includes(value) ? "white" : "white"
                            }
                          />

                          <View style={{ padding: 4 }}>
                            <Text
                              style={
                                styleChange.includes(value)
                                  ? {
                                      color: "white",

                                      fontSize: 15,
                                    }
                                  : {
                                      color: "white",

                                      fontSize: 15,
                                    }
                              }
                            >
                              {value}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    )
                )}
              </View>
            </View>
          )}
          keyExtractor={(item) => `basicListEntry-${item.name}`}
        />
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          width: "100%",
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

export default TutorialViewPg3;
