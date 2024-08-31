import {
  Box,
  Button,
  Image,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const resultbox = [
  {
    rank: "0~25%",
    title: "<안심중>😊",
    img: "https://ifh.cc/g/SKkl4A.jpg",
    text: "불안을 아주 잘 이겨내는 타입이에요! 상황에 따라 불안을 느낄 순 있겠지만, 불안감에 대한 반응은 아주 건강한 범주 내에 있어요. 기쁨이와 함께 불안이를 다스린다면, 하루하루 알차고 즐겁게 살아갈 수 있어요!",
  },
  {
    rank: "25%~50%",
    title: "<시동중>🙂",
    img: "https://ifh.cc/g/rox40h.jpg",
    text: "약간의 불안감이 있긴 하지만, 그래도 불안감을 스스로 잘 이겨내는 타입이에요. 스스로의 마인드 컨트롤이 있다면 불안이를 금방 잠재울 수 있어요! 시동 중인 불안이를 긍정적인 마인드로 잠재워보세요!",
  },
  {
    rank: "50%~75%",
    title: "<활동중>🙄",
    img: "https://ifh.cc/g/rQn53N.jpg",
    text: "앗, 불안이가 컨트롤러를 잡고 있어요! 꽤나 불안감이 높군요. 불안감을 조절하기 위해 노력이 필요해요. 지금 당장 불안이를 잠재워볼까요?",
  },
  {
    rank: "75%~100%",
    title: "<폭주중>🚨",
    img: "https://ifh.cc/g/6BvMdr.jpg",
    text: "경고! 불안이가 폭주하고 있어요. 불안이 많이 높은 상태입니다. 스스로를 편안한 상태로 만들도록 노력하고, 긍정적인 생각과 도움을 찾아나설 차례예요.",
  },
];

export const Result = ({ counts, name }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [contents, setContents] = useState([]);

  const resultValue = () => {
    if (counts.score <= 7) {
      setContents(resultbox[0]);
    } else if (counts.score <= 15) {
      setContents(resultbox[1]);
    } else if (counts.score <= 23) {
      setContents(resultbox[2]);
    } else if (counts.score <= 30) {
      setContents(resultbox[3]);
    } else {
      // console.log("오류");
    }
  };

  useEffect(() => {
    resultValue();
  }, [contents]);

  console.log(counts.score);

  return (
    <VStack>
      <Text fontWeight="700" fontSize="20px">
        {name}의 불안이의 상태는?
      </Text>
      <Box opacity="0.8">{contents.rank}</Box>
      <Box fontSize="20px">불안이는 지금 {contents.title}</Box>
      <Box>
        <Image src={contents.img} margin="10px 0"></Image>
      </Box>
      <Box margin="20px" lineHeight="26px">
        {contents.text}
      </Box>
      <Box margin="0 30px 20px 30px" fontSize="14px" opacity="0.7">
        본 테스트의 결과는 의학적 진단을 대신하는 것이 아니므로
        <br /> 가벼운 참고 자료로만 활용하시기 바랍니다.
      </Box>
      <Button
        onClick={() => window.location.reload()}
        w="250px"
        margin="5px 0"
        padding="20px"
        colorScheme="teal"
        variant="outline"
      >
        다시하기
      </Button>
      <Button
        onClick={onOpen}
        w="250px"
        padding="20px"
        colorScheme="teal"
        variant="outline"
      >
        불안을 다스리는 방법
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>불안한 마음을 다스리는 방법</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Text lineHeight="26px">
                <Text fontSize="18px" fontWeight="700" marginBottom="10px">
                  호흡 훈련법
                </Text>
                1. 편안하게 앉아 10초간 마음을 안정시킨다.
                <br /> 2. 한 손은 가슴 위에 다른 한 손은 배꼽 위에 놓고 길게
                숨을 내뱉는다.
                <br />
                3. 가슴 위의 손은 움직이지 않는다.
                <br /> 4. 숨을 들이쉴 때 속으로 ‘하나’라고 세고, 내쉬면서
                ‘편안하다’고 속으로 말한다.
                <br /> 5. 이 방법대로 ‘열’까지 센 뒤에 다시 거꾸로 세며 복식
                호흡한다.
                <br /> <br /> 하루 두 번, 적어도 10분 이상 매일 하면 심신이
                편안해진다. <br />
                <br />{" "}
                <Text fontSize="18px" fontWeight="700" marginBottom="10px">
                  근육 이완법
                </Text>
                1. 손·발·팔·다리·어깨·목의 근육에 차례로 힘을 준 뒤 7초간
                멈췄다가 힘을 천천히 뺀다. <br />
                <br /> 불안함을 느끼면 근육이 긴장하는데, 이때 근육 이완법을
                실시해보자.
                <br /> 하루 2회 정도만 해도 긴장이 완화되면서 전반적인 불안감도
                완화된다.
                <br /> <br />
                <Text fontSize="18px" fontWeight="700" marginBottom="10px">
                  명상
                </Text>
                명상은 불안으로 인해 부교감신경을 활성화해 몸의 긴장과 불안감을
                없앤다.
                <br />
                <br />
                1. 반듯한 자세를 취한 뒤 날숨을 뱉을 땐 입을 가늘게 열고
                아랫배가 등에 닿을 정도로 천천히 숨을 내쉰다.
                <br /> 2. 들숨은 코로 자연스럽게 한다.
                <br /> <br />
                명상하다 떠오르는 잡념은 흘려보내야 한다.
                <br />
                불안한 감정은 객관적으로 바라보고 본인의 상태를 자각하면서
                수용한다.
                <br /> 오히려 불안을 회피하거나 없애려고 하는 것보단 자신이
                불안하다는 사실을 인지하고 받아들이는 과정에서 증상이 완화될 수
                있다.
                <br /> <br />
                <Button
                  margin="20px 0"
                  width="100%"
                  onClick={onClose}
                  colorScheme="teal"
                  variant="outline"
                >
                  닫기
                </Button>
              </Text>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  );
};
