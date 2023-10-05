// briggs: EI, SN, TF, JP
// color: brown, green, blue, red
// letter: a, b, c, d
var quizQuestions = [
  // question #1
  {
    // question: 'I am task oriented in order to achieve certain goals.'
    question: '特定の目標を達成するためにタスク志向で取り組んでしまう方だ',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'J,Brown,D,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #2
  {
    // question: 'I get bored easily when disscussing abstract concepts.
    question: '抽象的な議論するとすぐに飽きてしまう',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Green,C',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'N,Green,C,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #3
  {
    // question: 'I like to try things out myself'
    question: '何事も自分自身で試してみる派だ',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Red,A',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'S,Red,A,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #4
  {
    // question: "I like to know where I'm going before I leave the house."
    question: "家を出る前に、先にどこに行くのか知りたい",
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'J,Brown,D,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #5
  {
    // question: 'I believe there is a logical explanation for everything.'
    question: '世の中のすべての物事は、ロジカルな説明で証明することができると思う',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Brown,C',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'T,Brown,C,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #6
  {
    // question: 'I tend to keep my social circle small.',
    question: '人間関係は小さく保ちたい派だ',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,C',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'I,Green,C,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #7
  {
    // question: 'I like to share my ideas with others.',
    question: '他の人とアイデアを共有することが好きだ',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'E,Blue,B,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #8
  {
    // question: 'I enjoy using social media.',
    question: 'SNSを使うことが好きです',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'E,Blue,B,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #9
  {
    // question: 'I always express concern for others when making decisions.',
    question: '決断を下す時、常に周りの顔色を気にしてしまう',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'F,Blue,B,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #10
  {
    // question: 'I like to try new things.',
    question: '新しいことにチャレンジすることが好きだ',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'P,Red,A,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #11
  {
    // question: 'I can easily adjust to a change in decision.',
    question: '決定が変わった後、すぐに適応することができる',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'P,Red,A,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #12
  {
    // question: 'I solve problems by working through facts until I understand the problem.',
    question: '問題を理解するためには、事実をしっかり踏まえて取り組むことが大切だと思う',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,C',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'S,Brown,C,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #13
  {
    // question: 'I rely on logic rather than intuition when making a decision.',
    question: '何かを決断する時、直感よりも理論を大切にしている',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Green,C',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'T,Green,C,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #14
  {
    // question: 'I make decisions with my heart.',
    question: '何か決断を下す時、心の声を重要視する派だ',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'F,Blue,B,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #15
  {
    // question: 'I learn best by seeing step by step instructions.',
    question: '何かを学習する際、一歩一歩順を追って学びたい派だ',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,D',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'S,Brown,D,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #16
  {
    // question: 'I sometimes move onto another task before completing my current one.',
    question: '現在取り掛かっているタスクが全て完了する前に、別のタスクに取りかかってしまう',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'P,Red,A,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #17
  {
    // question: 'I prefer a flexible and spontaneous way of life.',
    question: '人生において自発性と柔軟性が大切だと思う派だ',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'P,Red,A,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #18
  {
    // question: 'I like to keep my options open when making decisions.',
    question: '議論する時、自分の意見をオープンにするタイプだ',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Green,D',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'P,Green,D,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #19
  {
    // question: 'I feel comfortable in crowds.',
    question: '人ごみの中が苦手ではない',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'E,Blue,B,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #20
  {
    // question: 'I like to share my feelings with others.',
    question: '自分の思ったことを他の人に伝えることに躊躇しないことが多い',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'E,Blue,B,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #21
  {
    // question: 'I prefer to work/do right away rather than spend time making a plan.',
    question: '計画を立てることに時間を使うより、早く実行したいと思う派だ',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,A',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'S,Brown,A,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #22
  {
    // question: 'I know my priorities.',
    question: '自分の中で優先すべきことが分かっている',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,A',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'S,Brown,A,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #23
  {
    // question: 'I tend to work alone.',
    question: '1人でもくもくと作業することが好きだ',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,D',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'I,Green,D,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #24
  {
    // question: "I don't like going to parties.",
    question: '大勢の輪に加わることは得意ではない',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,C',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'I,Green,C,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #25
  {
    // question: 'I am in tune with my own emotions and let them guide me in life.',
    question: '自分の心の声を大切にして生きてきたと思う',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'F,Blue,B,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #26
  {
    // question: 'I rely on my intution and experience more than facts.',
    question: '事実よりも直感と経験を大切にしている',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Red,A',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'N,Red,A,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #27
  {
    // question: 'I like to think things through.',
    question: '考え事が好きだ',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Green,D',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'T,Green,D,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #28
  {
    // question: 'I am a visual learner.',
    question: '視覚を使った情報処理が得意だ',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Red,A',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'S,Red,A,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #29
  {
    // question: 'I think carefully before I make decisions.',
    question: '何か決断を下す前は注意深く考える方だ',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'J,Brown,D,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #30
  {
    // question: 'I feel uneasy if my actions disrupt harmony in my social circle.',
    question: '自分の行動が周りの輪を乱してしまった時、我慢ならない気持ちになってしまう',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'F,Blue,B,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #31
  {
    // question: 'I put my personal opinions aside in pursuit of fairness and justice.',
    question: '公平さを保つために、個人的な意見を脇に置いて考えられるタイプだ',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Brown,C',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'T,Brown,C,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #32
  {
    question: 'I tend to sit at the back or corner of the room.',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,C',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'I,Green,C,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #33
  {
    question: 'I like being the centre of attention.',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Red,B',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'E,Red,B,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #34
  {
    question: 'I solve problems by leaping between different ideas and possibilities.',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Green,C',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'N,Green,C,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #35
  {
    question: 'I like to complete my work before playing.',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Red,D',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'J,Red,D,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #36
  {
    question: "I don't let other people influence my thoughts or actions.",
    answers: [
      {
        // briggs, color, letter
        type: 'T,Red,A',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'T,Red,A,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #37
  {
    question: 'I use my sense of smell to help remember memories.',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Blue,D',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'N,Blue,D,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #38
  {
    question: 'I make decisions based on my emotions.',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'F,Blue,B,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #39
  {
    question: 'I need time alone to recharge.',
    answers: [
      {
        // briggs, color, letter
        type: 'I,Green,C',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'I,Green,C,No',
        content: '当てはまらない'
      }
    ]
  },
  // question #40
  {
    question: 'I like to keep my room organized and clean.',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: '当てはまる'
      },
      {
        type: ' ',
        content: 'どちらともいえない'
      },
      {
        type: 'J,Brown,D,No',
        content: '当てはまらない'
      }
    ]
  }
]

export default quizQuestions
