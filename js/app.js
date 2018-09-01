// var budget = prompt('あなたの所持金を入力してください');
// budget = parseFloat(budget);

// var isHungry = confirm('お腹はすいていますか？');

// if(budget >= 1500 && isHungry){
//     alert('ピザを勝手に注文しました。');
// }
// else if(budget >= 500){
//     alert('あなたの大好きなポテトを注文しておきました。');
// }
// else{
//     alert('節約して節制して過ごしましょう。');
// }

// alert(' 4年後は　'+ (budget + 4) + '歳ですね。');

//じゃんけんの手を番号に設定
const gu = 1;
const choki = 2;
const pa = 3;

//じゃんけんの入力ダイアログボックスを表示
let hum  = prompt('半角英数字で入力して下さい。\n' + gu + ':グー\n' + choki + ':チョキ\n' + pa +';パー');
hum = parseInt(hum,10);

//入力値のチェック
if(hum!==gu && hum !== choki && hum !== pa){
    alert('入力値がうまく認識されませんでした。ブラウザの再読み込みをして下さい。');
}
else{
    //コンピューターの手を決める
    var com = Math.floor(Math.random()* 3) + 1; 
    //コンピュータの手の名前
    var comHandName = '';
    switch (com){
    case gu :
        comHandName = 'ぐー';
        break;
    case choki:
        comHandName = 'チョキ';
        break;
    case pa:
        comHandName = 'パー';
        break;
    }
    
}

var msgResult = '';
if (com === hum){
    msgResult = 'あいこでした';
}
else if ((com === gu && hum === pa)||(com === choki && hum === gu)||(com === pa && hum === choki)) {
    msgResult = 'あなたが勝ちました';
}
else {
    msgResult = 'あなたの負けです';
}

//最終的な結果表示
msgResult = msgResult  + '\n相手は' + comHandName + 'を出しました。'
alert(msgResult);