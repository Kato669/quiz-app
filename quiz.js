const qtns = [
    {
        question: 'what is your name?',
        a: 'kato james',
        b: 'kizza william',
        c: 'waswa roger',
        d: 'mirugwe alex',
        correct: 'a',
    },
    {
        question: 'what is the capital city of Uganda?',
        a: 'Masaka',
        b: 'kampala',
        c: 'mbale',
        d: 'arua',
        correct: 'b',
    },
    {
        question: 'who is the leader of national unity platform?',
        a: 'Joel Ssenyonyi',
        b: 'David Lewis Rubongoya',
        c: 'Robert Kyagulanyi Ssentamu',
        d: 'Mathias Mpuga',
        correct: 'c',
    },
    {
        question: 'what is your mother\'s name?',
        a: 'nampijja margaret',
        b: 'namirugwe resty',
        c: 'nannozi shadia',
        d: 'nakyanzi allen',
        correct: 'a',
    },
    {
        question: 'what is NUP in full?',
        a: 'national unit party',
        b: 'native united party',
        c: 'national union party',
        d: 'national unit platform',
        correct: 'd',
    },
    {
        question: 'where are the headquaters of NUP?',
        a: 'magere',
        b: 'kamwokya',
        c: 'munyonyi',
        d: 'ntebe',
        correct: 'b',
    }
]
let question = document.querySelector('.question');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let answer4 = document.getElementById('answer4');
let btn = document.getElementById('btn')
let answerEls = document.querySelectorAll('.answer')
let container = document.querySelector('.container')

let score = 0
let qtnIterate = 0
loadquiz();

function loadquiz(){
    getdeselected()
    let specificQtn = qtns[qtnIterate];
    questionEl = specificQtn.question;
    answerEl1 = specificQtn.a;
    answerEl2 = specificQtn.b;
    answerEl3 = specificQtn.c;
    answerEl4 = specificQtn.d;

   question.innerHTML = questionEl;
   answer1.innerHTML = answerEl1;
   answer2.innerHTML = answerEl2;
   answer3.innerHTML = answerEl3
   answer4.innerHTML = answerEl4
}
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}
function getdeselected(){
    answerEls.forEach((answered)=>{
        answered.checked = false
    })
}
btn.addEventListener('click',()=>{
    let answered = getSelected()
    if(answered){
        let correctAns = qtns[qtnIterate].correct;
        if(answered ===correctAns){
            score++;
        }
        qtnIterate++
        if(qtnIterate< qtns.length){
            loadquiz()
           
        }else
        {
            container.innerHTML = `<h1> you have answered ${score} out of ${qtns.length} </h1>
            
            <button onclick='location.reload()'>reload</button>`;
        }
    }
})




