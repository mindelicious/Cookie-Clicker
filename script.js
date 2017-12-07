
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
    localStorage.setItem('farm', farm);
    localStorage.setItem('bakery', bakery);
    localStorage.setItem('mine', mine);
}

loadScoreElm.onclick = function() {
    cookieCount = localStorage.getItem('cookieCount');
    cookieCount = parseInt(cookieCount);
    autoClick = localStorage.getItem('autoClick');
    autoClick = parseInt(autoClick);
    grandma = localStorage.getItem('grandma');
    grandma = parseInt(grandma);
    farm = localStorage.getItem('farm');
    farm = parseInt(farm);
    bakery = localStorage.getItem('bakery');
    bakery = parseInt(bakery);
    mine = localStorage.getItem('mine');
    mine = parseInt(mine);
    update();
}

//Update
function update() {
    score.innerHTML = cookieCount;

    document.getElementById('amountClick').innerHTML = 'Amount: ' + autoClick;
    document.getElementById('costClick').innerHTML = 'For ' + ((autoClick+1) * 3) + ' Cookies';
  
    document.getElementById('amountGrandma').innerHTML = 'Amount: ' + grandma;
    document.getElementById('costGrandma').innerHTML = 'For ' + ((grandma+1) * 15) + ' Cookies';
    cookiePerSec.innerHTML = (((autoClick)+(grandma * 2)+(farm * 3)+(bakery * 4)+(mine * 6)) * multiplier).toFixed(2);
    
    document.getElementById('amountFarm').innerHTML = 'Amount: ' + farm;
    document.getElementById('costFarm').innerHTML = 'For ' + ((farm+1) * 30) + ' Cookies';

    document.getElementById('amountBakery').innerHTML = 'Amount: ' + bakery;
    document.getElementById('costBakery').innerHTML = 'For ' + ((bakery+1) * 50) + ' Cookies';

    document.getElementById('amountMine').innerHTML = 'Amount: ' + mine;
    document.getElementById('costMine').innerHTML = 'For ' + ((mine+1) * 80) + ' Cookies';
}

// Add timer/ buy autoClick
var buyClick = document.getElementById('buyClick');
var autoClick = 0;

function timer() {
    cookieCount = cookieCount + autoClick;
    cookieCount = cookieCount + grandma*2;
    cookieCount = cookieCount + farm*3;
    cookieCount = cookieCount + bakery*5;
    cookieCount = cookieCount + mine*7;
    update()
}
setInterval(timer, 2000)

buyClick.onclick = function buyClick() {
    if(cookieCount >= (autoClick+1) * 3) {
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

//Buy Farm
var buyFarmElm = document.getElementById('buyFarm');
var farm = 0;
buyFarmElm.onclick = function() {
    if(cookieCount >= (farm+1) * 30) {
        cookieCount = cookieCount - ((farm+1) * 30);
        farm = farm + 1;
        update();
    }
}
//Buy Bakery
var buyBakeryElm = document.getElementById('buyBakery');
var bakery = 0;
buyBakeryElm.onclick = function() {
    if(cookieCount >= (bakery+1) * 50) {
        cookieCount = cookieCount - ((bakery+1) * 50);
        bakery = bakery + 1;
        update();
    }
}

//Buy Mine
var buyMineElm = document.getElementById('buyMine');
var mine = 0;
buyMineElm.onclick = function() {
    if(cookieCount >= (mine+1) * 80) {
        cookieCount = cookieCount - ((mine+1) * 80);
        mine = mine + 1;
        update();
    }
}