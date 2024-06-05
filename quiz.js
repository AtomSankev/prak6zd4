document.getElementById('submitBtn').addEventListener('click', checkAnswer);

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const result = document.getElementById('result');
    
    if (!selectedAnswer) {
        result.textContent = 'Будь ласка, виберіть відповідь.';
        result.style.color = 'red';
        return;
    }

    if (selectedAnswer.value === '52') {
        result.textContent = 'Правильна відповідь!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Неправильна відповідь. Спробуйте ще раз.';
        result.style.color = 'red';
    }
}
