const body = document.body;
const onBtn = document.getElementById('on');
const offBtn = document.getElementById('off');
const statusText = document.getElementById('statusText');
const headline = document.getElementById('headline');
const subtext = document.getElementById('subtext');
const scrim = document.getElementById('scrim');
const panel = document.getElementById('panel');
const subscribeBtn = document.getElementById('subscribe');
const stayLitBtn = document.getElementById('stayLit');
const confirmMsg = document.getElementById('confirmMsg');
const flash = document.getElementById('flash');

// 👉 reemplaza esto por tu link de pago real (Stripe Payment Link, PayPal, Gumroad, etc.)
const PAYMENT_URL = 'https://ko-fi.com/linterna12';

function turnOn(){
  body.classList.add('lit');
  statusText.textContent = 'Estado: encendido — máxima intensidad';
  headline.textContent = 'Linterna al máximo.';
  subtext.textContent = 'Brillo total, directo a la cara. Ninguna suscripción necesaria para esto.';
  closePanel();

  flash.classList.remove('fire');
  void flash.offsetWidth; // reinicia la animación si se pulsa varias veces
  flash.classList.add('fire');
}

// "Apagar" nunca apaga de verdad — solo abre el plan.
function requestOff(){
  scrim.classList.add('show');
  panel.classList.add('show');
  confirmMsg.classList.remove('show');
  subscribeBtn.disabled = false;
  subscribeBtn.textContent = 'Suscribirme para apagar';
}

function closePanel(){
  scrim.classList.remove('show');
  panel.classList.remove('show');
}

onBtn.addEventListener('click', turnOn);
offBtn.addEventListener('click', requestOff);
scrim.addEventListener('click', closePanel);

subscribeBtn.addEventListener('click', () => {
  confirmMsg.classList.add('show');
  subscribeBtn.textContent = 'Procesando...';
  subscribeBtn.disabled = true;
  setTimeout(() => {
    window.location.href = PAYMENT_URL;
  }, 900);
});

stayLitBtn.addEventListener('click', closePanel);
