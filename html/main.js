(() => {
    window.scrollTo(0, 0)
    document.getElementById('load_screen').style.opacity = 1;
    document.getElementById('home_screen').style.display = 'none';
    document.getElementById('outer_wrap').style.display = 'none';
    hideControls();
    setTimeout(() => {
        document.getElementById('load_screen').style.display = 'none';
        document.getElementById('load_screen').style.opacity = 0;
        document.getElementById('load_screen').style.height = 0;
        document.getElementById('load_screen1').style.opacity = 0;
        document.getElementById('load_screen1').style.height = 0;
        document.getElementById('home_screen').style.display = 'block';
        document.getElementById('outer_wrap').style.display = 'none';
        showControls();
        setTimeout(() => {
            hideControls();
        }, 1000);
    }, 3000);
})()

// ? Loader script functions

var num = 0;
window.setInterval(function () {
    num++;
    var classes = ['', 'out', 'ready'];
    $('#watch').removeClass();
    $('#watch').addClass(classes[num % 3])
    $('#phone').removeClass();
    $('#phone').addClass(classes[(num + 2) % 3]);
    $('#laptop').removeClass();
    $('#laptop').addClass(classes[(num + 1) % 3]);
    $('.quote span').removeClass();
    $('.quote span:nth-child(' + (num % 3 + 1) + ')').addClass('highlight');
}, 600)

// ? Loader script functions


// ? Home script functions

phone = document.getElementById("phone_1"),
    iframe = document.getElementById("frame_1")


function viewFull () {
    document.getElementById('inner_wrap').style.display = "none";
    document.getElementById('outer_wrap').style.display = "block";
    document.getElementById('atm-phone-controls').style.opacity = 1;
    setTimeout(() => {
        document.getElementById('atm-phone-controls').style.opacity = 0;
    }, 1000);
}

function viewPhone () {
    document.getElementById('inner_wrap').style.display = "block";
    document.getElementById('outer_wrap').style.display = "none";
}

/*View*/
function updateView (view) {
    if (view) {
        phone.className = "phone view_" + view;
        setTimeout(function () {
            // do second thing
            phone.className += " rotate";
        }, 1000);
    }
}

/*Controls*/
function updateIframe () {

    // preload iphone width and height
    phone.style.width = "375px";
    phone.style.height = "667px";

    /*Idea by /u/aerosole*/
    document.getElementById("wrapper").style.perspective = (
        document.getElementById("iframePerspective").checked ? "1300px" : "none"
    );

}

function showControls () {
    document.getElementById('phone-controls').style.opacity = 1;
    // document.getElementById('phone-controls').style.pointerEvents = 'all';
}

function hideControls () {
    document.getElementById('phone-controls').style.opacity = 0;
    // document.getElementById('phone-controls').style.pointerEvents = 'none';
}

function showControlsAtm () {
    document.getElementById('atm-phone-controls').style.opacity = 1;
    // document.getElementById('phone-controls').style.pointerEvents = 'all';
}

function hideControlsAtm () {
    document.getElementById('atm-phone-controls').style.opacity = 0;
    // document.getElementById('phone-controls').style.pointerEvents = 'none';
}

updateIframe();

/*Events*/
document.getElementById("controls").addEventListener("change", function () {
    updateIframe();
});

document.getElementById("views").addEventListener("click", function (evt) {
    updateView(evt.target.value);
});

document.getElementById("phone-controls").addEventListener("mouseover", function () {
    showControls();
});

document.getElementById("phone-controls").addEventListener("mouseout", function () {
    hideControls();
});

document.getElementById("atm-phone-controls").addEventListener("mouseover", function () {
    showControlsAtm();
});

document.getElementById("atm-phone-controls").addEventListener("mouseout", function () {
    hideControlsAtm();
});

document.getElementById("phones").addEventListener("click", function (evt) {

    if (evt.target.value == 1) {
        // iphone 6
        width = 375;
        height = 667;
        shadow = phone.className.includes('view_1')
            ? '-5px 5px 0 #000, -10px 10px 0 #000, -15px 15px 0 #000, -20px 20px 0 #000, -20px 20px 20px 5px #000'
            : '0px 3px 0 #000, 0px 4px 0 #000, 0px 5px 0 #000, 0px 7px 0 #000, 0px 10px 20px #000';
    }

    if (evt.target.value == 2) {
        // openplus 6T
        width = 400;
        height = 720;
        shadow = phone.className.includes('view_1')
            ? '-3px 3px 0 #000, -6px 6px 0 #000, -9px 9px 0 #000, -12px 12px 0 #000, -12px 12px 20px 5px #000'
            : '0px 3px 0 #000, 0px 4px 0 #000, 0px 5px 0 #000, 0px 7px 0 #000, 0px 10px 20px #000';
    }

    if (evt.target.value == 3) {
        // pixel 3XL
        width = 380;
        height = 620;
        shadow = phone.className.includes('view_1')
            ? '-5px 5px 0 #000, -9px 9px 0 #000, -14px 14px 0 #000, -18px 18px 0 #000, -18px 18px 20px 5px #000'
            : '0px 3px 0 #000, 0px 4px 0 #000, 0px 5px 0 #000, 0px 7px 0 #000, 0px 10px 20px #000';
    }

    if (evt.target.value == 4) {
        // redmi k20 pro
        width = 400;
        height = 800;
        shadow = phone.className.includes('view_1')
            ? '-3px 3px 0 #000, -6px 6px 0 #000, -9px 9px 0 #000, -12px 12px 0 #000, -15px 15px 20px 5px #000'
            : '0px 3px 0 #000, 0px 4px 0 #000, 0px 5px 0 #000, 0px 7px 0 #000, 0px 10px 20px #000';
    }

    if (evt.target.value == 5) {
        // asus 6z
        width = 410;
        height = 800;
        shadow = phone.className.includes('view_1')
            ? '-2px 2px 0 #000, -4px 4px 0 #000, -6px 6px 0 #000, -8px 8px 0 #000, -10px 10px 20px 5px #000'
            : '0px 3px 0 #000, 0px 4px 0 #000, 0px 5px 0 #000, 0px 7px 0 #000, 0px 10px 20px #000';
    }

    if (evt.target.value == 6) {
        // redmi note 7
        width = 395;
        height = 750;
        shadow = phone.className.includes('view_1')
            ? '-4px 4px 0 #000, -8px 8px 0 #000, -12px 12px 0 #000, -16px 16px 0 #000, -16px 16px 20px 5px #000'
            : '0px 3px 0 #000, 0px 4px 0 #000, 0px 5px 0 #000, 0px 7px 0 #000, 0px 10px 20px #000';
    }

    phone.style.width = width + "px";
    phone.style.height = height + "px";
    phone.style.boxShadow = shadow;
});


iframe = document.getElementById('frame_1');

if (iframe.attachEvent) {
    iframe.attachEvent("onload", function () {
        afterLoading();
    });
} else {
    iframe.onload = function () {
        afterLoading();
    };
}

function afterLoading () {

    setTimeout(function () {
        phone.className = "phone view_1";
        setTimeout(function () {
            // do second thing
            phone.className = "phone view_1 rotate";
        }, 1000);
        phone.style.shadow = phone.className.includes('view_1')
            ? '-5px 5px 0 #000, -10px 10px 0 #000, -15px 15px 0 #000, -20px 20px 0 #000, -20px 20px 20px 5px #000'
            : '0px 3px 0 #000, 0px 4px 0 #000, 0px 5px 0 #000, 0px 7px 0 #000, 0px 10px 20px #000';
    }, 1000);

}

//? Home script functions