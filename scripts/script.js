// Первые три строки - начальные параметры игры.
let min_take = 1;
let max_take = 3;
let number_of_candies = 10;

playerVsComputer(min_take, max_take, number_of_candies);

function takeInput(min_num, max_num, num_of_cand) { //Получение данных от игрока, сколько конфет берет
    while (true) {
        let player_answer = prompt(`Осталось конфет: ${num_of_cand}. Сколько конфет возьмешь? `);
        player_answer = +player_answer;
        if (isNaN(player_answer)) {
            alert('Некорректный ввод. Не похоже, что Вы ввели число.');
            continue;
        }
        player_answer = Number(player_answer);
        if (min_num <= player_answer && player_answer <= max_num) {
            if (player_answer <= num_of_cand) {
                return player_answer;
            } else {
                alert('Осталось меньше конфет, чем ты хочешь взять!');
                continue;
            }
        } else {
            alert(`Некорректный ввод. Введите число от ${min_num} до ${max_num}.`);
        }
    }
}

function getRandomInt(min, max) { //Получение случайного целого числа.
    min = Math.ceil(min);
    max = Math.floor(max + 1);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function computerTurn(min_num, max_num, num_of_cand) { //Логика хода компьютера.
    let best_turn = num_of_cand % (max_num + 1);
    if (best_turn == 0) {
        best_turn = getRandomInt(min_num, max_num);
    }
    alert(`Компьютер взял конфет: ${best_turn}`);
    return best_turn;
}

function playerVsComputer(min_take, max_take, number_of_candies) { //Логика игры.
    let move = confirm(`Всего конфет: ${number_of_candies}. Хотите ходить первым?`);
    while (number_of_candies > 0) {
        if (move) {
            let player_take = takeInput(min_take, max_take, number_of_candies);
            number_of_candies -= player_take;
            if (number_of_candies == 0) {
                alert('Ты победил! Ура!');
                playAgain();
                break;
            }
            move = false;
            continue;
        } else {
            let computer_take = computerTurn(min_take, max_take, number_of_candies);
            number_of_candies -= computer_take;
            if (number_of_candies == 0) {
                alert('Победил компьютер! ');
                playAgain();
                break;
            }
            move = true;
        }
    }
}

function playAgain() { //Запрос после окончания игры.
    let agree = confirm('Хотите играть ещё?');
    if (agree) {
        number_of_candies = 10;
        playerVsComputer(min_take, max_take, number_of_candies);
    } else {
        alert('Жаль :( До новых встреч!');
    }
}