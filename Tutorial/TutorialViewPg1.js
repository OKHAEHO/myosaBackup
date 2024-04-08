import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
  SectionList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import RNPickerSelect from "react-native-picker-select";
import daechuData from "./daechuData";
import { useNavigation } from "@react-navigation/native";
import * as S from "./TutorialStyle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
function formatCurrency(amount) {
  if (amount >= 100000000) {
    const eok = Math.floor(amount / 100000000);
    const remainder = amount % 100000000;
    if (remainder === 0) {
      return `${eok}억`;
    } else {
      return `${eok}억${formatCurrency(remainder)}`;
    }
  } else if (amount >= 10000) {
    const man = Math.floor(amount / 10000);
    const remainder = amount % 10000;
    if (remainder === 0) {
      return `${man}만`;
    } else {
      return `${man}만${remainder}`;
    }
  } else {
    return amount.toString();
  }
}

function TutorialViewPg1() {
  const [inputValue, setInputValue] = useState("");
  const [selectedExp, setSelectedExp] = useState("");
  const navigation = useNavigation();

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const selectedinputValue = inputValue ? parseFloat(inputValue) : 0;

  const FindDaechuValue = daechuData.find(
    (daechu) => daechu.label === selectedExp
  );

  const selectedFindDaechuValue = FindDaechuValue
    ? parseFloat(FindDaechuValue.value)
    : 0;
  const addAmount = (amount) => {
    setInputValue((prevValue) =>
      prevValue ? `${parseFloat(prevValue) + amount}` : `${amount}`
    );
  };
  const sum = selectedinputValue + selectedFindDaechuValue; //+;

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ margin: 10 }}>
        <Text style={{ color: "gray" }}>( 1 / 5 )</Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            margin: 10,
            fontWeight: "500",
          }}
        >
          예산확인하기
        </Text>
      </View>
      <View style={{ width: "80%" }}>
        <Text style={{ color: "gray", fontSize: 13, margin: 10 }}>
          <Text
            style={{
              color: "#939393",
              fontSize: 14,
              fontWeight: "400",
            }}
          >
            본인의 가용 자본
          </Text>
          과 이용할{" "}
          <Text style={{ color: "#939393", fontSize: 17, fontWeight: "400" }}>
            대출 가능 금액
          </Text>
          을 합쳐서 예산을 확인해야해요!
        </Text>
      </View>
      <View style={{ height: 0.4, backgroundColor: "#939393" }}></View>
      <View style={{ margin: 10, marginTop: 20 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
          }}
        >
          가용 예산을 알려주세요.
        </Text>
      </View>
      <View
        style={{
          marginLeft: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="여기에 입력하세요"
          style={{
            width: "60%",
            height: 40,
            borderColor: "#333",
            borderRadius: 5,
            paddingHorizontal: 10,

            fontSize: 14,
            backgroundColor: "#F7F7F7",
          }}
          keyboardType="number-pad"
          returnKeyType="done"
          value={inputValue}
          onChangeText={handleInputChange}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            right: 10,
            width: "40%",
            height: 40,
            backgroundColor: "#F7F7F7",
            borderRadius: 5,
          }}
        >
          <Text style={{ marginRight: 10, fontSize: 12, color: "#B6B5B4" }}>
            {formatCurrency(Number(inputValue))}원
          </Text>
        </View>
      </View>
      <View style={{ margin: 10, marginTop: 30 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            marginBottom: 5,
          }}
        >
          이용할 대출 상품을 선택해주세요.
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 13, color: "#B6B5B4" }}>
            어떤 대출이 나와있는지 모르시나요?
          </Text>
          <Text
            style={{
              marginLeft: 5,
              fontSize: 13,
              color: "rgba(45, 75, 142, 1.0)",
            }}
          >
            대출 종류 알아보기
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          padding: 10,
          width: "100%",
        }}
      >
        {daechuData
          .map((daechu) => daechu.label)
          .map((label, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                if (selectedExp === label) {
                  setSelectedExp("");
                } else {
                  setSelectedExp(label);
                }
              }}
            >
              <View
                style={{
                  backgroundColor:
                    selectedExp === label
                      ? "rgba(45, 75, 142, 1.0)"
                      : "#F7F7F7",

                  padding: 15,
                  marginBottom: 8,
                  marginRight: 8,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{ color: selectedExp === label ? "white" : "black" }}
                >
                  {label}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
      </View>

      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>
          최대 예상 가용 가산은 총
        </Text>
        <Text style={{ fontSize: 20 }}>
          <Text
            style={{
              color: "#2D4B8E",
              fontSize: 28,
              fontWeight: "500",
            }}
          >
            {formatCurrency(sum)}원
          </Text>{" "}
          입니다.
        </Text>
      </View>
      {inputValue && selectedExp ? (
        <View style={{ alignItems: "center", flex: 1 }}>
          <View
            style={{
              position: "absolute",
              padding: 10,
              bottom: 50,
              width: "100%",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("TVP2")}>
              <View
                style={{
                  alignItems: "center",
                  padding: 15,
                  backgroundColor: "#2D4B8E",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  다음
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={{ alignItems: "center", flex: 1 }}>
          <View
            style={{
              position: "absolute",
              padding: 10,
              bottom: 50,
              width: "100%",
            }}
          >
            <View
              style={{
                alignItems: "center",
                padding: 15,
                backgroundColor: "#DEDEDE",

                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "400",
                  color: "black",
                }}
              >
                다음
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

export default TutorialViewPg1;
