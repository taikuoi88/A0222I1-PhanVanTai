var mon = document.getElementById("month");

function result() {
    // alert(1)
    var m = Number(mon.value);
    switch (m) {
        // case 2:
        //     var year = Number(y.value);
        //     if (y % 4 == 0) {
        //         alert('28 ngay');

        //     } else(29 ngay);
        // alert('thang' + m + 'có 30 ngày');
        // break;
        case 4:
        case 6:
        case 9:
        case 11:
            alert('thang' + m + 'có 30 ngày');
        case 2:
            alert('năm nhuận thì 29 ngày còn không nhuận thì 28 ngày');
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert('thang' + m + 'co 31 ngay');
            break;
        default:
            alert('undefined');


    }
    // var mon = Number(mon.value);
}