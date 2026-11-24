
// 入力欄と表示欄を取得
const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const operator = document.getElementById("operator");

const calculation = document.getElementById("calculation");
const answer = document.getElementById("answer");

// 計算処理
function calculate() {

    // 入力値を取得
    const num1 = value1.value;
    const num2 = value2.value;
    const op = operator.value;

    // 入力されていない場合
    if (num1 === "" || num2 === "") {
        calculation.textContent = "";
        answer.textContent = "両方の数値を入力してください";
        answer.classList.add("error");
        return;
    }

    // 数値に変換
    const number1 = Number(num1);
    const number2 = Number(num2);

    let result;
    let symbol;

    // 演算子によって計算方法を変更
    switch (op) {

        case "+":
            result = number1 + number2;
            symbol = "+";
            break;

        case "-":
            result = number1 - number2;
            symbol = "-";
            break;

        case "*":
            result = number1 * number2;
            symbol = "×";
            break;

        case "/":
            symbol = "÷";

            // 0で割る場合
            if (number2 === 0) {
                calculation.textContent = `${number1} ÷ 0`;
                answer.textContent = "0で割る事はできません。";
                answer.classList.add("error");
                return;
            }

            result = number1 / number2;
            break;
    }

    // 計算式と結果を表示
    calculation.textContent =
        `${number1} ${symbol} ${number2} =`;

    answer.textContent = `結果：${result}`;

    answer.classList.remove("error");
}

// 値や演算子が変更されたら計算する
value1.addEventListener("input", calculate);
value2.addEventListener("input", calculate);
operator.addEventListener("change", calculate);

// 最初の画面を表示
calculate();
