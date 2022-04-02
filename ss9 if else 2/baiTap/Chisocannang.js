var heightX = document.getElementById('height');
var weightX = document.getElementById('weight');
var calculate = document.getElementById('cal');

function calculate(height, weight) {
    if (height <= 0 || weight <= 0) {
        alert('chỉ số cân nặng gì ngáo thế bạn');
        height = height / 100;
        let bmi = weight / Math.pow(height, 2);
        return bmi;
    }
    cal.onclick = function result() {
        var height = heightX.value;
        var weight = weightX.value;
        var bmi = calculate(height, weight);
        if (bmi < 18.5) {
            alert(' gầy thế, ăn nhiều vào fen ơi');
        } else if (bmi >= 18.5 && bmi < 25) {
            alert(' ok, bình thường');
        } else if (bmi >= 25 && bmi < 30) {
            alert(' hơi béo á, tập thể dục đi ');
        } else if (bmi >= 30) {
            alert(' ối giồi ôi béo quá rồi');
        }
    }