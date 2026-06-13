// Cкопіюй код з минулого уроку
document.addEventListener('DOMContentLoaded', () => {

    const questions = [
        {
            question: "Яка мінімальна кількість блоків обсидіану потрібна для створення робочої рамки порталу в Незер, якщо не заповнювати кути?",
            answers: ["12", "14", "8", "10"],
            correct: 3
        },
       { 
             question: "Який моб стає агресивним і починає атакувати, якщо гравець подивиться йому прямо в очі?",
            answers: ["Скелет", "Кріпер", "Ендермен", "Зомбі"],
            correct: 2
       },
        {
         question: "Що потрібно додати до алмазного предмета на столі коваля, щоб покращити його до незеритового?",
            answers: ["Вогняний порошок", "Алмазний блок", "Незеритовий злиток", "Золотивий злиток"],
            correct: 2
        },
        { question: "Який блок знаходиться на самому дні звичайного світу і його неможливо зламати в режимі виживання?",
            answers: ["Обсидіан", "Бедрок", "Стародавні уламки", "Глибнний сланець"],
            correct: 1
            
        },
   {
        question: "Який інструмент потрібен для того, щоб зняти шар воску з мідного блоку, не руйнуючи його?",
        answers: ["Кирка", "Лопата", "Сокира", "Мотига"],
        correct: 2
    },
    {
        question: "Скільки всього шматочків заліза (Iron Nuggets) потрібно, щоб скрафтити один залізний злиток?",
        answers: ["4", "9", "8", "16"],
        correct: 1
    },
    {
        question: "Яка тварина в Minecraft лякає фантомів і змушує їх триматися від гравця подалі?",
        answers: ["Вовк", "Папуга", "Кіт", "Аксолотль"],
        correct: 2
    },
    {
        question: "Яка комбінація клавіш у Java Edition повністю перезавантажує всі видимі чанки?",
        answers: ["F3 + A", "F3 + T", "F3 + G", "F3 + H"],
        correct: 0
    },
    {
        question: "Що станеться зі звичайним селянином (Villager), якщо в нього влучить блискавка?",
        answers: ["Він просто загине", "Він стане зомбі-селянином", "Він перетвориться на відьму", "Він стане викликачем"],
        correct: 2
    },
    {
        question: "Який максимальний рівень зачарування 'Ефективність' можна отримати на ковадлі без читів?",
        answers: ["IV (4)", "V (5)", "VI (6)", "III (3)"],
        correct: 1
    },
    {
        question: "Який з цих блоків Дракон Края НЕ може зруйнувати, коли пролітає крізь нього?",
        answers: ["Плачучий обсидіан", "Діамантовий блок", "Залізна решітка", "Золотий блок"],
        correct: 0
    }
    ];

    // Створення елементів
    const startScreen = document.querySelector('#start-screen');
    const quizScreen = document.querySelector('#quiz-screen');
    const resultScreen = document.querySelector('#result-screen');
    const startBtn = document.querySelector('#start-btn');
    const restartBtn = document.querySelector('#restart-btn');
    const resultText = document.querySelector('.result-text');
    const questionText = document.querySelector('#question-text');
    const answersContainer = document.querySelector('#answers-container');

    let questionIndex = 0;
    let score = 0;
    let timer = 15; // Таймер на 15 секунд
    const timerDisplay = document.querySelector('#timer');
    let interval; // Змінна для зберігання інтервалу

    // Функція для відображення запитання
    function showQuestion(question) {

        clearInterval(interval); // Скидаємо таймер
        startTimer();

        answersContainer.innerHTML = '';
        questionText.innerText = question.question;
        for (let i = 0; i < question.answers.length; i++) {
            const button = document.createElement('button');
            button.innerText = question.answers[i];
            button.classList.add('answer-btn');
            button.addEventListener('click', () => checkAnswer(button, i));
            answersContainer.appendChild(button);

        }
    }
    showQuestion(questions[questionIndex]);
    // Завдання 5 - Функція для переходу до наступного запитання
    function nextQuestion() {
        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestion(questions[questionIndex]);
        } else {
            showResult();
        }
    }
    // Завдання 4 - Перевірка відповіді
    function checkAnswer(button, i) {
        if (i == questions[questionIndex].correct) {
            score++;
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
        // Відключення кнопок після вибору відповіді
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.disabled = true;
        })
        // Таймер на 1 секунду
        setTimeout(nextQuestion, 1000);
    }


    // Завдання 7 - Відображення результату і статистики
    function showResult() {
        const accuracy = Math.round((score / questions.length) * 100);
        resultText.innerText = `Твій результат: ${score}/${questions.length} (${accuracy}%)`;
        quizScreen.classList.add('hide');
        resultScreen.classList.remove('hide');
        const finalScore = document.querySelector('#final-score');
        finalScore.innerText = score;
    }
    // Завдання 3 - Керування екранами (JS)
    function startGame() {
        startScreen.classList.add('hide');
        resultScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
        questionIndex = 0;
        score = 0;
        showQuestion(questions[questionIndex]);
    }

    startBtn.addEventListener('click', startGame);


    // Завдання 6 - Таймер
    function startTimer() {
        timer = 15;
        timerDisplay.innerText = `Час: ${timer}`;
        interval = setInterval(() => {
            timer--;
            timerDisplay.innerText = `Час: ${timer}`;
            if (timer <= 0) {
                clearInterval(interval);
                nextQuestion();
            }
        }, 1000);
    }

    restartBtn.addEventListener('click', () => {
        startGame();
        resultScreen.classList.add('hide');
    });

});



