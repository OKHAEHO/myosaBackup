const TutorialPg4ReadyData = [
  {
    data: [
      {
        name: "준비물",
        value1: "신분증",
        value2: "등기부등본",
        value3: "본인 소득 증빙 서류",
        value4: "이체 한도 늘리기",
        value5: "주 계좌 은행 OTP카드",
      },
    ],
    data2: [
      {
        name: "확인해야할 것",
        value1: "등기부등본이 당일날 출력됐나요?",
        value2: "건출물 대장 > 불법 건출물이 있나요?",
        value3:
          "등기부등본 > 표제부 > 소재 지번, 건물명칭 및 번호 주소가 계약하려는 곳과 동일한 소재지인가요?",
        value4: "등기부등본 > 갑구 > 실제 소유자가 임대인과 동명이인인가요?",
        value5: "등기부등본 > 을구 > 근저당이 잡혀있나요?",
      },
    ],

    data3: [
      {
        name: "가계약 문자 양식",
        value1: "안녕하세요!",
      },
    ],
  },
];

// TutorialPg4ReadyData를 두 개의 섹션으로 나누어서 SectionList에 렌더링
const TutorialPg4Data = [
  {
    title: "준비물",
    data: TutorialPg4ReadyData.map((item) => item.data[0]),
  },
  {
    title: "확인해야할 것",
    data: TutorialPg4ReadyData.map((item) => item.data2[0]),
  },
  {
    title: "문자 가계약 양식",
    data: TutorialPg4ReadyData.map((item) => item.data3[0]),
  },
];

export default TutorialPg4Data;
