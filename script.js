
var cookieElm = document.getElementById('cookie');
var cookieCount = 0;
var cookiePerSec = document.getElementById('per-sec');
var multiplier = 0.1;
var updatePrice = 0.15;

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
    document.title = cookieCount + ' Cookies';

    document.getElementById('amountCursor').innerHTML = 'Amount: ' + autoClick;
    document.getElementById('costCursor').innerHTML = 'For ' + ((autoClick+1)*15) + ' Cookies';
    document.getElementById('perSecCursor').innerHTML = 'Per second: ' + (((autoclick) * 15)* multiplier);
  
    document.getElementById('amountGrandma').innerHTML = 'Amount: ' + grandma;
    document.getElementById('costGrandma').innerHTML = 'For ' + ((grandma+1) * 100) + ' Cookies';
    document.getElementById('perSecGrandma').innerHTML = 'Per second: ' + ((grandma * 10) * multiplier);

    document.getElementById('amountFarm').innerHTML = 'Amount: ' + farm;
    document.getElementById('costFarm').innerHTML = 'For ' + ((farm+1) * 1100) + ' Cookies';
    document.getElementById('perSecFarm').innerHTML = 'Per second: ' + ((farm * 8) * multiplier);

    document.getElementById('amountBakery').innerHTML = 'Amount: ' + bakery;
    document.getElementById('costBakery').innerHTML = 'For ' + ((bakery+1) * 12000) + ' Cookies';
    document.getElementById('perSecBakery').innerHTML = 'Per second: ' + ((bakery) * multiplier);

    document.getElementById('amountMine').innerHTML = 'Amount: ' + mine;
    document.getElementById('costMine').innerHTML = 'For ' + ((mine+1) * 130000) + ' Cookies';
    document.getElementById('perSecMine').innerHTML = 'Per second: ' + ((mine) * multiplier);

    cookiePerSec.innerHTML = (((autoClick)+(grandma * 1)+(farm * 3)+(bakery * 5)+(mine * 7))* multiplier);
}

// Add timer
function timer() {
    cookieCount = cookieCount + autoClick * 0.1;
    cookieCount = cookieCount + grandma * 1;
    cookieCount = cookieCount + farm * 8;
    cookieCount = cookieCount + bakery * 47;
    cookieCount = cookieCount + mine * 7;
    update()
}
setInterval(timer, 1000)

//Buy cursor
var buyCursor = document.getElementById('buyCursor');
var autoClick = 0;
buyCursor.onclick = function() {
    if(cookieCount >= ((autoClick+1) * 15)) {
        cookieCount = cookieCount - ((autoClick+1) * 15);
        autoClick = autoClick + 1;
        update()
    } 
}

//Buy Grandma
var buyGrandmaElm = document.getElementById('buyGrandma');
var grandma = 0;
buyGrandmaElm.onclick = function() {
    if(cookieCount >= ((grandma+1) * 100)) {
        cookieCount = cookieCount - ((grandma+1) * 100);
        grandma = grandma + 1;
        update();
    }
}

//Buy Farm
var buyFarmElm = document.getElementById('buyFarm');
var farm = 0;
buyFarmElm.onclick = function() {
    if(cookieCount >= ((farm+1) * 1100)) {
        cookieCount = cookieCount - ((farm+1) * 1100);
        farm = farm + 1;
        update();
    }
}
//Buy Bakery
var buyBakeryElm = document.getElementById('buyBakery');
var bakery = 0;
buyBakeryElm.onclick = function() {
    if(cookieCount >= ((bakery+1) * 12000)) {
        cookieCount = cookieCount - ((bakery+1) * 12000);
        bakery = bakery + 1;
        update();
    }
}

//Buy Mine
var buyMineElm = document.getElementById('buyMine');
var mine = 0;
buyMineElm.onclick = function() {
    if(cookieCount >= ((mine+1) * 130000)) {
        cookieCount = cookieCount - ((mine+1) * 130000);
        mine = mine + 1;
        update();
    }
}
