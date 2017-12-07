
var cookieElm = document.getElementById('cookie');
var cookieCount = 0;
var score = document.getElementById('cook-qt');
var cookiePerSec = document.getElementById('per-sec');
var multiplier = 0.1;

// Add cookie
cookieElm.onclick = function() {
    cookieCount = cookieCount + 1;
    update()
}

// Save/Load score
var saveScoreElm = document.getElementById('saveScore');
var loadScoreElm = document.getElementById('loadScore');

saveScoreElm.onclick = function() {
    localStorage.setItem('cookieCount', cookieCount);
    localStorage.setItem('autoClick', autoClick);
    localStorage.setItem('grandma', grandma);
}

loadScoreElm.onclick = function() {
    cookieCount = localStorage.getItem('cookieCount');
    cookieCount = parseInt(cookieCount);
    autoClick = localStorage.getItem('autoClick');
    autoClick = parseInt(autoClick);
    grandma = localStorage.getItem('grandma');
    grandma = parseInt(grandma);
    update();
}

//Update
function update() {
    score.innerHTML = cookieCount.toFixed(2);
    document.getElementById('amountClick').innerHTML = 'Amount: ' + autoClick;
    document.getElementById('costClick').innerHTML = 'For ' + ((autoClick+1) * 3) + ' Cookies';
    document.getElementById('amountGrandma').innerHTML = 'Amount: ' + grandma;
    document.getElementById('costGrandma').innerHTML ='For ' + ((grandma+1) * 15) + ' Cookies';
    cookiePerSec.innerHTML = 'Per second: ' + (((autoClick)+(grandma * 2)) * multiplier).toFixed(2);
}

// Add timer/ buy autoClick
var buyClick = document.getElementById('buyClick');
var autoClick = 0;

function timer() {
    cookieCount = cookieCount + autoClick;
    cookieCount = cookieCount + grandma*2;
    update()
}
setInterval(timer, 2000)

buyClick.onclick = function buyClick() {
    if(cookieCount >= ((autoClick+1) * 3)) {
        cookieCount = cookieCount - ((autoClick+1) * 3);
        autoClick = autoClick + 1;
        update()
    } 
}

//Buy Grandma
var buyGrandmaElm = document.getElementById('buyGrandma');
var grandma = 0;
buyGrandmaElm.onclick = function() {
    if(cookieCount >= (grandma+1) * 15) {
        cookieCount = cookieCount - ((grandma+1) * 15);
        grandma = grandma + 1;
        update();
    }
}
/*
//Buy Farm
var buyFarmElm = document.getElementById('buyFarm');
var farm = 0;
buyFarmElm.onclick = function() {
    if(cookieCount >= )
}*/