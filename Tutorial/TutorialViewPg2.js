import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import * as S from "./TutorialStyle";
import Postcode from "@actbase/react-daum-postcode";

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
function TutorialViewPg2() {
  const [tltp, setTltp] = useState("");
  const [dnvus, setDnvus] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedZoneCode, setSelectedZoneCode] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [danji, setDanji] = useState(""); // State for '단지명'
  const [dong, setDong] = useState(""); // State for '동'
  const [ho, setHo] = useState(""); // State for '호'
  const navigation = useNavigation();
  const allFieldsFilled = danji !== "" && dong !== "" && ho !== "";
  const handletltpChange = (text) => {
    setTltp(text);
  };
  handleCancel = () => {
    navigation.goBack();
  };
  const handleAddressSelect = (data) => {
    setSelectedZoneCode(data.zonecode);
    setSelectedAddress(data.address);
    console.log(JSON.stringify(data));
    setModalVisible(false); // 모달을 닫음
  };
  const addAmount = (tltp) => {
    setTltp((prevValue) =>
      prevValue ? `${parseFloat(prevValue) + tltp}` : `${tltp}`
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 10 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ margin: 10 }}>
          <Text style={{ color: "gray" }}>( 2 / 5 )</Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              margin: 10,
              fontWeight: "500",
            }}
          >
            매물 확인하기
          </Text>
        </View>
        <View style={{ width: "80%" }}>
          <Text style={{ color: "gray", fontSize: 13, margin: 10 }}>
            공인중개사 및 다양한 부동산 어플리케이션으로 {"\n"}매물을 알아보는
            단계에요.
          </Text>
          <Text style={{ color: "gray", fontSize: 13, margin: 10 }}>
            지역, 교통, 학군, 창문방향, 방이나 화장실 개수, 선호하는 방향,
            층고를 기준으로 매물을 정해야해요.
          </Text>
          <Text style={{ color: "gray", fontSize: 13, margin: 10 }}>
            핵심은 계약해도 되는 매물인지 확인하는 것이에요.
          </Text>
          <Text style={{ color: "gray", fontSize: 13, margin: 10 }}>
            HUG 기준 공시가격보다 시세가 130% 이내로 들어와야해요.
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
            매물 시세를 입력해 주세요.
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
            value={tltp}
            onChangeText={handletltpChange}
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
              {formatCurrency(Number(tltp))}원
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
            공시가격 알아보기
          </Text>
        </View>
        <View style={{ margin: 10 }}>
          <Modal
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <S.PostcodeView>
                <TouchableWithoutFeedback onPress={() => {}}>
                  <S.PostcodeSize>
                    <Postcode
                      style={{ width: "100%", height: "100%" }}
                      jsOptions={{ animation: true }}
                      onSelected={handleAddressSelect}
                    />
                  </S.PostcodeSize>
                </TouchableWithoutFeedback>
              </S.PostcodeView>
            </TouchableWithoutFeedback>
          </Modal>

          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <View
              style={{
                width: "60%",
                height: 40,
                backgroundColor: "#F7F7F7",
                borderRadius: 5,
                justifyContent: "center",
              }}
            >
              <TextInput
                placeholder="우편번호로 찾기"
                style={{
                  padding: 10,
                  fontSize: 15,
                }}
                keyboardType="number-pad"
                value={dnvus}
              >
                {selectedZoneCode}
              </TextInput>
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 5,
                width: "40%",
                backgroundColor: "#2D4B8E",
                padding: 10,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: "white", fontWeight: "600" }}>
                주소 검색
              </Text>
            </TouchableOpacity>
          </View>
          {selectedZoneCode && (
            <View>
              <View
                style={{
                  width: "100%",
                  borderRadius: 5,
                  backgroundColor: "#F7F7F7",
                  padding: 10,
                  marginBottom: 10,
                }}
              >
                <Text>{selectedAddress}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  style={{
                    width: "33%",
                    borderRadius: 5,
                    backgroundColor: "#F7F7F7",
                    padding: 10,
                  }}
                  returnKeyType="done"
                  placeholder="단지명"
                  value={danji}
                  onChangeText={(text) => setDanji(text)}
                ></TextInput>
                <TextInput
                  style={{
                    width: "33%",
                    borderRadius: 5,
                    backgroundColor: "#F7F7F7",
                    padding: 10,
                    marginLeft: 5,
                  }}
                  keyboardType="number-pad"
                  returnKeyType="done"
                  placeholder="동"
                  value={dong}
                  onChangeText={(text) => setDong(text)}
                ></TextInput>
                <TextInput
                  style={{
                    width: "33%",
                    borderRadius: 5,
                    backgroundColor: "#F7F7F7",
                    padding: 10,
                    marginLeft: 5,
                  }}
                  keyboardType="number-pad"
                  returnKeyType="done"
                  placeholder="호"
                  value={ho}
                  onChangeText={(text) => setHo(text)}
                ></TextInput>
              </View>
            </View>
          )}
        </View>
        {tltp && allFieldsFilled && (
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
        )}
      </KeyboardAwareScrollView>
      {tltp && allFieldsFilled ? (
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
          <TouchableOpacity onPress={() => navigation.navigate("TVP3")}>
            <Icon
              style={{ marginRight: 20 }}
              name={"arrow-circle-right"}
              size={60}
              color={"rgba(45, 75, 142, 0.8)"}
            />
          </TouchableOpacity>
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

const styles = StyleSheet.create({
  DanjiView: {
    backgroundColor: "white",
    width: "24%",
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
  DongHoView: {
    backgroundColor: "white",
    width: "24%",
    borderRadius: 8,
    padding: 10,
    marginLeft: 5,
    borderWidth: 1,
    marginBottom: 10,
  },
});
export default TutorialViewPg2;
