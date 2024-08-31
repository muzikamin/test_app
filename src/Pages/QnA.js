import { Box, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Result, resultbox } from "./Result";

export const QnA = ({ page, setPage, colorMode, name }) => {
  const questionList = [
    {
      q: [`나는 대체로 마음이 차분하고 평온하다고 느낀다.`],
      a: [
        { text: "세상은 꽃과 들판... 아유 너무 평화롭다~ 😊", score: 0 },
        { text: "그럭저럭? 꽤나 차분하다고 생각해 😀", score: 1 },
        { text: "마음 다스리기! 평온해지려면 노력이 필요해...🦢", score: 2 },
        { text: "평온하다고 느낀 적이 언제였지? 🤔", score: 3 },
      ],
    },
    {
      q: ["긴장해서 안절부절 못한다는 느낌을 받았던 적이 있다."],
      a: [
        { text: "긴장? 음 그게 뭐야? 😉", score: 0 },
        { text: "가끔 그렇긴한데... 불편하진 않아! 😄", score: 1 },
        { text: "긴장하면 종종 그래...😣", score: 2 },
        { text: "내 안의 불안이는 자주 폭주한다...!😫", score: 3 },
      ],
    },
    {
      q: ["내가 예상하지 못하는 나쁜 일이 일어날 것 같은 걱정이 든다."],
      a: [
        { text: "복세편살! 복잡한 세상 편하게 살자!", score: 0 },
        { text: "가끔 그렇긴 한데, 뭐 현재에 집중하자!", score: 1 },
        { text: "좀 그런 편... 종종 걱정은 할 수 있잖아?", score: 2 },
        { text: "무슨 일 생기면 어떡해...?ㅠ 나는 지금도 걱정 중!", score: 3 },
      ],
    },
    {
      q: [" 쉽게 겁을 먹고 두려운 마음이 들면서 조마조마해진다."],
      a: [
        { text: "두려움은 나약한 사람이 드는 법. 난 강해", score: 0 },
        { text: "가끔은 두렵지만, 정신력으로 이겨내보자구", score: 1 },
        { text: "자주 두려워 움츠러들긴 해...!", score: 2 },
        { text: "무슨 일을 할 때마다 난 두려워, 넘 무서워~!", score: 3 },
      ],
    },
    {
      q: ["대체로 신경이 과민되어 있고 침착하지 못하다."],
      a: [
        { text: "산은 산이고 물은 물이로다~! 아주 침착한 편이지", score: 0 },
        { text: "흠... 대체로 침착한 편이야", score: 1 },
        { text: "가끔은 어떤 일들에 신경이 뺏겨서 집중하지 못해", score: 2 },
        { text: "뭐든게 조금씩은 다 예민해!", score: 3 },
      ],
    },
    {
      q: ["흥분된 느낌을 받으면서 심장이 두근거리고 빨리 뛸 때가 있다."],
      a: [
        { text: "내 심장... 뛰고 있는 거 맞지?", score: 0 },
        { text: "글쎄? 뛰긴하는데 신경이 막 쓰이진 않아!", score: 1 },
        { text: "가끔 그럴 때마다 당황스러워;;", score: 2 },
        { text: "쿵쾅쿵쾅... 심장아 나대지 마...", score: 3 },
      ],
    },
    {
      q: ["때때로 당황해서 어찌할 바를 모를 때가 생긴다."],
      a: [
        { text: "당황할 때는 있지만, 포커페이스를 유지해", score: 0 },
        {
          text: "할 수 있다! 마인드컨트롤로 당황함을 맞서는 편",
          score: 1,
        },
        { text: "나 당황스러워... 되도록 그런 상황은 피하고 싶어.", score: 2 },
        { text: "자주 그래... 도망치고 싶어. 이 상황 ㅠㅠ", score: 3 },
      ],
    },
    {
      q: ["손이 자주 떨리거나 가끔씩 다리가 떨리고는 한다."],
      a: [
        { text: "난 아주 굳건해! 그런 적 없지! 🔥", score: 0 },
        { text: "글쎄? 자주 그렇진 않아!😃", score: 1 },
        { text: "가끔씩 그래... 은근 이게 신경쓰인다니까? ", score: 2 },
        { text: "나... 지금 떨고 있니? 자주 그러는 편 😥", score: 3 },
      ],
    },
    {
      q: ["휴식할 때에도 대체로 편안하게 쉴 수가 없다."],
      a: [
        { text: "쉴 때는 아주 푹 쉰다구! 아주 휴식을 즐기는 편", score: 0 },
        { text: "나만의 휴식방법을 알고 있지! 꽤나 잘 쉬는 편이야", score: 1 },
        {
          text: "대체로 그렇긴 한데... 어떻게 하면 더 잘쉴 수 있지?",
          score: 2,
        },
        {
          text: "내가 쉬는게 아니야... 쉬다보면 불안해진다구ㅠㅠ",
          score: 3,
        },
      ],
    },
    {
      q: ["평소에 마음이 놓이고 편안하다고 느끼고는 한다."],
      a: [
        { text: "꽤 그렇지, 마음 편한게 몸도 최고라구!", score: 0 },
        {
          text: "매일 편하지는 않지만 대체로 내 마음 상태는 만족해!",
          score: 1,
        },
        { text: "요즘 뭔가 답답해... 편안했음 좋겠어", score: 2 },
        {
          text: "언제나 불편해! 불안함이 꼬리를 무는 중",
          score: 3,
        },
      ],
    },

    {
      q: ["테스트가 모두 끝났어요:)"],
      a: [{ text: "슝! 결과 보러 갈래요 💌", score: 0 }],
    },
  ];

  const [counts, setCounts] = useState({ score: 0 });

  const handleClickAnswer = (score, idx) => {
    let value = counts;
    value.score = value.score + score;

    setCounts(value);
    setPage(page + 1);

    if (idx + 1 === questionList.length) {
      console.log("결과보기");
    }
  }; //카운트 값

  console.log(counts);

  return (
    <Box
      wordBreak="break-word"
      textAlign="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {page <= questionList.length ? (
        <Box>
          <Box fontSize="20px" fontWeight={700}>
            <Box>{`${page} / ${questionList.length}`}</Box>
          </Box>
          {questionList.map((val, idx) => (
            <Box
              display="flex"
              flexDirection="column"
              style={{ display: page === idx + 1 ? "flex" : "none" }}
              key={idx}
            >
              <Box marginTop="30px" marginBottom="30px">
                <Box
                  width="90%"
                  margin="0 auto 30px auto"
                  fontSize="18px"
                  fontWeight={700}
                  color={colorMode === "light" ? "teal.900" : "FFFFFF"}
                >
                  {val.q}
                </Box>
              </Box>
              <Box>
                <Box>
                  {val.a.map((aval, aidx) => (
                    <Button
                      padding="30px"
                      width="90%"
                      marginBottom="20px"
                      colorScheme="teal"
                      variant="outline"
                      key={aidx}
                      onClick={() => handleClickAnswer(aval.score, aidx)}
                    >
                      {aval.text}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Result counts={counts} name={name} />
      )}
    </Box>
  );
};
