const quizData = [
    {
        question: "What year was the video that Technoblade used to fake his name uploaded in?",
        a: "2016",
        b: "2017",
        c: "2018",
        d: "2015",
        correct: "a",
    },
    {
        question: "When was the first video that Alex made posted on YouTube? (Accrose all his channels)",
        a: "August 15, 2009",
        b: "October 31, 2013",
        c: "July 5, 2018",
        d: "August 15, 2010",
        correct: "a",
    },
    {
        question: "How many potatos did The blad farm during The great potato war ?",
        a: "400 M",
        b: "500 M",
        c: "600 M",
        d: "300 M",
        correct: "b",
    },
    {
        question: "When was the First video That was posted on the Technoblade channel",
        a: "2013 techno vs mineplex owner.",
        b: "2014 proof i dont auto click.",
        c: "2013 beating a wither with leather armor. ",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "When did Technoblade upload Blitz - parody of blank space",
        a: "August 4, 2015",
        b: "August 8, 2014",
        c: "July 15, 2015",
        d: "June 16, 2015",
        correct: "d",
    },
    {
        question: "Techno was once sent to his elementary school’s main office for what offense?",
        a: "vandalism",
        b: "tickling",
        c: "petty theft",
        d: "he never went to the main office",
        correct: "c",
    },
    {
        question: "Techno was once assaulted by whom",
        a: "A chihuahua",
        b: "A Frenchman",
        c: "A 5 year old",
        d: "A Karen",
        correct: "b",
    },
    {
        question: "Techno ruled over what state during his time on SMP Earth?",
        a: "Business Bay",
        b: "Antarctic Empire",
        c: "Fruitopia",
        d: "All of them",
        correct: "c",
    },
    {
        question: "In Skeppy vs Technoblade (The Final Reckoning), Technoblade reveals that he majored in ___.",
        a: "Party games",
        b: "English",
        c: "Philosophy",
        d: "Spanish",
        correct: "a",
    },
    {
        question: "What is Technoblade's Zodiac sign?",
        a: "Cancer",
        b: "Sagittarius",
        c: "Gemini",
        d: "Leo",
        correct: "c",
    },
    {
        question: "Technoblade had the highest bedwars winstreak of how many wins in a row?",
        a: "1818",
        b: "1000",
        c: "1001",
        d: "1400",
        correct: "d",
    },
    {
        question: "When did Techno hit 10 million subs",
        a: "January 4th, 2022",
        b: "December 31st, 2021",
        c: "January 8th, 2022",
        d: "dJanuary 1th, 2022",
        correct: "b",
    },
    {
        question: "During the Jshclatt Speech What tool did The blade use to obliterate the entire server?",
        a: "Regular Crossbow",
        b: "TNT",
        c: "Firework loaded Crossbow",
        d: "Bow",
        correct: "c",
    },
    {
        question: "Which of the following is NOT the title of a video on the Technoblade channel? ",
        a: "Crying and Driving",
        b: "I Ruined Skeppy's Video",
        c: "The Fastest Man In Skyblock",
        d: "The Rarest Pet On Hypixel",
        correct: "a",
    },
    {
        question: "Technoblade used to run a YouTube channel by the name of StudioLORE, on which he played ROBLOX and what other video game?",
        a: "Club penguin",
        b: "Team fortress 2",
        c: "Halo 3",
        d: "Cs:Go",
        correct: "b",
    },
    {
        question: "Before technoblades unfortunate passing what was his most viewed video",
        a: "Skyblock: The Great Potato War",
        b: "Proof I don't auto click",
        c: "dog",
        d: "Avenging Ranboo (DreamSMP)",
        correct: "b",
    },
    {
        question: "For how much did Hypixel Techno the Pig rank if he won Minecraft mondays? ",
        a: "1 week",
        b: "3 days",
        c: "5 days",
        d: "2 weeks",
        correct: "a",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Restart</button>
           `
       }
    }
})