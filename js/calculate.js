
// テキストが空ではないかを判定
function checkEmpty() {
    var inputWeight = document.getElementById("weight").value;
    var inputHeight = document.getElementById("height").value;
    var inputAge = document.getElementById("age").value;

    if (!inputWeight.trim() || !inputHeight.trim() || !inputAge.trim()) {
        alert("入力不備があります");
        return false;
    } else {
        check();
    }
}

//数値が入っているかをチェック
function check() {
    var inputWeight = document.getElementById("weight").value;
    var inputHeight = document.getElementById("height").value;
    var inputAge = document.getElementById("age").value;

    if (!isNaN(inputWeight || inputHeight || inputAge)) {
        calculate();
    } else {
        alert("数値以外が入力されています");
        return false;
    }
}

// 計算を行う
function calculate() {

    var weight = document.getElementById("weight");
    var height = document.getElementById("height");
    var age = document.getElementById("age");

    var weightValue = weight.value;
    var heightValue = height.value;
    var ageValue = age.value;

    var maleBasicEnergy;
    var femaleBasicEnergy;

    var maleResultEnergy;
    var femaleResultEnergy;

    var selectedSex;
    var elements = document.getElementsByName("sex");

    //選択された性別を判定
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            console.log("選択された値：", elements[i].value);
            selectedSex = elements[i].value
        }
    }

    // 男性か女性かによって計算を行う
    if (selectedSex == "male") {
        const maleResult = (13.397 * weightValue) + (4.779 * heightValue) - (5.677 * ageValue) + 88.362
        console.log(maleResult);
        const resultMessage = "あなたの基礎代謝量は「" + maleResult + "」(kcal/日)です。";
        document.getElementById("user-basicEnergy").innerHTML = resultMessage;
        maleBasicEnergy = maleResult
    } else {
        var femaleResult = (9.247 * weightValue) + (3.098 * heightValue) - (4.33 * ageValue) + 447.593
        console.log(femaleResult);
        const resultMessage = "あなたの基礎代謝量は「" + femaleResult + "」(kcal/日)です。";
        document.getElementById("user-basicEnergy").innerHTML = resultMessage;
        femaleBasicEnergy = femaleResult
    }

    var selectedLevel;
    var levelElements = document.getElementsByName("level");

    //選択された身体活動レベルの判定
    for (var i = 0; i < levelElements.length; i++) {
        if (levelElements[i].checked) {
            console.log("選択された値：", levelElements[i].value);
            selectedLevel = levelElements[i].value
        }
    }

    // それぞれの身体活動レベルによって定数を変えて最終的な結果を求める
    switch (selectedLevel) {
        case "level1":
            maleResultEnergy = 1.5 * maleBasicEnergy;
            femaleResultEnergy = 1.5 * femaleBasicEnergy
            break;

        case "level2":
            maleResultEnergy = 1.75 * maleBasicEnergy;
            femaleResultEnergy = 1.75 * femaleBasicEnergy;
            break;

        case "level3":
            maleResultEnergy = 2.0 * maleBasicEnergy;
            femaleResultEnergy = 2.0 * femaleBasicEnergy;
            break;
        default:
            break;
    }

    // 最終的な結果を性別ごとに表示するï
    if (selectedSex == "male") {

        const resultMessage = "あなたの1日に必要なエネルギーは「" + maleResultEnergy + "」(kcal/日)です。"
        document.getElementById("user-Result").innerHTML = resultMessage;

    } else {

        const resultMessage = "あなたの1日に必要なエネルギーは「" + femaleResultEnergy + "」(kcal/日)です。"
        document.getElementById("user-Result").innerHTML = resultMessage;
    }
}

// ページをリロードして入力した値を全てリセット
function reset() {

    document.location.reload();

}