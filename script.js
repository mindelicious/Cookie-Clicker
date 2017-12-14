// Mam nadziję że się nie wystraszycie kodu. Pozdrawiam:)
var cookieElm = document.getElementById('cookie');
var cookieCount = 0;
var cookiePerSec = document.getElementById('per-sec');
var cursorPerSec = 0.1;
var cursorProd = 15;
var grandmaProd = 100;
var grandmaPerSec = 1;
var farmProd = 1100;
var farmPerSec = 8;
var bakeryProd = 12000;
var bakeryPerSec = 47;
var mineProd = 130000;
var minePerSec = 260;

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
    document.getElementById('cook-qt').innerHTML = cookieCount.toFixed(0);
    document.title = cookieCount.toFixed(0) + ' Cookies';

    document.getElementById('amountCursor').innerHTML = 'Amount: ' + autoClick;
    document.getElementById('costCursor').innerHTML = 'For ' + ((autoClick+1) * cursorProd) + ' Cookies';
    document.getElementById('perSecCursor').innerHTML = 'Per second: ' + Math.round((autoClick * cursorPerSec) * 100) / 100;
  
    document.getElementById('amountGrandma').innerHTML = 'Amount: ' + grandma;
    document.getElementById('costGrandma').innerHTML = 'For ' + ((grandma+1) * grandmaProd) + ' Cookies';
    document.getElementById('perSecGrandma').innerHTML = 'Per second: ' + (grandma * grandmaPerSec);

    document.getElementById('amountFarm').innerHTML = 'Amount: ' + farm;
    document.getElementById('costFarm').innerHTML = 'For ' + ((farm+1) * farmProd) + ' Cookies';
    document.getElementById('perSecFarm').innerHTML = 'Per second: ' + (farm * farmPerSec);

    document.getElementById('amountBakery').innerHTML = 'Amount: ' + bakery;
    document.getElementById('costBakery').innerHTML = 'For ' + ((bakery+1) * bakeryProd) + ' Cookies';
    document.getElementById('perSecBakery').innerHTML = 'Per second: ' + (bakery * bakeryPerSec);

    document.getElementById('amountMine').innerHTML = 'Amount: ' + mine;
    document.getElementById('costMine').innerHTML = 'For ' + ((mine+1) * mineProd) + ' Cookies';
    document.getElementById('perSecMine').innerHTML = 'Per second: ' + (mine * minePerSec);

    cookiePerSec.innerHTML = ((autoClick * cursorPerSec)+(grandma * grandmaPerSec)+(farm * farmPerSec)+(bakery * bakeryPerSec)+(mine * minePerSec)).toFixed(1);
}

// Add timer
function timer() {
    cookieCount = cookieCount + autoClick * cursorPerSec;
    cookieCount = cookieCount + grandma * grandmaPerSec;
    cookieCount = cookieCount + farm * farmPerSec;
    cookieCount = cookieCount + bakery * bakeryPerSec;
    cookieCount = cookieCount + mine * minePerSec;
    update()
}
setInterval(timer, 1000)

//Buy cursor
var buyCursor = document.getElementById('buyCursor');
var autoClick = 0;
buyCursor.onclick = function() {
    if(cookieCount >= ((autoClick+1) * cursorProd)) {
        cookieCount = cookieCount - ((autoClick+1) * cursorProd);
        autoClick = autoClick + 1;
        update()
        updatePrice();
    }
}
//Buy Grandma
var buyGrandmaElm = document.getElementById('buyGrandma');
var grandma = 0;
buyGrandmaElm.onclick = function() {
    if(cookieCount >= ((grandma+1) * grandmaProd)) {
        cookieCount = cookieCount - ((grandma+1) * grandmaProd);
        grandma = grandma + 1;
        update();
    }
}

//Buy Farm
var buyFarmElm = document.getElementById('buyFarm');
var farm = 0;
buyFarmElm.onclick = function() {
    if(cookieCount >= ((farm+1) * farmProd)) {
        cookieCount = cookieCount - ((farm+1) * farmProd);
        farm = farm + 1;
        update();
    }
}
//Buy Bakery
var buyBakeryElm = document.getElementById('buyBakery');
var bakery = 0;
buyBakeryElm.onclick = function() {
    if(cookieCount >= ((bakery+1) * bakeryProd)) {
        cookieCount = cookieCount - ((bakery+1) * bakeryProd);
        bakery = bakery + 1;
        update();
    }
}

//Buy Mine
var buyMineElm = document.getElementById('buyMine');
var mine = 0;
buyMineElm.onclick = function() {
    if(cookieCount >= ((mine+1) * mineProd)) {
        cookieCount = cookieCount - ((mine+1) * mineProd);
        mine = mine + 1;
        update();
    }
}