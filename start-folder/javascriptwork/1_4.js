const output = document.getElementById("output");

let wantApple = 4;
let stockApple = 3;

if (wantApple <= stockApple) {
  output.textContent += "希望通りカートに入れます。\n";
} else {
  output.textContent += "在庫が足りません。在庫分だけカートに入れます。\n";
}

let i = 0;
while (i < stockApple) {
  output.textContent += "りんごをカートに追加しました\n";
  i++;
}

for (let j = 1; j <= stockApple; j++) {
  output.textContent += `リンゴを買うのは${j}回目の処理です\n`;
}
