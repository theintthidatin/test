const quizData = [
    {
    question: "(1) 요리하는 사람이 뭐예요?",
    a: "의사",
    b: "요리사",
    c: "어머니",
    d: "아버지",
    correct: "b",
},

{
    question : "(2) 비가 내리고 있다. 유리는 무엇을 가져와야 합니까?",
    a: "모자",
    b: "셔츠",
    c: "우산",
    d: "가방",
    correct: "c",
},

{
    question : "(3) 미얀마로 이단어들의 발음를 씁세요.(위, 여, 의, 와)",
    a: "ဝှီး,ရော,အွီး,ဝါ",
    b: "ဝဲ,‌ယို,အဲ,အို",
    c: "အွတ်,အို,အွီး,ဝါ",
    d: "ဝှီး,ရော,အွတ်,ဝါ",
    correct: "a",
},
{
    question : "(4) Cucumber in Korean",
    a: "과자",
    b: "바나나",
    c: "오이",
    d: "아보카도",
    correct: "c",
},

{
    question : "(5) Road in Korean",
    a: "도로",
    b: "나비",
    c: "바다",
    d: "도시",
    correct: "a",
},

{
    question: "(6) 민호는 매일 노래를 부른다. 그가 원하는 것은 무엇입니까?",
    a: "나무",
    b: "가수",
    c: "아티스트",
    d: "배우",
    correct: "b",
},
{
    question: "(7) ချက်လက်မှတ်ကိုကိုရီးယားလိုရေးပါ။",
a: "수표",
b: " 바지",
c: "버스",
d: "소녀",
correct: "a",
},
{
    question: "(8) ရေချိုးသောအခါ ခန္ဓာကိုယ် မွှေးကြိုင်စေရန်သုံးသောအရာမှမည်သည်နည်း?",
a: "거리",
b: "가구",
c: "비누",
d: "덧신",
correct: "c"
},
{
    question: "(9) ကိုရီးယားလိုပြန်ရေးပါ။(နဖူး, မှန်, ရှပ်အကျာီ, ပြီးတော့)",
a: "모자, 바나나, 셔츠, 그리고",
b: "이마, 유리, 셔츠, 그리고",
c: "바다, 이마, 유리, 모자",
d: "아빠, 어빠, 어머니, 모자",
correct: "b",
},
{
    question: "(10) ဤစကားများရဲ့အသံထွက်ကို မြန်မာလိုပြန်ရေးပါ။(에, 화, 노, 시, 몌)",
a: "အယ်, ဟွာ, နို, ရှီ, မြယ်",
b: "အဲ, ဟွာ, နို, ရှီ, မြယ်",
c: "အဲ, ဟွာ, နို, ရှီ, မြဲ",
d: "အို, ဟို, နို, ရှီ, မြဲ",
correct: "c",
},
{
    question: "(11) မြေခွေးနှင့်တွန်းလှည်းကို ကိုရီးယားလိုရေးပါ။",
a: "나이, 도로",
b: "바다, 나라",
c: "여우, 우산",
d: "여우, 유모자",
correct: "d",
},
{
    question: "(12) 과일을 선택하세요",
a: "가루, 아보카도",
b: "아보카도, 바다",
c: "바나나, 아보카도",
d: "우산, 고추",
correct: "c",
},
{
    question: "(13) How do we call butterfly in Korean?",
a: "기미",
b: "나무",
c: "나비",
d: "소리",
correct:  "c",
},

];

const quiz= document.getElementById('quiz')
const answerEl = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

deselectAnswers()

const currentQuizData = quizData[currentQuiz]
questionEl.innerText = currentQuizData.question

a_text.innerText = currentQuizData.a
b_text.innerText = currentQuizData.b
c_text.innerText = currentQuizData.c
d_text.innerText = currentQuizData.d
}

function deselectAnswers(){

    answerEl.forEach(answerEl => answerEl.checked = false)

}

function getselected (){

    let answer
    answerEl.forEach(answerEl =>  {
if (answerEl.checked){
    answer = answerEl.id
}
    })
    return answer
}

submitBtn.addEventListener('click',()=>{
const answer = getselected()
if (answer){
    if (answer === quizData[currentQuiz].correct){
score = score + 2
    }
    currentQuiz++
}
if (currentQuiz < quizData.length){
    loadQuiz()
}else{
    quiz.innerHTML = `
    <h2>Your score is ${score}/26 and try better next time.</h2>
    
    `
}

})