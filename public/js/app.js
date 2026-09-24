'use strict';

/* ===== TRANSLATIONS ===== */
var i18n = {
  it: {
    splash_sub:'Autentica Cucina Italiana a Valle Martella',
    nav_home:'Home',nav_menu:'Menu',nav_gallery:'Galleria',nav_location:'Dove Siamo',nav_contacts:'Contatti',
    hero_badge:'Ristorante Italiano',
    hero_title_sub:'Ristorante',
    hero_subtitle:'Un viaggio nei sapori autentici della tradizione italiana, nel cuore di Valle Martella',
    hero_location_title:'DOVE SIAMO',hero_location_val:'Via Riccardo Lombardi, 1<br>00030 Valle Martella (RM)',
    hero_hours_title:'ORARI',hero_hours_val:'Pranzo 12:30-15:30 · Cena 18:30-23:00',hero_hours_fri:'Ven-Sab fino 00:00',
    hero_rating_title:'RECENSIONI',hero_rating_val:'4.3/5',
    hero_cta_menu:'Esplora il Menu',hero_cta_map:'Come Arrivare',
    menu_title:'Il Nostro Menu',menu_subtitle:'Esplora le nostre specialità — clicca una categoria per scoprire i piatti',
    cat_antipasti:'Antipasti',cat_primi:'Primi',cat_secondi:'Secondi',cat_pizza:'Pizza',cat_dolci:'Dolci',
    panel_view_btn:'Vedi Tutti i Piatti',
    combo_title:'Menu Speciali',combo_subtitle:'Selezioni pensate per ogni occasione — dall\'intimità alla festa con gli amici',
    combo_choose:'Scegli Questo',combo_people:'persone',combo_extra:'extra',
    gallery_title:'Galleria',gallery_subtitle:'Scorri tra le immagini del nostro ristorante, dei nostri piatti e dell\'atmosfera unica',
    location_title:'Dove Siamo',location_subtitle:'Vieni a trovarci — siamo aperti tutti i giorni',
    loc_address_title:'Indirizzo',loc_address_val:'Via Riccardo Lombardi, 1<br>00030 Valle Martella (RM)',
    loc_view_map:'Apri in Google Maps',loc_hours_title:'Orari di Apertura',
    loc_hours_lunch_label:'Pranzo:',loc_hours_lunch_val:'12:30 – 15:30',loc_hours_dinner_label:'Cena:',loc_hours_dinner_val:'18:30 – 23:00',
    loc_hours_fri_label:'Ven-Sab:',loc_hours_fri_val:'18:30 – 00:00',loc_hours_open_label:'Apertura:',loc_hours_open_val:'Tutti i giorni',
    loc_phone_title:'Telefono',loc_view_full_map:'Vedi mappa completa',
    reserve_cta:'Prenota un Tavolo',reserve_title:'Prenota un Tavolo',
    reserve_date:'Data',reserve_time:'Ora',reserve_time_placeholder:'Seleziona ora',
    reserve_guests:'Numero Ospiti',reserve_name:'Nome',reserve_phone:'Telefono',
    reserve_email:'Email',reserve_optional:'(opzionale)',reserve_notes:'Note',
    reserve_submit:'Prenota Ora',reserve_success_title:'Prenotazione Confermata!',
    reserve_success_text:'Grazie, ti abbiamo inviato un riepilogo. Puoi confermare su WhatsApp.',
    reserve_success_wa:'Conferma su WhatsApp',
    contatti_title:'Contatti',contatti_subtitle:'Siamo sempre a tua disposizione',
    contatti_phone_title:'Telefono',contatti_hours_title:'Orari',
    contatti_hours_lunch:'Pranzo: 12:30 – 15:30',contatti_hours_dinner:'Cena: 18:30 – 23:00',
    contatti_hours_fri:'Ven-Sab: fino alle 00:00',contatti_hours_open:'Sempre Aperti',
    contatti_social_title:'Social',contatti_wa_cta:'Scrivici su WhatsApp',
    footer_tagline:'Autentica cucina italiana dal 1998',
    footer_contacts_title:'Contatti',footer_hours_title:'Orari',
    footer_hours_lunch:'Pranzo: 12:30 – 15:30',footer_hours_dinner:'Cena: 18:30 – 23:00',
    footer_hours_fri:'Ven-Sab: fino alle 00:00',footer_hours_open:'Aperto tutti i giorni',
    wa_reserve:'Prenota un Tavolo',wa_takeaway:'Ordina da Asporto',wa_info:'Info',
    admin_title:'Admin — Prenotazioni'
  },
  en: {
    splash_sub:'Authentic Italian Cuisine in Valle Martella',
    nav_home:'Home',nav_menu:'Menu',nav_gallery:'Gallery',nav_location:'Location',nav_contacts:'Contacts',
    hero_badge:'Italian Restaurant',
    hero_title_sub:'Restaurant',
    hero_subtitle:'A journey through authentic Italian flavors, in the heart of Valle Martella',
    hero_location_title:'LOCATION',hero_location_val:'Via Riccardo Lombardi, 1<br>00030 Valle Martella (RM)',
    hero_hours_title:'HOURS',hero_hours_val:'Lunch 12:30-15:30 · Dinner 18:30-23:00',hero_hours_fri:'Fri-Sat until 00:00',
    hero_rating_title:'RATING',hero_rating_val:'4.3/5',
    hero_cta_menu:'Explore Menu',hero_cta_map:'Get Directions',
    menu_title:'Our Menu',menu_subtitle:'Explore our specialties — click a category to discover the dishes',
    cat_antipasti:'Starters',cat_primi:'First Courses',cat_secondi:'Main Courses',cat_pizza:'Pizza',cat_dolci:'Desserts',
    panel_view_btn:'View All Dishes',
    combo_title:'Special Menus',combo_subtitle:'Selections for every occasion — from intimacy to celebration with friends',
    combo_choose:'Choose This',combo_people:'people',combo_extra:'extra',
    gallery_title:'Gallery',gallery_subtitle:'Browse images of our restaurant, dishes, and unique atmosphere',
    location_title:'Location',location_subtitle:'Come visit us — we are open every day',
    loc_address_title:'Address',loc_address_val:'Via Riccardo Lombardi, 1<br>00030 Valle Martella (RM)',
    loc_view_map:'Open in Google Maps',loc_hours_title:'Opening Hours',
    loc_hours_lunch_label:'Lunch:',loc_hours_lunch_val:'12:30 – 15:30',loc_hours_dinner_label:'Dinner:',loc_hours_dinner_val:'18:30 – 23:00',
    loc_hours_fri_label:'Fri-Sat:',loc_hours_fri_val:'18:30 – 00:00',loc_hours_open_label:'Open:',loc_hours_open_val:'Every day',
    loc_phone_title:'Phone',loc_view_full_map:'View full map',
    reserve_cta:'Book a Table',reserve_title:'Book a Table',
    reserve_date:'Date',reserve_time:'Time',reserve_time_placeholder:'Select time',
    reserve_guests:'Guests',reserve_name:'Name',reserve_phone:'Phone',
    reserve_email:'Email',reserve_optional:'(optional)',reserve_notes:'Notes',
    reserve_submit:'Book Now',reserve_success_title:'Reservation Confirmed!',
    reserve_success_text:'Thank you, we sent you a summary. You can confirm on WhatsApp.',
    reserve_success_wa:'Confirm on WhatsApp',
    contatti_title:'Contacts',contatti_subtitle:'We are always at your disposal',
    contatti_phone_title:'Phone',contatti_hours_title:'Hours',
    contatti_hours_lunch:'Lunch: 12:30 – 15:30',contatti_hours_dinner:'Dinner: 18:30 – 23:00',
    contatti_hours_fri:'Fri-Sat: until 00:00',contatti_hours_open:'Always Open',
    contatti_social_title:'Social',contatti_wa_cta:'Message us on WhatsApp',
    footer_tagline:'Authentic Italian cuisine since 1998',
    footer_contacts_title:'Contacts',footer_hours_title:'Hours',
    footer_hours_lunch:'Lunch: 12:30 – 15:30',footer_hours_dinner:'Dinner: 18:30 – 23:00',
    footer_hours_fri:'Fri-Sat: until 00:00',footer_hours_open:'Open every day',
    wa_reserve:'Book a Table',wa_takeaway:'Takeaway Order',wa_info:'Info',
    admin_title:'Admin — Reservations'
  },
  fr: {
    splash_sub:'Cuisine Italienne Authentique à Valle Martella',
    nav_home:'Accueil',nav_menu:'Menu',nav_gallery:'Galerie',nav_location:'Où trouver',nav_contacts:'Contacts',
    hero_badge:'Restaurant Italien',
    hero_title_sub:'Restaurant',
    hero_subtitle:'Un voyage à travers les saveurs authentiques italiennes, au cœur de Valle Martella',
    hero_location_title:'ADRESSE',hero_location_val:'Via Riccardo Lombardi, 1<br>00030 Valle Martella (RM)',
    hero_hours_title:'HORAIRES',hero_hours_val:'Déjeuner 12:30-15:30 · Dîner 18:30-23:00',hero_hours_fri:'Ven-Sam jusqu\'à 00:00',
    hero_rating_title:'NOTE',hero_rating_val:'4.3/5',
    hero_cta_menu:'Explorer le Menu',hero_cta_map:'Itinéraire',
    menu_title:'Notre Menu',menu_subtitle:'Explorez nos spécialités — cliquez une catégorie pour découvrir les plats',
    cat_antipasti:'Entrées',cat_primi:'Premiers Plats',cat_secondi:'Plats Principaux',cat_pizza:'Pizza',cat_dolci:'Desserts',
    panel_view_btn:'Voir Tous les Plats',
    combo_title:'Menus Spéciaux',combo_subtitle:'Sélections pour chaque occasion — de l\'intimité à la fête entre amis',
    combo_choose:'Choisir',combo_people:'personnes',combo_extra:'supplément',
    gallery_title:'Galerie',gallery_subtitle:'Parcourez les images de notre restaurant, plats et atmosphère unique',
    location_title:'Où Nous Trouver',location_subtitle:'Venez nous rendre visite — nous sommes ouverts tous les jours',
    loc_address_title:'Adresse',loc_address_val:'Via Riccardo Lombardi, 1<br>00030 Valle Martella (RM)',
    loc_view_map:'Ouvrir dans Google Maps',loc_hours_title:'Heures d\'Ouverture',
    loc_hours_lunch_label:'Déjeuner:',loc_hours_lunch_val:'12:30 – 15:30',loc_hours_dinner_label:'Dîner:',loc_hours_dinner_val:'18:30 – 23:00',
    loc_hours_fri_label:'Ven-Sam:',loc_hours_fri_val:'18:30 – 00:00',loc_hours_open_label:'Ouverture:',loc_hours_open_val:'Tous les jours',
    loc_phone_title:'Téléphone',loc_view_full_map:'Voir la carte complète',
    reserve_cta:'Réserver une Table',reserve_title:'Réserver une Table',
    reserve_date:'Date',reserve_time:'Heure',reserve_time_placeholder:'Sélectionnez l\'heure',
    reserve_guests:'Convives',reserve_name:'Nom',reserve_phone:'Téléphone',
    reserve_email:'Email',reserve_optional:'(facultatif)',reserve_notes:'Notes',
    reserve_submit:'Réserver',reserve_success_title:'Réservation Confirmée!',
    reserve_success_text:'Merci, nous vous avons envoyé un récapitulatif. Vous pouvez confirmer sur WhatsApp.',
    reserve_success_wa:'Confirmer sur WhatsApp',
    contatti_title:'Contacts',contatti_subtitle:'Nous sommes toujours à votre disposition',
    contatti_phone_title:'Téléphone',contatti_hours_title:'Horaires',
    contatti_hours_lunch:'Déjeuner: 12:30 – 15:30',contatti_hours_dinner:'Dîner: 18:30 – 23:00',
    contatti_hours_fri:'Ven-Sam: jusqu\'à 00:00',contatti_hours_open:'Toujours Ouvert',
    contatti_social_title:'Social',contatti_wa_cta:'Écrivez-nous sur WhatsApp',
    footer_tagline:'Cuisine italienne authentique depuis 1998',
    footer_contacts_title:'Contacts',footer_hours_title:'Horaires',
    footer_hours_lunch:'Déjeuner: 12:30 – 15:30',footer_hours_dinner:'Dîner: 18:30 – 23:00',
    footer_hours_fri:'Ven-Sam: jusqu\'à 00:00',footer_hours_open:'Ouvert tous les jours',
    wa_reserve:'Réserver une Table',wa_takeaway:'Commande à Emporter',wa_info:'Infos',
    admin_title:'Admin — Réservations'
  },
  de: {
    splash_sub:'Authentische Italienische Küche in Valle Martella',
    nav_home:'Startseite',nav_menu:'Speisekarte',nav_gallery:'Galerie',nav_location:'Standort',nav_contacts:'Kontakt',
    hero_badge:'Italienisches Restaurant',
    hero_title_sub:'Restaurant',
    hero_subtitle:'Eine Reise durch die authentischen italienischen Aromen, im Herzen von Valle Martella',
    hero_location_title:'ADRESSE',hero_location_val:'Via Riccardo Lombardi, 1<br>00030 Valle Martella (RM)',
    hero_hours_title:'ÖFFNUNGSZEITEN',hero_hours_val:'Mittagessen 12:30-15:30 · Abendessen 18:30-23:00',hero_hours_fri:'Fr-Sa bis 00:00',
    hero_rating_title:'BEWERTUNG',hero_rating_val:'4.3/5',
    hero_cta_menu:'Speisekarte Entdecken',hero_cta_map:'Anfahrt',
    menu_title:'Unsere Speisekarte',menu_subtitle:'Entdecken Sie unsere Spezialitäten — klicken Sie auf eine Kategorie',
    cat_antipasti:'Vorspeisen',cat_primi:'Erste Gänge',cat_secondi:'Hauptgerichte',cat_pizza:'Pizza',cat_dolci:'Desserts',
    panel_view_btn:'Alle Gerichte Ansehen',
    combo_title:'Spezialmenüs',combo_subtitle:'Auswahl für jeden Anlass — von Intimität bis zur Feier mit Freunden',
    combo_choose:'Auswählen',combo_people:'Personen',combo_extra:'extra',
    gallery_title:'Galerie',gallery_subtitle:'Bilder unseres Restaurants, Gerichte und der einzigartigen Atmosphäre',
    location_title:'Standort',location_subtitle:'Besuchen Sie uns — wir sind jeden Tag geöffnet',
    loc_address_title:'Adresse',loc_address_val:'Via Riccardo Lombardi, 1<br>00030 Valle Martella (RM)',
    loc_view_map:'In Google Maps Öffnen',loc_hours_title:'Öffnungszeiten',
    loc_hours_lunch_label:'Mittagessen:',loc_hours_lunch_val:'12:30 – 15:30',loc_hours_dinner_label:'Abendessen:',loc_hours_dinner_val:'18:30 – 23:00',
    loc_hours_fri_label:'Fr-Sa:',loc_hours_fri_val:'18:30 – 00:00',loc_hours_open_label:'Geöffnet:',loc_hours_open_val:'Täglich',
    loc_phone_title:'Telefon',loc_view_full_map:'Vollständige Karte Anzeigen',
    reserve_cta:'Tisch Reservieren',reserve_title:'Tisch Reservieren',
    reserve_date:'Datum',reserve_time:'Uhrzeit',reserve_time_placeholder:'Uhrzeit wählen',
    reserve_guests:'Gäste',reserve_name:'Name',reserve_phone:'Telefon',
    reserve_email:'Email',reserve_optional:'(optional)',reserve_notes:'Notizen',
    reserve_submit:'Jetzt Reservieren',reserve_success_title:'Reservierung Bestätigt!',
    reserve_success_text:'Vielen Dank! Wir haben Ihnen eine Zusammenfassung gesendet. Sie können auf WhatsApp bestätigen.',
    reserve_success_wa:'Auf WhatsApp Bestätigen',
    contatti_title:'Kontakt',contatti_subtitle:'Wir stehen Ihnen jederzeit zur Verfügung',
    contatti_phone_title:'Telefon',contatti_hours_title:'Öffnungszeiten',
    contatti_hours_lunch:'Mittagessen: 12:30 – 15:30',contatti_hours_dinner:'Abendessen: 18:30 – 23:00',
    contatti_hours_fri:'Fr-Sa: bis 00:00',contatti_hours_open:'Immer Geöffnet',
    contatti_social_title:'Social',contatti_wa_cta:'Schreiben Sie uns auf WhatsApp',
    footer_tagline:'Authentische italienische Küche seit 1998',
    footer_contacts_title:'Kontakt',footer_hours_title:'Öffnungszeiten',
    footer_hours_lunch:'Mittagessen: 12:30 – 15:30',footer_hours_dinner:'Abendessen: 18:30 – 23:00',
    footer_hours_fri:'Fr-Sa: bis 00:00',footer_hours_open:'Täglich geöffnet',
    wa_reserve:'Tisch Reservieren',wa_takeaway:'Bestellen zum Mitnehmen',wa_info:'Info',
    admin_title:'Admin — Reservierungen'
  }
};

/* ===== MENU DATA ===== */
var menuData = {
  antipasti:{badge:'Antipasti',desc:'Il nostro antipasto perfetto per iniziare il pasto con gusto.',price:'€6 – €16',dishes:[
    {name:'Bruschetta',price:'€6',icon:'bread-slice'},
    {name:'Carpaccio di Manzo',price:'€12',icon:'cow'},
    {name:'Antipasto di Mare',price:'€14',icon:'fish'},
    {name:'Caprese con Burrata',price:'€10',icon:'cheese'},
    {name:'Fritto Misto',price:'€12',icon:'fire-burner'},
    {name:'Tagliere di Salumi e Formaggi',price:'€16',icon:'cheese'}
  ]},
  primi:{badge:'Primi Piatti',desc:'Pasta fresca e tradizione. I nostri primi piatti raccontano l\'Italia.',price:'€11 – €16',dishes:[
    {name:'Spaghetti alle Vongole',price:'€14',icon:'shrimp'},
    {name:'Pasta allo Scoglio',price:'€16',icon:'fish'},
    {name:'Carbonara Tradizionale',price:'€12',icon:'bowl-food'},
    {name:'Amatriciana',price:'€12',icon:'bowl-food'},
    {name:'Cacio e Pepe',price:'€11',icon:'bowl-food'},
    {name:'Lasagna della Casa',price:'€13',icon:'bowl-food'}
  ]},
  secondi:{badge:'Secondi Piatti',desc:'Carne e pesce preparati con maestria. Il cuore della cucina italiana.',price:'€15 – €22',dishes:[
    {name:'Filetto di Orata in Crosta',price:'€18',icon:'fish'},
    {name:'Grigliata di Pesce',price:'€22',icon:'fish'},
    {name:'Tagliata di Manzo',price:'€20',icon:'cow'},
    {name:'Saltimbocca alla Romana',price:'€18',icon:'drumstick-bite'},
    {name:'Pollo alla Cacciatora',price:'€15',icon:'drumstick-bite'},
    {name:'Polpo alla Griglia',price:'€19',icon:'fish-fins'}
  ]},
  pizza:{badge:'Pizza',desc:'Pizza tradizionale cotta a regola d\'arte. Croccante e saporita.',price:'€6 – €10',dishes:[
    {name:'Margherita',price:'€7',icon:'pizza-slice'},
    {name:'Marinara',price:'€6',icon:'pizza-slice'},
    {name:'Diavola',price:'€9',icon:'pizza-slice'},
    {name:'Quattro Formaggi',price:'€10',icon:'pizza-slice'},
    {name:'Capricciosa',price:'€10',icon:'pizza-slice'},
    {name:'Pizza al Tegamino',price:'€8',icon:'pizza-slice'}
  ]},
  dolci:{badge:'Dolci',desc:'Dolci artigianali per concludere in bellezza.',price:'€5 – €6',dishes:[
    {name:'Tiramisù della Casa',price:'€6',icon:'cake-candles'},
    {name:'Panna Cotta',price:'€5',icon:'ice-cream'},
    {name:'Cannoli Siciliani',price:'€5',icon:'cookie'},
    {name:'Torta della Nonna',price:'€6',icon:'cake-candles'},
    {name:'Affogato al Caffè',price:'€5',icon:'mug-hot'},
    {name:'Semifreddo al Limone',price:'€6',icon:'lemon'}
  ]}
};

/* ===== COMBO DATA ===== */
var comboData = [
  {
    id:'coppia',name:'Menu Coppia',ribbon:'Per Coppia',
    price:'€90',priceNote:'(per 2 persone)',
    items:['Antipasto di Mare per 2','Pasta allo Scoglio ×2','Vino della Casa 1 bottiglia','Tiramisù ×2','Caffè ×2'],
    basePeople:2,minPeople:2,maxPeople:2,extraPerPerson:null,baseCost:90,peopleEditable:false,priceLabel:'€90'
  },
  {
    id:'famiglia',name:'Menu Famiglia',ribbon:'Per Famiglia',
    price:'da €156',priceNote:'(da 4 persone)',
    items:['Tagliere Misto Grande','Lasagna ×2','Grigliata Mista di Carne','Contorni Misti','Vino 2 bottiglie','Dolci Assortiti ×4'],
    basePeople:4,minPeople:3,maxPeople:8,extraPerPerson:35,baseCost:156,peopleEditable:true,priceLabel:'€156'
  },
  {
    id:'amici',name:'Menu Amici',ribbon:'Per Amici',
    price:'da €69',priceNote:'(base 4 persone)',
    items:['Bruschette Miste','Pizza Assortita 3 gusti','Fritto Misto','Birra Media a persona','Dolce a Scelta a persona'],
    basePeople:4,minPeople:3,maxPeople:12,extraPerPerson:10,baseCost:69,peopleEditable:true,priceLabel:'€69'
  },
  {
    id:'chef',name:'Selezione Chef',ribbon:'Signature',
    price:'€62',priceNote:'(a persona)',
    items:['Antipasto dello Chef','Primo del Giorno','Secondo + Contorno','Calice di Vino','Dolce della Casa','Caffè'],
    basePeople:1,minPeople:1,maxPeople:1,extraPerPerson:null,baseCost:62,peopleEditable:false,priceLabel:'€62/persona'
  }
];

/* ===== GALLERY IMAGES ===== */
var galleryImages = [
  {url:'',label:'Antipasto di Mare',icon:'fish'},
  {url:'',label:'Pasta allo Scoglio',icon:'bowl-food'},
  {url:'',label:'Tagliata di Manzo',icon:'cow'},
  {url:'',label:'Pizza Margherita',icon:'pizza-slice'},
  {url:'',label:'Interno Ristorante',icon:'store'},
  {url:'',label:'Tiramisù',icon:'cake-candles'},
  {url:'',label:'Cantina Vini',icon:'wine-bottle'},
  {url:'',label:'Bruschetta',icon:'bread-slice'},
  {url:'',label:'Dolci Artigianali',icon:'cookie'}
];


/* ===== DOM HELPERS ===== */
// All dynamic content is built with createElement/textContent so no data ever reaches an HTML parser.
function el(tag, className, text){
  var node = document.createElement(tag);
  if(className) node.className = className;
  if(text != null) node.textContent = text;
  return node;
}
function icon(name, prefix){
  var i = el('i', (prefix || 'fas') + ' fa-' + name);
  i.setAttribute('aria-hidden', 'true');
  return i;
}
function lockScroll(lock){ document.body.style.overflow = lock ? 'hidden' : ''; }
var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var WA_NUMBER = '393474329466';
function openWhatsApp(msg){
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
}
// Local YYYY-MM-DD (toISOString is UTC and shifts the date near midnight)
function isoDate(d){
  return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
}

/* ===== LANGUAGE STATE ===== */
var currentLang = 'it';

// Translations are plain text; "<br>" is the only markup allowed and is rebuilt as a real element.
function setI18nText(node, value){
  var parts = String(value).split('<br>');
  node.textContent = '';
  parts.forEach(function(part, i){
    if(i > 0) node.appendChild(document.createElement('br'));
    node.appendChild(document.createTextNode(part));
  });
}

function applyLanguage(lang){
  currentLang = i18n[lang] ? lang : 'it';
  var t = i18n[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(function(node){
    var key = node.getAttribute('data-i18n');
    if(t[key]) setI18nText(node, t[key]);
  });
  document.querySelectorAll('.lang-btn').forEach(function(b){
    var active = b.getAttribute('data-lang') === currentLang;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  document.documentElement.lang = currentLang;
  renderCombos();
}

/* ===== SCROLL REVEAL ===== */
var revealObserver = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(function(node){ revealObserver.observe(node); });

/* ===== GOLD SPARKLE PARTICLES ===== */
(function initSparkle(){
  if(reduceMotion) return;
  var container = el('div', 'gold-sparkle');
  container.setAttribute('aria-hidden', 'true');
  for(var i = 0; i < 20; i++){
    var span = document.createElement('span');
    var size = (2 + Math.random() * 4) + 'px';
    span.style.left = Math.random() * 100 + '%';
    span.style.animationDuration = (8 + Math.random() * 15) + 's';
    span.style.animationDelay = (Math.random() * 15) + 's';
    span.style.width = size;
    span.style.height = size;
    container.appendChild(span);
  }
  document.body.appendChild(container);
})();

/* ===== THREE.JS BACKGROUND ===== */
// Loaded after first paint so the 600 KB library never blocks rendering or the main thread at startup.
function initThreeBackground(){
  var container = document.getElementById('three-canvas');
  if(!container || typeof THREE === 'undefined') return;

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var renderer;
  try{
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'low-power' });
  }catch(err){
    return; // WebGL unavailable: the page works without the background
  }
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  var shapes = [];
  var goldColors = [0xC9A14A, 0xE0BE6A, 0xD4A84A, 0xB8922F, 0xF5E6B8];
  var count = window.innerWidth < 768 ? 28 : 55;

  for(var i = 0; i < count; i++){
    var mat = new THREE.MeshBasicMaterial({
      color: goldColors[Math.floor(Math.random() * goldColors.length)],
      wireframe: true,
      transparent: true,
      opacity: 0.06 + Math.random() * 0.1
    });
    var geo;
    var r = Math.random();
    if(r < 0.35) geo = new THREE.TorusGeometry(0.15 + Math.random() * 0.15, 0.04 + Math.random() * 0.03, 8, 12);
    else if(r < 0.55) geo = new THREE.ConeGeometry(0.1 + Math.random() * 0.12, 0.25 + Math.random() * 0.15, 6);
    else if(r < 0.75) geo = new THREE.CircleGeometry(0.18 + Math.random() * 0.15, 16);
    else if(r < 0.9) geo = new THREE.TorusKnotGeometry(0.1 + Math.random() * 0.08, 0.03 + Math.random() * 0.02, 24, 8);
    else geo = new THREE.RingGeometry(0.12 + Math.random() * 0.1, 0.16 + Math.random() * 0.12, 16);

    var mesh = new THREE.Mesh(geo, mat);
    mesh.position.set((Math.random() - 0.5) * 55, (Math.random() - 0.5) * 40, (Math.random() - 0.5) * 50 - 15);
    mesh.rotation.set(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, 0);
    var scale = 0.8 + Math.random() * 2.5;
    mesh.scale.set(scale, scale, scale);
    mesh.userData = {
      rotSpeedX: (Math.random() - 0.5) * 0.008,
      rotSpeedY: (Math.random() - 0.5) * 0.008,
      floatAmp: 0.1 + Math.random() * 0.3,
      floatFreq: 0.2 + Math.random() * 0.6,
      floatOffset: Math.random() * Math.PI * 2,
      startY: mesh.position.y
    };
    scene.add(mesh);
    shapes.push(mesh);
  }
  camera.position.z = 28;

  var mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', function(e){
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  var time = 0;
  var rafId = 0;
  function frame(){
    rafId = requestAnimationFrame(frame);
    time += 0.01;
    camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
    camera.position.y += (mouseY * 1.5 - camera.position.y) * 0.02;
    camera.lookAt(scene.position);
    for(var k = 0; k < shapes.length; k++){
      var m = shapes[k];
      m.rotation.x += m.userData.rotSpeedX;
      m.rotation.y += m.userData.rotSpeedY;
      m.position.y = m.userData.startY + Math.sin(time * m.userData.floatFreq + m.userData.floatOffset) * m.userData.floatAmp;
    }
    renderer.render(scene, camera);
  }
  function start(){ if(!rafId) frame(); }
  function stop(){ cancelAnimationFrame(rafId); rafId = 0; }

  if(reduceMotion){
    renderer.render(scene, camera); // static frame only
  } else {
    start();
    // Stop the render loop whenever the tab is hidden
    document.addEventListener('visibilitychange', function(){
      if(document.hidden) stop(); else start();
    });
  }

  var resizeTimer;
  window.addEventListener('resize', function(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function(){
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      if(reduceMotion) renderer.render(scene, camera);
    }, 150);
  });
}

(function loadThree(){
  function inject(){
    var s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    s.integrity = 'sha384-CI3ELBVUz9XQO+97x6nwMDPosPR5XvsxW2ua7N1Xeygeh1IxtgqtCkGfQY9WWdHu';
    s.crossOrigin = 'anonymous';
    s.referrerPolicy = 'no-referrer';
    s.async = true;
    s.onload = initThreeBackground;
    document.head.appendChild(s);
  }
  var schedule = function(){
    if('requestIdleCallback' in window) requestIdleCallback(inject, { timeout: 3000 });
    else setTimeout(inject, 1500);
  };
  if(document.readyState === 'complete') schedule();
  else window.addEventListener('load', schedule, { once: true });
})();

/* ===== SPLASH SCREEN ===== */
(function(){
  var splash = document.getElementById('splash');
  if(!splash) return;
  // Fade is pure CSS; just drop the node afterwards
  splash.addEventListener('animationend', function(){ splash.remove(); });
})();

/* ===== STICKY NAV ===== */
(function(){
  var nav = document.getElementById('sticky-nav');
  var hero = document.getElementById('hero');
  var header = document.getElementById('header');
  var sectionIds = ['hero', 'menu-circle-section', 'gallery', 'location', 'contatti'];
  var links = document.querySelectorAll('.sticky-links a');
  var ticking = false;

  function update(){
    ticking = false;
    var pastHero = hero.getBoundingClientRect().bottom < 80;
    nav.classList.toggle('visible', pastHero);
    header.classList.toggle('hidden', pastHero);

    var scrollPos = window.scrollY + 150;
    var activeId = 'hero';
    sectionIds.forEach(function(id){
      var s = document.getElementById(id);
      if(s && s.offsetTop <= scrollPos) activeId = id;
    });
    links.forEach(function(a){
      a.classList.toggle('active', a.getAttribute('href') === '#' + activeId);
    });
  }
  // rAF-throttled: layout reads happen at most once per frame
  window.addEventListener('scroll', function(){
    if(!ticking){ ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();

  document.querySelectorAll('.sticky-links a, .drawer-links a, .hero-cta a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    });
  });
})();

/* ===== MOBILE HAMBURGER ===== */
(function(){
  var btn = document.getElementById('hamburger-btn');
  var drawer = document.getElementById('mobile-drawer');
  var overlay = document.getElementById('drawer-overlay');

  function setOpen(open){
    drawer.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    lockScroll(open);
  }
  btn.addEventListener('click', function(){ setOpen(true); });
  document.getElementById('drawer-close').addEventListener('click', function(){ setOpen(false); });
  overlay.addEventListener('click', function(){ setOpen(false); });
  document.querySelectorAll('.drawer-links a').forEach(function(a){
    a.addEventListener('click', function(){ setOpen(false); });
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && drawer.classList.contains('open')) setOpen(false);
  });
})();

/* ===== LANGUAGE SWITCHER ===== */
document.querySelectorAll('.lang-btn').forEach(function(btn){
  btn.addEventListener('click', function(){ applyLanguage(this.getAttribute('data-lang')); });
});

/* ===== MODALS ===== */
function openModal(modal){
  modal.classList.add('active');
  lockScroll(true);
  var closeBtn = modal.querySelector('.modal-close');
  if(closeBtn) closeBtn.focus({ preventScroll: true });
}
function closeModal(modal){
  modal.classList.remove('active');
  lockScroll(false);
}
document.querySelectorAll('.modal-overlay').forEach(function(modal){
  modal.querySelector('.modal-close').addEventListener('click', function(){ closeModal(modal); });
  modal.addEventListener('click', function(e){ if(e.target === modal) closeModal(modal); });
});
// One shared Escape handler instead of one per modal
document.addEventListener('keydown', function(e){
  if(e.key !== 'Escape') return;
  document.querySelectorAll('.modal-overlay.active').forEach(closeModal);
});

/* ===== CIRCLE INTERACTIVE MENU ===== */
(function(){
  var circle = document.getElementById('menuCircle');
  var toggleBtn = document.getElementById('circleToggle');
  var panel = document.getElementById('circle-side-panel');
  var items = circle.querySelectorAll('.menu-circle-item');
  var isPaused = false;

  // Items sit at 72deg intervals; offsets come from the rendered size so mobile and desktop both line up
  function layout(){
    var itemSize = items[0].offsetWidth;
    var r = circle.offsetWidth / 2 - itemSize / 2;
    items.forEach(function(item, i){
      var rad = i * 72 * Math.PI / 180;
      item.style.setProperty('--tx', (Math.sin(rad) * r).toFixed(1) + 'px');
      item.style.setProperty('--ty', (-Math.cos(rad) * r).toFixed(1) + 'px');
    });
  }
  layout();
  var resizeTimer;
  window.addEventListener('resize', function(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layout, 150);
  });

  function setPaused(p){
    isPaused = p;
    circle.classList.toggle('paused', p);
    toggleBtn.replaceChildren(icon(p ? 'play' : 'pause'));
    toggleBtn.setAttribute('aria-pressed', p ? 'true' : 'false');
  }
  if(reduceMotion) setPaused(true);
  toggleBtn.addEventListener('click', function(){ setPaused(!isPaused); });

  var currentCat = null;
  items.forEach(function(item){
    item.addEventListener('click', function(){ showPanel(item.getAttribute('data-category')); });
  });
  document.getElementById('panelViewBtn').addEventListener('click', function(){
    if(currentCat) openMenuModal(currentCat);
  });

  function showPanel(cat){
    var data = menuData[cat];
    if(!data) return;
    currentCat = cat;
    document.getElementById('panelBadge').textContent = data.badge;
    document.getElementById('panelTitle').textContent = (i18n[currentLang]['cat_' + cat]) || data.badge;
    document.getElementById('panelDesc').textContent = data.desc;
    document.getElementById('panelPrice').textContent = data.price;
    panel.classList.add('visible');
    panel.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
  }
})();

/* ===== MENU MODAL ===== */
function openMenuModal(category){
  var data = menuData[category];
  if(!data) return;
  document.getElementById('menuModalTitle').textContent = i18n[currentLang]['cat_' + category] || category;

  var grid = document.getElementById('menuModalGrid');
  grid.replaceChildren();
  data.dishes.forEach(function(dish){
    var card = el('div', 'dish-card');
    var ph = el('div', 'dish-placeholder');
    ph.appendChild(icon(dish.icon));
    card.append(ph, el('div', 'dish-name', dish.name), el('div', 'dish-price', dish.price), el('div', 'dish-desc', data.badge));
    grid.appendChild(card);
  });

  openModal(document.getElementById('menuModal'));
  // Staggered entrance (spring easing lives in CSS)
  grid.querySelectorAll('.dish-card').forEach(function(card, i){
    setTimeout(function(){ card.classList.add('in'); }, 60 + i * 70);
  });
}

/* ===== COMBO MENUS ===== */
var comboIcons = { coppia: 'wine-glass', famiglia: 'people-group', amici: 'pizza-slice', chef: 'utensils' };

function renderCombos(){
  var grid = document.getElementById('comboGrid');
  var t = i18n[currentLang];
  grid.replaceChildren();

  comboData.forEach(function(combo, idx){
    var card = el('div', 'combo-card reveal');

    var media = el('div', 'combo-img combo-img--' + combo.id);
    var ic = icon(comboIcons[combo.id] || 'utensils');
    ic.classList.add('combo-icon');
    media.append(ic, el('h3', null, combo.name));

    var list = el('ul', 'combo-features');
    combo.items.forEach(function(it){ list.appendChild(el('li', null, it)); });

    var price = el('div', 'combo-price', combo.price + ' ');
    price.appendChild(el('small', null, combo.priceNote));

    var btn = el('button', 'combo-btn', t.combo_choose);
    btn.type = 'button';
    btn.addEventListener('click', function(){ openComboModal(idx); });

    var body = el('div', 'combo-body');
    body.append(list, price, btn);
    card.append(el('div', 'combo-ribbon', combo.ribbon), media, body);
    grid.appendChild(card);
    revealObserver.observe(card);
  });
}

function openComboModal(idx){
  var combo = comboData[idx];
  if(!combo) return;
  var t = i18n[currentLang];
  document.getElementById('comboModalTitle').textContent = combo.name;

  var body = document.getElementById('comboModalBody');
  var list = el('div', 'combo-detail-list');
  combo.items.forEach(function(it){
    var row = el('div', 'detail-row');
    var label = el('span', 'detail-label');
    label.append(icon('check'), document.createTextNode(it));
    row.appendChild(label);
    list.appendChild(row);
  });

  var people = combo.basePeople;
  var total = combo.baseCost;
  var totalEl = el('div', 'combo-total');
  function renderTotal(){
    if(combo.peopleEditable){
      totalEl.textContent = '€' + total + ' ';
      totalEl.appendChild(el('small', null, '(' + people + ' ' + (t.combo_people || 'persone') + ')'));
    } else {
      totalEl.textContent = combo.price + ' ';
      totalEl.appendChild(el('small', null, combo.priceNote));
    }
  }
  renderTotal();

  var nodes = [list];
  if(combo.peopleEditable){
    var selector = el('div', 'combo-people-selector');
    var minus = el('button'); minus.type = 'button'; minus.setAttribute('aria-label', '-1'); minus.appendChild(icon('minus'));
    var plus = el('button'); plus.type = 'button'; plus.setAttribute('aria-label', '+1'); plus.appendChild(icon('plus'));
    var countEl = el('span', null, String(people));
    countEl.setAttribute('aria-live', 'polite');
    function change(delta){
      var next = people + delta;
      if(next < combo.minPeople || next > combo.maxPeople) return;
      people = next;
      total = combo.baseCost + (people - combo.basePeople) * combo.extraPerPerson;
      countEl.textContent = people;
      renderTotal();
    }
    minus.addEventListener('click', function(){ change(-1); });
    plus.addEventListener('click', function(){ change(1); });
    selector.append(minus, countEl, plus);
    nodes.push(selector);
  }

  var note = el('textarea', 'combo-note-textarea');
  note.placeholder = t.reserve_notes;
  note.maxLength = 500;
  note.setAttribute('aria-label', t.reserve_notes);

  var waBtn = el('button', 'combo-wa-btn');
  waBtn.type = 'button';
  waBtn.append(icon('whatsapp', 'fab'), document.createTextNode(' Ordina Ora'));
  waBtn.addEventListener('click', function(){
    var msg = 'Ciao! Vorrei ordinare il ' + combo.name;
    if(combo.peopleEditable) msg += ' per ' + people + ' persone';
    msg += ' (€' + (combo.peopleEditable ? total : combo.baseCost) + ')';
    if(note.value.trim()) msg += '. Note: ' + note.value.trim();
    openWhatsApp(msg);
  });

  nodes.push(totalEl, note, waBtn);
  body.replaceChildren.apply(body, nodes);
  openModal(document.getElementById('comboModal'));
}

/* ===== GALLERY ===== */
(function(){
  var grid = document.getElementById('galleryGrid');
  var lightbox = document.getElementById('lightbox');
  var stage = document.getElementById('lbStage');
  var lbCounter = document.getElementById('lbCounter');
  var currentIdx = 0;
  var lastFocus = null;

  function placeholder(img){
    var ph = el('div', 'gallery-placeholder');
    ph.append(icon(img.icon), el('span', null, img.label));
    return ph;
  }

  function media(img, eager){
    if(!img.url) return placeholder(img);
    var image = el('img');
    image.src = img.url;
    image.alt = img.label;
    image.width = 600;
    image.height = 600;
    image.decoding = 'async';
    if(!eager) image.loading = 'lazy';
    return image;
  }

  galleryImages.forEach(function(img, i){
    var item = el('button', 'gallery-item');
    item.type = 'button';
    item.setAttribute('aria-label', img.label);
    var overlay = el('div', 'gallery-overlay');
    overlay.appendChild(icon('magnifying-glass-plus'));
    item.append(media(img, false), overlay);
    item.addEventListener('click', function(){ openLightbox(i); });
    grid.appendChild(item);
  });

  function show(idx){
    currentIdx = (idx + galleryImages.length) % galleryImages.length;
    stage.replaceChildren(media(galleryImages[currentIdx], true));
    lbCounter.textContent = (currentIdx + 1) + ' / ' + galleryImages.length;
  }
  function openLightbox(idx){
    lastFocus = document.activeElement;
    show(idx);
    lightbox.classList.add('active');
    lockScroll(true);
    document.getElementById('lbClose').focus({ preventScroll: true });
  }
  function closeLightbox(){
    lightbox.classList.remove('active');
    lockScroll(false);
    if(lastFocus) lastFocus.focus({ preventScroll: true });
  }

  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbPrev').addEventListener('click', function(){ show(currentIdx - 1); });
  document.getElementById('lbNext').addEventListener('click', function(){ show(currentIdx + 1); });
  lightbox.addEventListener('click', function(e){ if(e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', function(e){
    if(!lightbox.classList.contains('active')) return;
    if(e.key === 'Escape') closeLightbox();
    else if(e.key === 'ArrowLeft') show(currentIdx - 1);
    else if(e.key === 'ArrowRight') show(currentIdx + 1);
  });

  // Touch swipe
  var touchX = null;
  lightbox.addEventListener('touchstart', function(e){ touchX = e.changedTouches[0].clientX; }, { passive: true });
  lightbox.addEventListener('touchend', function(e){
    if(touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if(Math.abs(dx) > 50) show(currentIdx + (dx < 0 ? 1 : -1));
  }, { passive: true });
})();

/* ===== RESERVATION FORM ===== */
var STORAGE_KEY = 'labonta_reservations';
function loadReservations(){
  try{
    var data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(data) ? data : [];
  }catch(e){
    return [];
  }
}

(function(){
  var modal = document.getElementById('reserveModal');
  var form = document.getElementById('reserveForm');
  var successDiv = document.getElementById('reserveSuccess');
  var dateInput = document.getElementById('reserveDate');
  var timeSelect = document.getElementById('reserveTime');
  var nameInput = document.getElementById('reserveName');
  var phoneInput = document.getElementById('reservePhone');
  var emailInput = document.getElementById('reserveEmail');
  var notesInput = document.getElementById('reserveNotes');
  var guestCount = document.getElementById('guestCount');
  var waConfirm = document.getElementById('reserveWaConfirm');
  var guests = 2;

  nameInput.maxLength = 80;
  phoneInput.maxLength = 20;
  emailInput.maxLength = 120;
  notesInput.maxLength = 500;
  nameInput.autocomplete = 'name';
  phoneInput.autocomplete = 'tel';
  emailInput.autocomplete = 'email';

  // Date range: tomorrow .. +30 days
  function initDates(){
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    dateInput.min = isoDate(tomorrow);
    dateInput.max = isoDate(maxDate);
    if(!dateInput.value) dateInput.value = isoDate(tomorrow);
    populateTimes();
  }

  function addOption(value, label, disabled){
    var opt = el('option', null, label);
    opt.value = value;
    if(disabled){ opt.disabled = true; opt.selected = true; }
    timeSelect.appendChild(opt);
  }

  function populateTimes(){
    timeSelect.replaceChildren();
    addOption('', i18n[currentLang].reserve_time_placeholder || 'Seleziona ora', true);
    var slots = [];
    for(var h = 12; h <= 15; h++) for(var m = 0; m < 60; m += 30) if(!(h === 15 && m > 0)) slots.push([h, m]);
    for(var h2 = 18; h2 <= 22; h2++) for(var m2 = 0; m2 < 60; m2 += 30) slots.push([h2, m2]);
    slots.forEach(function(s){
      var t = ('0' + s[0]).slice(-2) + ':' + ('0' + s[1]).slice(-2);
      addOption(t, t, false);
    });
    timeSelect.value = '19:30';
  }

  function setGuests(n){
    guests = Math.max(1, Math.min(20, n));
    guestCount.textContent = guests;
  }
  document.getElementById('guestMinus').addEventListener('click', function(){ setGuests(guests - 1); });
  document.getElementById('guestPlus').addEventListener('click', function(){ setGuests(guests + 1); });

  document.getElementById('openReserveBtn').addEventListener('click', function(){
    initDates();
    var last = loadReservations().slice(-1)[0];
    if(last){
      if(last.name) nameInput.value = String(last.name);
      if(last.phone) phoneInput.value = String(last.phone);
      if(last.email) emailInput.value = String(last.email);
    }
    successDiv.classList.remove('show');
    form.hidden = false;
    openModal(modal);
  });

  // Clear custom validity as soon as the user edits the field
  [nameInput, phoneInput].forEach(function(input){
    input.addEventListener('input', function(){ input.setCustomValidity(''); });
  });

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = nameInput.value.trim();
    var phone = phoneInput.value.trim();
    var email = emailInput.value.trim();
    var notes = notesInput.value.trim();

    var digits = phone.replace(/[\s\-().]/g, '');
    var phoneOk = /^(\+39)?(3\d{8,9}|0\d{5,10})$/.test(digits) || /^\+\d{8,15}$/.test(digits);
    nameInput.setCustomValidity(name.length < 2 ? 'Inserisci il tuo nome' : '');
    phoneInput.setCustomValidity(phoneOk ? '' : 'Inserisci un numero di telefono valido');
    if(!form.reportValidity()) return;

    var reservation = {
      id: Date.now(),
      date: dateInput.value,
      time: timeSelect.value,
      guests: guests,
      name: name,
      phone: phone,
      email: email,
      notes: notes,
      created: new Date().toISOString()
    };
    var reservations = loadReservations();
    reservations.push(reservation);
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations)); }catch(err){ /* storage full or blocked */ }

    form.hidden = true;
    successDiv.classList.add('show');

    var msg = 'Ciao! Confermo la prenotazione per ' + name + '.\nData: ' + reservation.date + '\nOra: ' + reservation.time + '\nOspiti: ' + guests;
    if(notes) msg += '\nNote: ' + notes;
    waConfirm.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);

    form.reset();
    setGuests(2);
  });

  initDates();
})();

/* ===== WHATSAPP FAB ===== */
(function(){
  var fabBtn = document.getElementById('waFabBtn');
  var waMenu = document.getElementById('wa-menu');

  function setOpen(open){
    waMenu.classList.toggle('open', open);
    fabBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  fabBtn.setAttribute('aria-haspopup', 'true');
  fabBtn.addEventListener('click', function(){ setOpen(!waMenu.classList.contains('open')); });

  document.getElementById('waReserve').addEventListener('click', function(){
    setOpen(false);
    document.getElementById('openReserveBtn').click();
  });
  document.getElementById('waTakeaway').addEventListener('click', function(){
    setOpen(false);
    openWhatsApp('Ciao! Vorrei ordinare da asporto. Potreste mandarmi il menu del giorno? Grazie!');
  });
  document.getElementById('waInfo').addEventListener('click', function(){
    setOpen(false);
    openWhatsApp('Ciao! Vorrei ricevere informazioni su orari, menu e disponibilità. Grazie!');
  });
  document.addEventListener('click', function(e){
    if(waMenu.classList.contains('open') && !fabBtn.contains(e.target) && !waMenu.contains(e.target)) setOpen(false);
  });
})();

/* ===== ADMIN PANEL (?admin=true) ===== */
// Reservation fields are user-entered, so they are rendered strictly as text.
(function(){
  if(new URLSearchParams(window.location.search).get('admin') !== 'true') return;
  var panel = document.getElementById('adminPanel');
  var container = document.getElementById('adminTableContainer');
  panel.hidden = false;

  var reservations = loadReservations();
  if(reservations.length === 0){
    container.replaceChildren(el('p', 'admin-empty', 'Nessuna prenotazione trovata.'));
    return;
  }
  var cols = ['id', 'date', 'time', 'guests', 'name', 'phone', 'email', 'notes'];
  var heads = ['ID', 'Data', 'Ora', 'Ospiti', 'Nome', 'Telefono', 'Email', 'Note'];
  var table = el('table', 'admin-table');
  var headRow = el('tr');
  heads.forEach(function(h){ headRow.appendChild(el('th', null, h)); });
  table.appendChild(el('thead')).appendChild(headRow);
  var tbody = table.appendChild(el('tbody'));
  reservations.forEach(function(r){
    var tr = el('tr');
    cols.forEach(function(c){
      var v = r && r[c] != null && r[c] !== '' ? String(r[c]) : '-';
      tr.appendChild(el('td', null, v));
    });
    tbody.appendChild(tr);
  });
  container.replaceChildren(table);
})();

/* ===== INIT ===== */
applyLanguage('it');
