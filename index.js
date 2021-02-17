const quiz =[
  {
   question:'炭次郎が町に出て売り歩いていたものは何?',
   answers: [
    '木材',
    '薬',
    '炭',
    '野菜'
  ],
   correct:'炭'
  },{
    question:'沼鬼の癖はどれ',
    answers: [
     '光物収集',
     'ナンパ',
     '生身の女を集める',
     '殺した女の所持品収集'
   ],
    correct:'殺した女の所持品収集'
  },{
    question:'珠世が禰豆子を人間に戻すために炭次郎に持ってきてほしいと頼んだものは？',
    answers: [
     '無惨の身体の一部',
     '無惨の血',
     '鬼の血',
     '鬼の身体の一部'
   ],
    correct:'鬼の血'
  } ,{
    question:'怪我を癒すために炭次郎が寄った屋敷はどれ',
    answers: [
     '藤の花の屋敷',
     '薔薇の花の屋敷',
     '紫陽花の花の屋敷',
     '菫の花の屋敷'
   ],
    correct:'藤の花の屋敷'
  },{
    question:'那田蜘蛛山で遭遇した下弦の伍：累はなぜ鬼になった？',
    answers: [
     '家族が欲しかった',
     '病弱ゆえ強くなりたかった',
     '復習のため',
     '圧倒的な力が欲しかった'
   ],
    correct:'病弱ゆえ強くなりたかった'
  },{ 
    question:'柱合裁判にて禰豆子はなぜ柱全員に認められた？',
    answers: [
    '容姿端麗だから',
    '炭次郎に忠実だから',
    '血を見ても騒がなかったから',
    '産屋敷に好かれたから'
 ],
   correct:'血を見ても騒がなかったから'
 },{
    question:'修行を終えた炭次郎たちが向かった先は？',
    answers: [
     '無限列車',
     '煉獄さんの元',
     '無惨の元',
     '無限城'
   ],
    correct:'無限列車'
  },{
    question:'魘夢の能力で眠らされた者が現実に戻る方法とは？',
    answers: [
     '時間が経ったら戻る',
     '夢の中で死ぬ',
     '夢の中で現実に戻りたいと唱える',
     '夢に出てくる人をすべて殺す'
   ],
    correct:'夢の中で死ぬ'
  },{
    question:'猗窩座が煉獄さんに言った言葉とは？',
    answers: [
     'お前はもう死んでいる',
     '人間はみじめだ',
     '鬼はいいぞ、死なない',
     '鬼にならないか？'
   ],
    correct:'鬼にならないか？'
  },{
    question:'宇随天元は何柱？',
    answers: [
     '音',
     '風',
     '雷',
     '煙'
   ],
    correct:'音'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength =$button.length;

const setupQuiz =() =>{
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
   $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
   buttonIndex++;
 }
}
setupQuiz();

const clickHandler = (e) =>{
   if(quiz[quizIndex].correct === e.target.textContent){
    alert('正解！');
    score++;
  }else{
    alert('不正解！');
  }

  quizIndex++;
  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    alert('終了！あなたの正解数は' + score +'/' + quizLength + 'です');
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}



