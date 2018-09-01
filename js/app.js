//体重の数値を得る
var weight;
weight = prompt('BMIを測定します。まずはあなたの体重（kg）を入力してください');
//身長の数値を得る
var height;
height = prompt('BMIを測定します。まずはあなたの身長（m）を入力してください')
//体重と身長からBMI数値を計算して、警告ダイアログをだす。 
var bmi = weight / (height * height);
var message = 'あなたのBMI数値は「' + bmi + '」です';
alert(message);