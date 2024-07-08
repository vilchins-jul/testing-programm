const quizData = {
    "questions": [
        {
            "question": "Что такое JSON?",
            "choices": ["JavaScript Object Notation", "Java Syntax On Node", "Java Simple Object Notation","123","456"],
            "correctAnswer": 0
        },
        {
            "question": "Какая функция используется для преобразования JSON в объект JavaScript?",
            "choices": ["JSON.stringify()", "JSON.parse()", "JSON.convert()"],
            "correctAnswer": 1
        },
        {
            "question": "Что из перечисленного является типом данных в JavaScript?",
            "choices": ["String", "Number", "All of the above"],
            "correctAnswer": 2
        },
        {
            "question": "Какой метод используется для добавления элемента в конец массива в JavaScript?",
            "choices": ["push()", "pop()", "shift()"],
            "correctAnswer": 0
        },
        {
            "question": "Какое ключевое слово используется для объявления переменной в JavaScript?",
            "choices": ["var", "let", "const"],
            "correctAnswer": 0
        },
        {
            "question": "Что возвращает оператор typeof в JavaScript?",
            "choices": ["Тип переменной", "Значение переменной", "Имя переменной"],
            "correctAnswer": 0
        },
        {
            "question": "Что такое NaN в JavaScript?",
            "choices": ["Not a Number", "Not a Null", "Null and Nothing"],
            "correctAnswer": 0
        },
        {
            "question": "Какой метод используется для объединения двух или более массивов в JavaScript?",
            "choices": ["concat()", "join()", "combine()"],
            "correctAnswer": 0
        },
        {
            "question": "Что из перечисленного используется для объявления функции в JavaScript?",
            "choices": ["function", "def", "func"],
            "correctAnswer": 0
        },
        {
            "question": "Что такое замыкание в JavaScript?",
            "choices": ["Функция внутри функции", "Функция, имеющая доступ к переменным из внешней функции", "Функция, вызывающая другую функцию"],
            "correctAnswer": 1
        },
        {
            "question": "Какой метод используется для удаления последнего элемента из массива в JavaScript?",
            "choices": ["pop()", "push()", "delete()"],
            "correctAnswer": 0
        },
        {
            "question": "Что из перечисленного является логическим оператором в JavaScript?",
            "choices": ["&&", "||", "Все вышеперечисленное"],
            "correctAnswer": 2
        },
        {
            "question": "Какой метод преобразует строку в верхний регистр в JavaScript?",
            "choices": ["toUpperCase()", "toLowerCase()", "toCapitalize()"],
            "correctAnswer": 0
        },
        {
            "question": "Какой метод проверяет наличие подстроки в строке в JavaScript?",
            "choices": ["includes()", "indexOf()", "search()"],
            "correctAnswer": 0
        },
        {
            "question": "Что означает DOM в контексте веб-разработки?",
            "choices": ["Document Object Model", "Data Object Model", "Document Orientation Model"],
            "correctAnswer": 0
        },
        {
            "question": "Какой метод используется для остановки интервала, установленного с помощью setInterval в JavaScript?",
            "choices": ["clearInterval()", "stopInterval()", "pauseInterval()"],
            "correctAnswer": 0
        },
        {
            "question": "Какой метод используется для преобразования JSON-объекта в строку в JavaScript?",
            "choices": ["JSON.stringify()", "JSON.parse()", "JSON.convert()"],
            "correctAnswer": 0
        },
        {
            "question": "Какой оператор используется для строгого равенства в JavaScript?",
            "choices": ["==", "===", "="],
            "correctAnswer": 1
        },
        {
            "question": "Какой метод используется для добавления одного или нескольких элементов в начало массива в JavaScript?",
            "choices": ["unshift()", "shift()", "push()"],
            "correctAnswer": 0
        },
        {
            "question": "Что делает оператор '===' в JavaScript?",
            "choices": ["Сравнивает значения и типы", "Сравнивает только значения", "Присваивает значение"],
            "correctAnswer": 0
        }
    ]
};

function loadQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    quizData.questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        
        const questionTitle = document.createElement('h6');
        questionTitle.textContent = q.question;
        questionDiv.appendChild(questionTitle);
        
        const choicesList = document.createElement('ul');
        choicesList.classList.add('choices');
        
        q.choices.forEach((choice, i) => {
            const choiceItem = document.createElement('li');
            const choiceInput = document.createElement('input');
            choiceInput.type = 'radio';
            choiceInput.name = `question${index}`;
            choiceInput.value = i;
            choiceItem.appendChild(choiceInput);
            
            const choiceLabel = document.createElement('label');
            choiceLabel.textContent = choice;
            choiceItem.appendChild(choiceLabel);
            
            choicesList.appendChild(choiceItem);
        });
        
        questionDiv.appendChild(choicesList);
        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    const resultContainer = document.getElementById('result');
    let score = 0;

    quizData.questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value, 10) === q.correctAnswer) {
            score++;
        }
    });

    const totalQuestions = quizData.questions.length;
    const percentage = (score / totalQuestions) * 100;

    resultContainer.innerHTML = `Вы правильно ответили на ${score} из ${totalQuestions} вопросов. Ваш результат: ${percentage.toFixed(2)}%.`;
    openModal();
}

function highlightAnswers() {
    quizData.questions.forEach((q, index) => {
        const correctAnswerIndex = q.correctAnswer;
        const correctChoice = document.querySelector(`input[name="question${index}"][value="${correctAnswerIndex}"]`);
        if (correctChoice) {
            correctChoice.parentElement.classList.add('correct-answer');
        }
    });
}

function openModal() {
    document.getElementById('resultModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('resultModal').style.display = 'none';
}

loadQuiz();