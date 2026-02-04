export const questions = [
  {
    id: 1,
    question: "주말에 집에 있을 때 당신의 모습은?",
    image: "/images/q1.jpg",
    options: [
      { text: "함께 노는 게 최고! 계속 말을 걸고 장난감을 흔든다.", scores: { sociability: 2, energy: 2 } },
      { text: "각자 편한 곳에서 쉬며 평화로운 시간을 즐긴다.", scores: { independence: 2, sociability: -1 } }
    ]
  },
  {
    id: 2,
    question: "고양이가 당신의 무릎 위로 갑자기 올라온다면?",
    image: "/images/q2.jpg",
    options: [
      { text: "너무 행복해! 내려갈 때까지 꼼짝 않고 쓰다듬어준다.", scores: { affection: 2, sociability: 2 } },
      { text: "귀엽지만 조금 부담스럽다. 적당히 인사하고 내려보낸다.", scores: { independence: 2, affection: -1 } }
    ]
  },
  {
    id: 3,
    question: "집안 인테리어가 고양이 때문에 망가진다면?",
    image: "/images/q3.jpg",
    options: [
      { text: "물건은 다시 사면 되지! 고양이가 즐거우면 충분하다.", scores: { energy: 2, sensitivity: -1 } },
      { text: "속상하다. 가구와 물건을 소중히 다루는 얌전한 아이가 좋다.", scores: { energy: -2, sensitivity: 1 } }
    ]
  },
  {
    id: 4,
    question: "고양이의 목소리(야옹)에 대해 어떻게 생각하시나요?",
    image: "/images/q4.jpg",
    options: [
      { text: "수다스러운 게 좋아! 나랑 대화하는 기분이 든다.", scores: { sociability: 2, affection: 1 } },
      { text: "조용했으면 좋겠다. 평온한 집안 분위기를 선호한다.", scores: { sociability: -2, sensitivity: 1 } }
    ]
  },
  {
    id: 5,
    question: "새로운 친구들이 집에 놀러 왔을 때 고양이는?",
    image: "/images/q5.jpg",
    options: [
      { text: "누구에게나 먼저 다가가 인사를 건네는 인싸냥!", scores: { sociability: 2, sensitivity: -2 } },
      { text: "구석에 숨어서 손님들이 갈 때까지 관찰하는 신중냥.", scores: { sensitivity: 2, sociability: -2 } }
    ]
  },
  {
    id: 6,
    question: "당신이 생각하는 가장 이상적인 교감은?",
    image: "/images/q6.jpg",
    options: [
      { text: "서로 얼굴을 맞대고 눈을 맞추는 진한 애정 표현", scores: { affection: 2, sociability: 1 } },
      { text: "한 공간에 있다는 것만으로도 충분한 은은한 유대감", scores: { independence: 2, affection: -1 } }
    ]
  },
  {
    id: 7,
    question: "고양이가 밤늦게 '우다다'를 하며 뛰어다닌다면?",
    image: "/images/q7.jpg",
    options: [
      { text: "사냥 본능이 넘치네! 같이 놀아줄 기운이 난다.", scores: { energy: 2, independence: -1 } },
      { text: "밤에는 좀 잤으면 좋겠다. 차분한 성격이 더 끌린다.", scores: { energy: -2, sensitivity: 1 } }
    ]
  },
  {
    id: 8,
    question: "외출 후 돌아왔을 때 고양이가 자고 있다면?",
    image: "/images/q8.jpg",
    options: [
      { text: "깨워서라도 반갑게 인사하고 품에 안아보고 싶다.", scores: { affection: 2, sociability: 1 } },
      { text: "잘 자는 모습이 보기 좋아 방해하지 않고 지나간다.", scores: { independence: 2, sensitivity: 1 } }
    ]
  },
  {
    id: 9,
    question: "고양이의 털 관리에 대해 당신의 태도는?",
    image: "/images/q9.jpg",
    options: [
      { text: "매일매일 빗겨주고 정성껏 관리해줄 준비가 되어있다.", scores: { affection: 1, sensitivity: 1 } },
      { text: "손이 덜 갔으면 좋겠다. 스스로 관리 잘하는 깔끔냥이 좋다.", scores: { independence: 2, sensitivity: -1 } }
    ]
  },
  {
    id: 10,
    question: "당신이 고양이에게 가장 바라는 성격은?",
    image: "/images/q10.jpg",
    options: [
      { text: "언제나 내 곁을 지키는 껌딱지 같은 다정함", scores: { affection: 2, sociability: 2 } },
      { text: "서로의 프라이버시를 지켜주는 시크한 쿨함", scores: { independence: 2, sociability: -2 } }
    ]
  }
];