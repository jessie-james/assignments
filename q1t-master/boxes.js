$(document).ready(function () {
    var whichColor = '';
    var rows = 10;
    var columns = 12;
    var container = '';
    for (var x = 0; x < rows; x++) {
        container += '<div class="row">';
        for (var y = 0; y < columns; y++) {
            container += '<div class="box col-xs-3 col-sm-1"></div>';
        }
        container += '</div>';
    }

    $('.container').append(container);

    $("#pink-box").click(function () {
        whichColor = 'pink';
    });

    $("#blue-box").click(function () {
        whichColor = 'blue';
    });

    $("#dark-pink-box").click(function () {
        whichColor = 'deeppink';
    });

    $("#orange-box").click(function () {
        whichColor = 'orange';
    });

    $("#green-box").click(function () {
        whichColor = 'green';
    });

    $("#white-box").click(function () {
        whichColor = 'white';
    });




    $('.box').click(function () {
        $(this).css('backgroundColor', whichColor)
    });


    window.addEventListener("keypress", checkKeyPressed);

    function checkKeyPressed(key) {
        console.log(key);
        if (key.keyCode === 49) {
            whichColor = 'pink'
        } else if (key.keyCode === 50) {
            whichColor = 'blue'
        } else if (key.keyCode === 51) {
            whichColor = 'deeppink'
        } else if (key.keyCode === 52) {
            whichColor = 'orange'
        } else if (key.keyCode === 53) {
            whichColor = 'green'
        } else if (key.keyCode === 48) {
            whichColor = 'white'
        }
    }
});
