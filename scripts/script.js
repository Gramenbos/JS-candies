let min_take = 1;
let max_take = 3;
let number_of_candies = 10;

playerVsComputer(min_take, max_take, number_of_candies);

function drawCandies(count) {
    alert(`Осталось конфет: ${count}`);
}

function takeInput(min_num, max_num, num_of_cand) {
    while (true) {
        let player_answer = prompt('Сколько конфет возьмешь? ');
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function computerTurn(min_num, max_num, num_of_cand) {
    let best_turn = num_of_cand % (max_num + 1);
    if (best_turn == 0) {
        best_turn = getRandomInt(min_num, max_num + 1);
    }
    alert(`Компьютер взял конфет: ${best_turn}`);
    return best_turn;
}

function playerVsComputer(min_take, max_take, number_of_candies) {
    drawCandies(number_of_candies);
    let move = confirm('Хотите ходить первым?');
    while (number_of_candies > 0) {
        if (move) {
            let player_take = takeInput(min_take, max_take, number_of_candies);
            number_of_candies -= player_take;
            if (number_of_candies == 0) {
                alert('Ты победил! Ура!');
                break;
            }
            drawCandies(number_of_candies);
            move = false;
            continue;
        } else {
            let computer_take = computerTurn(min_take, max_take, number_of_candies);
            number_of_candies -= computer_take;
            if (number_of_candies == 0) {
                alert('Победил компьютер! ');
                break;
            }
            drawCandies(number_of_candies);
            move = true;
        }
    }
}
