const homeVideo = document.getElementById('home-video');
const formSubmit = document.getElementById('form-submit');

homeVideo.addEventListener('click', function(){
    if(!(homeVideo.currentTime > 0 && !homeVideo.paused && !homeVideo.ended && homeVideo.readyState > 2)){
        homeVideo.play();
    }
    else{
        homeVideo.pause();
    }
});



// const TOGGLE_PRICE_AREA = document.querySelector('.pricing__btns');
// const TOGGLE_PRICE_M = document.getElementById('priceMounth');
// const TOGGLE_PRICE_Y = document.getElementById('priceYearly');
// const STARTER = document.getElementById('starter');
// const STANDART = document.getElementById('standart');
// const PREMIUM = document.getElementById('premium');
// const PRICE_STARTER_M = document.getElementById('starter').innerHTML;
// const PRICE_STANDART_M = document.getElementById('standart').innerHTML;
// const PRICE_PREMIUM_M = document.getElementById('premium').innerHTML;


// TOGGLE_PRICE_AREA.onclick = function(e) {
// 	let target = e.target;
// 	if(target.tagName != 'BUTTON') return;
// 	if(target.classList.contains('pricing__toggle--active'))return;

// 	TOGGLE_PRICE_M.classList.toggle('pricing__toggle--active');
// 	TOGGLE_PRICE_Y.classList.toggle('pricing__toggle--active');

// 	calculateCost(target);
// }

// function calculateCost(t) {

// 	if(t == TOGGLE_PRICE_M)  {
// 			STARTER.innerHTML = PRICE_STARTER_M; 
// 			STANDART.innerHTML = PRICE_STANDART_M;
// 			PREMIUM.innerHTML = PRICE_PREMIUM_M;
// 			return
// 		}

// 	STARTER.innerHTML = PRICE_STARTER_M;
// 	STANDART.innerHTML = `$${PRICE_STANDART_M.slice(1) * 12}`;
// 	PREMIUM.innerHTML = `$${PRICE_PREMIUM_M.slice(1) * 12}`;
// }
