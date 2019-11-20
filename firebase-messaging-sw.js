//importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

//SErvice wrker de wrokbox
//importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

/**** aqui esta lo necesario para frebase */
firebase.initializeApp({
  'messagingSenderId': '181953839266'
});

const messaging = firebase.messaging();


//Aqui termina lo de firebase angular messsaging *******************************************************


