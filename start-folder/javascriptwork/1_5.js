
// 入力欄を取得
const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const operator = document.getElementById("operator");

// 結果表示欄を取得
const calculation = document.getElementById("calculation");
const answer = document.getElementById("answer");

// 計算する関数
function calculate() {

    // 入力値を取得
    const num1 = value1.value;
    const num2 = value2.value;
    const op = operator.value;

    // 入力チェック
    if (num1 === "" || num2 === "") {
        calculation.textContent = "";
        answer.textContent = "両方の数値を入力してください";
        answer.classList.add("error");
        return;
    }

    // 数値に変換
    const n1 = Number(num1);
    const n2 = Number(num2);

    let result;
    let symbol;

    // 演算子によって計算
    switch (op) {
        case "+":
            result = n1 + n2;
            symbol = "+";
            break;

        case "-":
            result = n1 - n2;
            symbol = "-";
            break;

        case "*":
            result = n1 * n2;
            symbol = "×";
            break;

        case "/":
            symbol = "÷";

            if (n2 === 0) {
                calculation.textContent = `${n1} ÷ ${n2}`;
                answer.textContent = "0で割る事はできません。";
                answer.classList.add("error");
                return;
            }

            result = n1 / n2;
            break;
    }

    // 計算式を表示
    calculation.textContent = `${n1} ${symbol} ${n2}`;

    // 計算結果を表示
    answer.textContent = `結果：${result}`;

    // エラー表示を解除
    answer.classList.remove("error");
}

// 入力値が変更されたら計算
value1.addEventListener("input", calculate);
value2.addEventListener("input", calculate);
operator.addEventListener("change", calculate);

// 初期表示
calculate();
