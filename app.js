// Food Categories Data (for the circle)
const categories = {
  antipasti: {
    title: "Antipasti",
    subtitle: "Starters",
    badge: "Antipasti",
    desc: "Una selezione raffinata di antipasti tradizionali italiani, preparati con ingredienti freschi ogni giorno.",
    items: [
      { name: "Bruschetta al Pomodoro", price: 6, image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80&w=800" },
      { name: "Carpaccio di Manzo", price: 12, image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&q=80&w=800" },
      { name: "Antipasto di Mare", price: 14, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800" },
      { name: "Caprese con Burrata", price: 10, image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=800" },
      { name: "Fritto Misto", price: 12, image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&q=80&w=800" },
      { name: "Tagliere di Salumi e Formaggi", price: 16, image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&q=80&w=800" }
    ],
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80&w=800",
    color: "#c9a14a"
  },
  primi: {
    title: "Primi Piatti",
    subtitle: "Pasta Fresca",
    badge: "Pasta",
    desc: "Pasta fatta in casa ogni giorno, con ricette tradizionali dal cuore d'Italia.",
    items: [
      { name: "Spaghetti alle Vongole", price: 14, image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=800" },
      { name: "Pasta allo Scoglio", price: 16, image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&q=80&w=800" },
      { name: "Carbonara Tradizionale", price: 12, image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=800" },
      { name: "Amatriciana", price: 12, image: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?auto=format&fit=crop&q=80&w=800" },
      { name: "Cacio e Pepe", price: 11, image: "https://images.unsplash.com/photo-1673442632802-a083e2e2f581?auto=format&fit=crop&q=80&w=800" },
      { name: "Lasagna della Casa", price: 13, image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=800" }
    ],
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=800",
    color: "#d4b356"
  },
  secondi: {
    title: "Secondi Piatti",
    subtitle: "Main Courses",
    badge: "Secondi",
    desc: "Piatti principali preparati con cura, usando le migliori carni e pesci freschi.",
    items: [
      { name: "Filetto di Orata in Crosta", price: 18, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800" },
      { name: "Grigliata di Pesce", price: 22, image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&q=80&w=800" },
      { name: "Tagliata di Manzo", price: 20, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" },
      { name: "Saltimbocca alla Romana", price: 18, image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&q=80&w=800" },
      { name: "Pollo alla Cacciatora", price: 15, image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=800" },
      { name: "Polpo alla Griglia", price: 19, image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&q=80&w=800" }
    ],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    color: "#b8943e"
  },
  pizza: {
    title: "Pizza",
    subtitle: "Wood-Fired",
    badge: "Pizza",
    desc: "Pizza cotta nel forno a legna, con impasto lievitato 48 ore e ingredienti di prima qualità.",
    items: [
      { name: "Margherita", price: 7, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800" },
      { name: "Marinara", price: 6, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800" },
      { name: "Diavola", price: 9, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800" },
      { name: "Quattro Formaggi", price: 10, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800" },
      { name: "Capricciosa", price: 10, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=800" },
      { name: "Pizza al Tegamino", price: 8, image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=800" }
    ],
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800",
    color: "#e85d04"
  },
  dolci: {
    title: "Dolci",
    subtitle: "Desserts",
    badge: "Dolci",
    desc: "Dolci italiani tradizionali, il finale perfetto per un'esperienza culinaria indimenticabile.",
    items: [
      { name: "Tiramisù della Casa", price: 6, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800" },
      { name: "Panna Cotta", price: 5, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800" },
      { name: "Cannoli Siciliani", price: 5, image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800" },
      { name: "Torta della Nonna", price: 6, image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800" },
      { name: "Affogato al Caffè", price: 5, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=800" },
      { name: "Semifreddo al Limone", price: 6, image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800" }
    ],
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800",
    color: "#ffd700"
  }
};

// Combos Data (for the cards section)
const combos = {
  couples: {
    title: "Menu Coppia",
    subtitle: "Romantico per 2",
    badge: "Romantico",
    desc: "Un'esperienza intima e raffinata, perfetta per due. Ideale per una serata romantica.",
    items: [
      { name: "Antipasto di Mare per 2", price: 24, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800" },
      { name: "Pasta allo Scoglio × 2", price: 32, image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&q=80&w=800" },
      { name: "Vino della Casa (1 bottiglia)", price: 18, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800" },
      { name: "Tiramisù × 2", price: 12, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800" },
      { name: "Caffè × 2", price: 4, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800" }
    ],
    total: 90,
    originalPrice: 108,
    people: 2,
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=800",
    color: "#c9a14a"
  },
  family: {
    title: "Menu Famiglia",
    subtitle: "Abbondante e Conviviale",
    badge: "Famiglia",
    desc: "Abbondante, caldo e da condividere in famiglia. Piatti tradizionali che parlano d'amore e casa.",
    items: [
      { name: "Tagliere Misto Grande", price: 22, image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&q=80&w=800" },
      { name: "Lasagna della Casa × 2", price: 26, image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=800" },
      { name: "Grigliata Mista di Carne", price: 38, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" },
      { name: "Contorni Misti", price: 12, image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&q=80&w=800" },
      { name: "Vino della Casa (2 bottiglie)", price: 36, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800" },
      { name: "Dolci Assortiti × 4", price: 22, image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800" }
    ],
    totalBase: 156,
    originalPrice: 180,
    basePeople: 4,
    minPeople: 3,
    maxPeople: 8,
    pricePerExtraPerson: 35,
    image: "https://images.unsplash.com/photo-1517248135467-2c7ed3ab7229?auto=format&fit=crop&q=80&w=800",
    color: "#d4b356"
  },
  friends: {
    title: "Menu Amici",
    subtitle: "Condivisione e Allegria",
    badge: "Gruppo",
    desc: "Varietà e divertimento — perfetto per celebrare insieme! Il prezzo si adatta al vostro gruppo.",
    items: [
      { name: "Bruschette Miste da Condividere", price: 18, fixed: true, image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80&w=800" },
      { name: "Pizza Assortita (3 gusti)", price: 27, fixed: true, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800" },
      { name: "Fritto Misto", price: 24, fixed: true, image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&q=80&w=800" },
      { name: "Birra Media", price: 5, perPerson: true, image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=800" },
      { name: "Dolce a Scelta", price: 5, perPerson: true, image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800" }
    ],
    totalBase: 69,
    basePeople: 4,
    minPeople: 3,
    maxPeople: 12,
    pricePerPerson: 10,
    image: "https://images.unsplash.com/photo-1529543544277-750e320c3317?auto=format&fit=crop&q=80&w=800",
    color: "#b8943e"
  },
  chef: {
    title: "Selezione dello Chef",
    subtitle: "Il Meglio del Menu",
    badge: "Consigliato",
    desc: "Una selezione dei piatti migliori scelti dal nostro chef. Esperienza culinaria completa.",
    items: [
      { name: "Antipasto dello Chef", price: 14, image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&q=80&w=800" },
      { name: "Primo del Giorno", price: 14, image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=800" },
      { name: "Secondo con Contorno", price: 20, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" },
      { name: "Calice di Vino", price: 6, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800" },
      { name: "Dolce della Casa", price: 6, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800" },
      { name: "Caffè", price: 2, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800" }
    ],
    total: 62,
    originalPrice: 72,
    people: 1,
    perPerson: true,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
    color: "#ffd700"
  }
};

// Translations
const translations = {
  it: {
    heroSubtitle: "Ristorante Italiano",
    exploreBtn: "Esplora il Menu",
    directionsBtn: "Come Raggiungerci",
    sectionTitle: "Il Nostro",
    sectionTitleHighlight: "Menu",
    sectionSubtitle: "Clicca sulle icone per scoprire le nostre categorie culinarie",
    combosTitle: "I Nostri",
    combosTitleHighlight: "Menu Speciali",
    combosSubtitle: "Esperienze complete curate dai nostri chef",
    viewDetails: "Vedi Menu",
    viewMenu: "Vedi Menu",
    selectCategory: "Seleziona una Categoria",
    selectCategoryDesc: "Clicca su una delle icone per scoprire i piatti di ogni categoria",
    priceLabel: "Prezzo:",
    dishesAvailable: "piatti disponibili",
    locationTitle: "Vieni a",
    locationTitleHighlight: "Trovarci",
    addressLabel: "Indirizzo",
    hoursLabel: "Orari di Apertura",
    bookingLabel: "Prenotazioni",
    getDirections: "Ottieni Indicazioni",
    orderNow: "Ordina Ora",
    close: "Chiudi",
    description: "Descrizione",
    availableDishes: "I Piatti Disponibili",
    menuIncludes: "Il Menu Include",
    prices: "Prezzi",
    total: "Totale",
    numberOfPeople: "Numero di Persone",
    people: "persone",
    person: "persona",
    perPerson: "a persona",
    customizeNote: "Se desideri modificare qualcosa nell'offerta come bevande o piatti, chiedi pure al cameriere.",
    savings: "Risparmi",
    lunch: "Pranzo",
    dinner: "Cena",
    openDaily: "Aperto tutti i giorni",
    featured: "Consigliato",
    romantic: "Romantico",
    forFamily: "Per la Famiglia",
    forGroup: "Per il Gruppo",
    chefSelection: "Selezione Chef",
    chooseThis: "Scegli Questo",
    forTwoPeople: "per 2 persone",
    fromPeople: "da",
    basePlusPerson: "base + persona"
  },
  en: {
    heroSubtitle: "Italian Restaurant",
    exploreBtn: "Explore Menu",
    directionsBtn: "Get Directions",
    sectionTitle: "Our",
    sectionTitleHighlight: "Menu",
    sectionSubtitle: "Click on the icons to discover our culinary categories",
    combosTitle: "Our",
    combosTitleHighlight: "Menus",
    combosSubtitle: "Complete experiences curated by our chefs",
    viewDetails: "View Menu",
    viewMenu: "View Menu",
    selectCategory: "Select a Category",
    selectCategoryDesc: "Click on one of the icons to discover the dishes in each category",
    priceLabel: "Price:",
    dishesAvailable: "dishes available",
    locationTitle: "Come",
    locationTitleHighlight: "Visit Us",
    addressLabel: "Address",
    hoursLabel: "Opening Hours",
    bookingLabel: "Reservations",
    getDirections: "Get Directions",
    orderNow: "Order Now",
    close: "Close",
    description: "Description",
    availableDishes: "Available Dishes",
    menuIncludes: "Menu Includes",
    prices: "Prices",
    total: "Total",
    numberOfPeople: "Number of People",
    people: "people",
    person: "person",
    perPerson: "per person",
    customizeNote: "If you wish to change anything in the offer like drinks or dishes, just ask your waiter.",
    savings: "You Save",
    lunch: "Lunch",
    dinner: "Dinner",
    openDaily: "Open every day",
    featured: "Featured",
    romantic: "Romantic",
    forFamily: "For Family",
    forGroup: "For Groups",
    chefSelection: "Chef's Selection",
    chooseThis: "Choose This",
    forTwoPeople: "for 2 people",
    fromPeople: "from",
    basePlusPerson: "base + person"
  },
  fr: {
    heroSubtitle: "Restaurant Italien",
    exploreBtn: "Explorer le Menu",
    directionsBtn: "Comment Nous Rejoindre",
    sectionTitle: "Notre",
    sectionTitleHighlight: "Menu",
    sectionSubtitle: "Cliquez sur les icônes pour découvrir nos catégories culinaires",
    combosTitle: "Nos",
    combosTitleHighlight: "Menus",
    combosSubtitle: "Expériences complètes créées par nos chefs",
    viewDetails: "Voir le Menu",
    viewMenu: "Voir le Menu",
    selectCategory: "Sélectionnez une Catégorie",
    selectCategoryDesc: "Cliquez sur l'une des icônes pour découvrir les plats de chaque catégorie",
    priceLabel: "Prix:",
    dishesAvailable: "plats disponibles",
    locationTitle: "Venez Nous",
    locationTitleHighlight: "Voir",
    addressLabel: "Adresse",
    hoursLabel: "Heures d'Ouverture",
    bookingLabel: "Réservations",
    getDirections: "Obtenir l'Itinéraire",
    orderNow: "Commander",
    close: "Fermer",
    description: "Description",
    availableDishes: "Plats Disponibles",
    menuIncludes: "Le Menu Comprend",
    prices: "Prix",
    total: "Total",
    numberOfPeople: "Nombre de Personnes",
    people: "personnes",
    person: "personne",
    perPerson: "par personne",
    customizeNote: "Si vous souhaitez modifier quelque chose dans l'offre comme les boissons ou les plats, demandez simplement à votre serveur.",
    savings: "Vous Économisez",
    lunch: "Déjeuner",
    dinner: "Dîner",
    openDaily: "Ouvert tous les jours",
    featured: "Recommandé",
    romantic: "Romantique",
    forFamily: "Pour la Famille",
    forGroup: "Pour les Groupes",
    chefSelection: "Sélection du Chef",
    chooseThis: "Choisir",
    forTwoPeople: "pour 2 personnes",
    fromPeople: "à partir de",
    basePlusPerson: "base + personne"
  },
  de: {
    heroSubtitle: "Italienisches Restaurant",
    exploreBtn: "Menü Erkunden",
    directionsBtn: "Anfahrt",
    sectionTitle: "Unser",
    sectionTitleHighlight: "Menü",
    sectionSubtitle: "Klicken Sie auf die Symbole, um unsere kulinarischen Kategorien zu entdecken",
    combosTitle: "Unsere",
    combosTitleHighlight: "Menüs",
    combosSubtitle: "Komplette Erlebnisse von unseren Köchen kuratiert",
    viewDetails: "Menü Ansehen",
    viewMenu: "Menü Ansehen",
    selectCategory: "Wählen Sie eine Kategorie",
    selectCategoryDesc: "Klicken Sie auf eines der Symbole, um die Gerichte jeder Kategorie zu entdecken",
    priceLabel: "Preis:",
    dishesAvailable: "Gerichte verfügbar",
    locationTitle: "Besuchen",
    locationTitleHighlight: "Sie Uns",
    addressLabel: "Adresse",
    hoursLabel: "Öffnungszeiten",
    bookingLabel: "Reservierungen",
    getDirections: "Wegbeschreibung",
    orderNow: "Jetzt Bestellen",
    close: "Schließen",
    description: "Beschreibung",
    availableDishes: "Verfügbare Gerichte",
    menuIncludes: "Das Menü Enthält",
    prices: "Preise",
    total: "Gesamt",
    numberOfPeople: "Anzahl der Personen",
    people: "Personen",
    person: "Person",
    perPerson: "pro Person",
    customizeNote: "Wenn Sie etwas am Angebot ändern möchten, wie Getränke oder Gerichte, fragen Sie einfach Ihren Kellner.",
    savings: "Sie Sparen",
    lunch: "Mittagessen",
    dinner: "Abendessen",
    openDaily: "Täglich geöffnet",
    featured: "Empfohlen",
    romantic: "Romantisch",
    forFamily: "Für die Familie",
    forGroup: "Für Gruppen",
    chefSelection: "Auswahl des Küchenchefs",
    chooseThis: "Auswählen",
    forTwoPeople: "für 2 Personen",
    fromPeople: "ab",
    basePlusPerson: "Basis + Person"
  }
};

// Current language
let currentLang = 'it';

// DOM Elements
let mainCircle, circleItems, toggleRotation, rotationIcon;
let selectedTitle, selectedBadge, selectedDesc, selectedPrice, viewDetailsBtn;
let modal, modalOverlay, modalClose, modalTitle, modalBadge, modalSubtitle, modalDesc, modalImage;
let menuItems, modalTotal, totalPeople, closeModalBtn, reserveBtn;
let peopleSection, peopleSelect, decreasePeople, increasePeople;
let circleNavPrev, circleNavNext, customizeNote;

// State
let currentCategory = null;
let currentCombo = null;
let currentModalType = null;
let currentRotation = true;
let rotationDegree = 0;
let selectedPeople = 4;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Get DOM elements
  mainCircle = document.getElementById('mainCircle');
  circleItems = document.querySelectorAll('.circle-item');
  toggleRotation = document.getElementById('toggleRotation');
  rotationIcon = document.getElementById('rotationIcon');
  selectedTitle = document.getElementById('selectedTitle');
  selectedBadge = document.getElementById('selectedBadge');
  selectedDesc = document.getElementById('selectedDesc');
  selectedPrice = document.getElementById('selectedPrice');
  viewDetailsBtn = document.getElementById('viewDetailsBtn');
  modal = document.getElementById('comboModal');
  modalOverlay = document.querySelector('.modal-overlay');
  modalClose = document.getElementById('modalClose');
  modalTitle = document.getElementById('modalTitle');
  modalBadge = document.getElementById('modalBadge');
  modalSubtitle = document.getElementById('modalSubtitle');
  modalDesc = document.getElementById('modalDesc');
  modalImage = document.getElementById('modalImage');
  menuItems = document.getElementById('menuItems');
  modalTotal = document.getElementById('modalTotal');
  totalPeople = document.getElementById('totalPeople');
  closeModalBtn = document.getElementById('closeModalBtn');
  reserveBtn = document.getElementById('reserveBtn');
  peopleSection = document.getElementById('peopleSection');
  peopleSelect = document.getElementById('peopleSelect');
  decreasePeople = document.getElementById('decreasePeople');
  increasePeople = document.getElementById('increasePeople');
  circleNavPrev = document.querySelector('.circle-nav.prev');
  circleNavNext = document.querySelector('.circle-nav.next');
  customizeNote = document.getElementById('customizeNote');

  // Remove splash screen
  setTimeout(() => {
    const splash = document.getElementById('splash');
    if (splash) {
      splash.style.opacity = '0';
      splash.style.transition = 'opacity 0.8s ease';
      setTimeout(() => {
        splash.style.display = 'none';
      }, 800);
    }
  }, 2000);

  // Initialize
  initCircleItems();
  initLanguageSwitcher();
  initComboCards();
  
  // Set default selection
  setTimeout(() => {
    selectCategory('antipasti');
  }, 1000);
});

function initCircleItems() {
  // Circle item click handlers
  circleItems.forEach(item => {
    item.addEventListener('click', () => {
      const category = item.dataset.category;
      selectCategory(category);
    });
  });

  // Circle navigation
  if (circleNavPrev) circleNavPrev.addEventListener('click', rotateCircleLeft);
  if (circleNavNext) circleNavNext.addEventListener('click', rotateCircleRight);

  // Toggle rotation
  if (toggleRotation) {
    toggleRotation.addEventListener('click', () => {
      currentRotation = !currentRotation;
      if (currentRotation) {
        mainCircle.style.animationPlayState = 'running';
        rotationIcon.className = 'fas fa-pause';
      } else {
        mainCircle.style.animationPlayState = 'paused';
        rotationIcon.className = 'fas fa-play';
      }
    });
  }

  // Explore button
  const exploreBtnEl = document.getElementById('explore-btn');
  if (exploreBtnEl) {
    exploreBtnEl.addEventListener('click', () => {
      const target = document.querySelector('.circle-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // View details button (for categories)
  if (viewDetailsBtn) {
    viewDetailsBtn.addEventListener('click', () => {
      if (currentCategory) {
        showCategoryModal(currentCategory);
      }
    });
  }

  // Modal controls
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

  // People selector
  if (decreasePeople) {
    decreasePeople.addEventListener('click', () => {
      if (!currentCombo) return;
      const combo = combos[currentCombo];
      const minPeople = combo.minPeople || 2;
      if (selectedPeople > minPeople) {
        selectedPeople--;
        if (peopleSelect) peopleSelect.value = selectedPeople;
        updateComboTotal();
      }
    });
  }

  if (increasePeople) {
    increasePeople.addEventListener('click', () => {
      if (!currentCombo) return;
      const combo = combos[currentCombo];
      const maxPeople = combo.maxPeople || 10;
      if (selectedPeople < maxPeople) {
        selectedPeople++;
        if (peopleSelect) peopleSelect.value = selectedPeople;
        updateComboTotal();
      }
    });
  }

  if (peopleSelect) {
    peopleSelect.addEventListener('change', (e) => {
      selectedPeople = parseInt(e.target.value);
      updateComboTotal();
    });
  }

  // Reserve button
  if (reserveBtn) {
    reserveBtn.addEventListener('click', () => {
      let message = '';
      if (currentModalType === 'combo' && currentCombo) {
        message = `Grazie! Hai scelto ${combos[currentCombo].title}!\nUn cameriere arriverà presto per prendere il tuo ordine.`;
      } else if (currentCategory) {
        message = `Grazie! Hai scelto dalla categoria ${categories[currentCategory].title}!\nUn cameriere arriverà presto.`;
      }
      alert(message);
      closeModal();
    });
  }
}

function initComboCards() {
  const cardButtons = document.querySelectorAll('.card-button');
  cardButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const combo = e.currentTarget.dataset.combo;
      if (combo) {
        showComboModal(combo);
      }
    });
  });
}

function initLanguageSwitcher() {
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lang-switch button').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      currentLang = btn.dataset.lang;
      updateLanguage();
    });
  });
}

function selectCategory(categoryKey) {
  currentCategory = categoryKey;
  const category = categories[categoryKey];
  if (!category) return;
  
  // Update selection display
  if (selectedTitle) selectedTitle.textContent = category.title;
  if (selectedBadge) selectedBadge.textContent = category.badge;
  if (selectedDesc) selectedDesc.textContent = category.desc;
  
  // Calculate price range
  if (selectedPrice) {
    const prices = category.items.map(item => item.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    selectedPrice.textContent = `€${minPrice} - €${maxPrice}`;
  }
  
  // Enable view details button
  if (viewDetailsBtn) viewDetailsBtn.disabled = false;
  
  // Update active state
  circleItems.forEach(item => {
    item.classList.remove('active');
    if (item.dataset.category === categoryKey) {
      item.classList.add('active');
    }
  });
}

function showCategoryModal(categoryKey) {
  currentModalType = 'category';
  currentCategory = categoryKey;
  const category = categories[categoryKey];
  if (!category) return;
  
  const t = translations[currentLang];
  
  // Update modal content
  if (modalTitle) modalTitle.textContent = category.title;
  if (modalBadge) modalBadge.textContent = category.badge;
  if (modalSubtitle) modalSubtitle.textContent = category.subtitle;
  if (modalDesc) modalDesc.textContent = category.desc;
  if (modalImage) modalImage.style.backgroundImage = `url('${category.image}')`;
  
  // Hide people selector and customize note for categories
  if (peopleSection) peopleSection.style.display = 'none';
  if (customizeNote) customizeNote.style.display = 'none';
  
  // Calculate price range
  const prices = category.items.map(item => item.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  if (modalTotal) modalTotal.textContent = `€${minPrice} - €${maxPrice}`;
  if (totalPeople) totalPeople.textContent = `${category.items.length} ${t.dishesAvailable}`;
  
  // Update menu section title
  const menuSectionTitle = document.querySelector('#menuItems')?.closest('.details-section')?.querySelector('h3');
  if (menuSectionTitle) {
    menuSectionTitle.innerHTML = `<i class="fas fa-utensils"></i> ${t.availableDishes}`;
  }
  
  // Update total section label
  const totalLabel = document.querySelector('.total-label span:first-child');
  if (totalLabel) totalLabel.textContent = t.prices;
  
  // Update menu items with clickable buttons
  if (menuItems) {
    menuItems.innerHTML = category.items.map((item, index) => `
      <div class="menu-item clickable" data-image="${item.image}" data-index="${index}">
        <div class="item-info">
          <span class="item-name">${item.name}</span>
          <span class="item-price">€${item.price}</span>
        </div>
        <button class="item-view-btn" title="Visualizza">
          <i class="fas fa-eye"></i>
        </button>
      </div>
    `).join('');
    
    // Add click handlers for menu items
    document.querySelectorAll('.menu-item.clickable').forEach(item => {
      item.addEventListener('click', () => {
        const imageUrl = item.dataset.image;
        if (imageUrl && modalImage) {
          modalImage.style.backgroundImage = `url('${imageUrl}')`;
          // Add animation
          modalImage.classList.add('image-change');
          setTimeout(() => modalImage.classList.remove('image-change'), 300);
        }
        // Highlight selected item
        document.querySelectorAll('.menu-item.clickable').forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
      });
    });
  }
  
  openModal();
}

function showComboModal(comboKey) {
  currentModalType = 'combo';
  currentCombo = comboKey;
  const combo = combos[comboKey];
  if (!combo) return;
  
  const t = translations[currentLang];
  
  // Update modal content
  if (modalTitle) modalTitle.textContent = combo.title;
  if (modalBadge) modalBadge.textContent = combo.badge;
  if (modalSubtitle) modalSubtitle.textContent = combo.subtitle;
  if (modalDesc) modalDesc.textContent = combo.desc;
  if (modalImage) modalImage.style.backgroundImage = `url('${combo.image}')`;
  
  // Show customize note for combos
  if (customizeNote) {
    customizeNote.style.display = 'block';
    customizeNote.innerHTML = `<i class="fas fa-info-circle"></i><span>${t.customizeNote}</span>`;
  }
  
  // Update menu section title
  const menuSectionTitle = document.querySelector('#menuItems')?.closest('.details-section')?.querySelector('h3');
  if (menuSectionTitle) {
    menuSectionTitle.innerHTML = `<i class="fas fa-utensils"></i> ${t.menuIncludes}`;
  }
  
  // Update total section label
  const totalLabel = document.querySelector('.total-label span:first-child');
  if (totalLabel) totalLabel.textContent = t.total;
  
  // Show/hide people selector based on combo type
  if (combo.minPeople && combo.maxPeople) {
    if (peopleSection) {
      peopleSection.style.display = 'block';
      
      if (peopleSelect) {
        peopleSelect.innerHTML = '';
        for (let i = combo.minPeople; i <= combo.maxPeople; i++) {
          const option = document.createElement('option');
          option.value = i;
          option.textContent = `${i} ${i === 1 ? t.person : t.people}`;
          if (i === combo.basePeople) option.selected = true;
          peopleSelect.appendChild(option);
        }
      }
      selectedPeople = combo.basePeople;
    }
    updateComboTotal();
  } else {
    if (peopleSection) peopleSection.style.display = 'none';
    
    if (modalTotal) modalTotal.textContent = `€${combo.total}`;
    
    if (totalPeople) {
      if (combo.perPerson) {
        totalPeople.textContent = t.perPerson;
      } else {
        totalPeople.textContent = `${combo.people} ${combo.people === 1 ? t.person : t.people}`;
      }
    }
    
    // Update menu items with clickable buttons
    if (menuItems) {
      menuItems.innerHTML = combo.items.map((item, index) => `
        <div class="menu-item clickable" data-image="${item.image}" data-index="${index}">
          <div class="item-info">
            <span class="item-name">${item.name}</span>
            <span class="item-price">€${item.price}</span>
          </div>
          <button class="item-view-btn" title="Visualizza">
            <i class="fas fa-eye"></i>
          </button>
        </div>
      `).join('');
      
      // Add click handlers
      addMenuItemClickHandlers();
    }
  }
  
  openModal();
}

function addMenuItemClickHandlers() {
  document.querySelectorAll('.menu-item.clickable').forEach(item => {
    item.addEventListener('click', () => {
      const imageUrl = item.dataset.image;
      if (imageUrl && modalImage) {
        modalImage.style.backgroundImage = `url('${imageUrl}')`;
        modalImage.classList.add('image-change');
        setTimeout(() => modalImage.classList.remove('image-change'), 300);
      }
      document.querySelectorAll('.menu-item.clickable').forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');
    });
  });
}

function updateComboTotal() {
  if (!currentCombo) return;
  const combo = combos[currentCombo];
  if (!combo) return;
  
  const t = translations[currentLang];
  let total = 0;
  
  if (combo.pricePerExtraPerson) {
    const extraPeople = Math.max(0, selectedPeople - combo.basePeople);
    total = combo.totalBase + (extraPeople * combo.pricePerExtraPerson);
  } else if (combo.pricePerPerson) {
    total = combo.totalBase + (selectedPeople * combo.pricePerPerson);
  } else {
    total = combo.totalBase || combo.total;
  }
  
  if (modalTotal) modalTotal.textContent = `€${total}`;
  if (totalPeople) totalPeople.textContent = `${selectedPeople} ${t.people}`;
  
  if (menuItems) {
    menuItems.innerHTML = combo.items.map((item, index) => {
      let displayName = item.name;
      let displayPrice = item.price;
      
      if (item.perPerson) {
        displayName = `${item.name} × ${selectedPeople}`;
        displayPrice = item.price * selectedPeople;
      } else if (item.perTwoPeople) {
        const qty = Math.ceil(selectedPeople / 2);
        displayName = `${item.name} × ${qty}`;
        displayPrice = item.price * qty;
      }
      
      return `
        <div class="menu-item clickable" data-image="${item.image}" data-index="${index}">
          <div class="item-info">
            <span class="item-name">${displayName}</span>
            <span class="item-price">€${displayPrice}</span>
          </div>
          <button class="item-view-btn" title="Visualizza">
            <i class="fas fa-eye"></i>
          </button>
        </div>
      `;
    }).join('');
    
    // Add click handlers
    addMenuItemClickHandlers();
  }
}

function openModal() {
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    const container = document.querySelector('.modal-container');
    if (container) container.style.animation = 'slideUp 0.5s ease-out';
  }
}

function closeModal() {
  const container = document.querySelector('.modal-container');
  if (container) container.style.animation = 'slideUp 0.5s ease-out reverse';

  setTimeout(() => {
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    reapplyLangActive();
  }, 500);
}

function rotateCircleLeft() {
  rotationDegree -= 72;
  updateCircleRotation();
}

function rotateCircleRight() {
  rotationDegree += 72;
  updateCircleRotation();
}

function updateCircleRotation() {
  if (!mainCircle) return;
  mainCircle.style.transition = 'transform 0.5s ease-out';
  mainCircle.style.transform = `rotate(${rotationDegree}deg)`;
  
  circleItems.forEach(item => {
    const itemContent = item.querySelector('.item-content');
    if (itemContent) {
      itemContent.style.transition = 'transform 0.5s ease-out';
      itemContent.style.transform = `rotate(${-rotationDegree}deg)`;
    }
  });
}

function updateLanguage() {
  const t = translations[currentLang];
  
  // Hero section
  const heroSub = document.querySelector('.hero-subtitle');
  if (heroSub) heroSub.textContent = t.heroSubtitle;
  
  const expBtn = document.querySelector('#explore-btn span');
  if (expBtn) expBtn.textContent = t.exploreBtn;
  
  const dirBtn = document.querySelector('.cta-button.secondary span');
  if (dirBtn) dirBtn.textContent = t.directionsBtn;
  
  // Circle section
  const circleSectionTitle = document.querySelector('.circle-section .section-header h2');
  if (circleSectionTitle) {
    circleSectionTitle.innerHTML = `${t.sectionTitle} <span class="gold-text">${t.sectionTitleHighlight}</span>`;
  }
  
  const circleSectionSub = document.querySelector('.circle-section .section-subtitle');
  if (circleSectionSub) circleSectionSub.textContent = t.sectionSubtitle;
  
  // Selection display
  if (!currentCategory) {
    if (selectedTitle) selectedTitle.textContent = t.selectCategory;
    if (selectedDesc) selectedDesc.textContent = t.selectCategoryDesc;
  }
  
  const priceLabel = document.querySelector('.price-label');
  if (priceLabel) priceLabel.textContent = t.priceLabel;
  
  const viewDetBtn = document.querySelector('#viewDetailsBtn span');
  if (viewDetBtn) viewDetBtn.textContent = t.viewMenu;
  
  // Combos section
  const combosSectionTitle = document.querySelector('.combos-grid .section-header h2');
  if (combosSectionTitle) {
    combosSectionTitle.innerHTML = `${t.combosTitle} <span class="gold-text">${t.combosTitleHighlight}</span>`;
  }
  
  const combosSectionSub = document.querySelector('.combos-grid .section-subtitle');
  if (combosSectionSub) combosSectionSub.textContent = t.combosSubtitle;
  
  // Update card buttons text
  document.querySelectorAll('.card-button span').forEach(span => {
    span.textContent = t.chooseThis;
  });
  
  // Location section
  const locTitle = document.querySelector('.location-info h2');
  if (locTitle) locTitle.innerHTML = `${t.locationTitle} <span class="gold-text">${t.locationTitleHighlight}</span>`;
  
  const addressLabel = document.querySelector('.detail-item:nth-child(1) h4');
  if (addressLabel) addressLabel.textContent = t.addressLabel;
  
  const hoursLabel = document.querySelector('.detail-item:nth-child(2) h4');
  if (hoursLabel) hoursLabel.textContent = t.hoursLabel;
  
  const bookingLabel = document.querySelector('.detail-item:nth-child(3) h4');
  if (bookingLabel) bookingLabel.textContent = t.bookingLabel;
  
  const getDirBtn = document.querySelector('.location-button span');
  if (getDirBtn) getDirBtn.textContent = t.getDirections;
  
  // Modal
  const orderBtn = document.querySelector('#reserveBtn span');
  if (orderBtn) orderBtn.textContent = t.orderNow;
  
  const closeBtnEl = document.querySelector('#closeModalBtn');
  if (closeBtnEl) closeBtnEl.innerHTML = `<i class="fas fa-times"></i> ${t.close}`;
  
  // People section
  const peopleSectionTitle = document.querySelector('#peopleSection h3');
  if (peopleSectionTitle) peopleSectionTitle.innerHTML = `<i class="fas fa-user-friends"></i> ${t.numberOfPeople}`;
  
  // Customize note
  if (customizeNote && customizeNote.style.display !== 'none') {
    customizeNote.textContent = t.customizeNote;
  }
}

function reapplyLangActive() {
  document.querySelectorAll('.lang-switch button').forEach(b => {
    const isActive = b.dataset.lang === currentLang;
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-pressed', String(isActive));
  });
}

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.combo-card, .info-item').forEach(el => {
  observer.observe(el);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ============================================================
   TIER 1 FEATURES — Appended JavaScript
   ============================================================ */

const WA_NUMBER = '393474329466';

/* ── Utility: show toast ── */
function showToast(msg, duration = 3500) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/* ── Utility: today + max date for date picker ── */
function setDateConstraints() {
  const dateInput = document.getElementById('resDate');
  if (!dateInput) return;
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 30);
  const fmt = d => d.toISOString().split('T')[0];
  dateInput.min = fmt(tomorrow);
  dateInput.max = fmt(maxDate);
}

/* ============================================================
   1. STICKY NAVIGATION
   ============================================================ */
(function initStickyNav() {
  const nav = document.getElementById('sticky-nav');
  const hero = document.getElementById('hero');
  if (!nav || !hero) return;

  const sectionIds = ['menu', 'combos', 'gallery', 'location', 'contatti'];
  const navLinks = document.querySelectorAll('.nav-links a, .nav-drawer a');

  /* Show/hide on scroll past hero */
  const heroObserver = new IntersectionObserver(([entry]) => {
    nav.classList.toggle('visible', !entry.isIntersecting);
  }, { threshold: 0.1 });
  heroObserver.observe(hero);

  /* Active section highlight — track all visible sections, activate the topmost */
  const sectionEls = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const activeSections = new Set();
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSections.add(entry.target.id);
      } else {
        activeSections.delete(entry.target.id);
      }
    });
    const activeId = sectionIds.find(id => activeSections.has(id)) || '';
    navLinks.forEach(a => {
      a.classList.toggle('active', !!activeId && a.getAttribute('href') === `#${activeId}`);
    });
  }, { threshold: 0.15, rootMargin: '-80px 0px -30% 0px' });

  sectionEls.forEach(el => sectionObserver.observe(el));

  /* Smooth scroll for all nav links */
  navLinks.forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeDrawer();
    });
  });

  /* Hamburger / Drawer */
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('navDrawer');
  const overlay = document.getElementById('navDrawerOverlay');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
  }

  if (hamburger) hamburger.addEventListener('click', () =>
    drawer.classList.contains('open') ? closeDrawer() : openDrawer()
  );
  if (overlay) overlay.addEventListener('click', closeDrawer);
})();

/* ============================================================
   2. PHOTO GALLERY & LIGHTBOX
   ============================================================ */
(function initGallery() {
  const galleryImages = [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1517248135467-2c7ed3ab7229?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=1600'
  ];

  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbCounter = document.getElementById('lightboxCounter');
  const lbClose = document.getElementById('lightboxClose');
  const lbPrev = document.getElementById('lightboxPrev');
  const lbNext = document.getElementById('lightboxNext');
  const lbOverlay = document.getElementById('lightboxOverlay');
  let currentLbIndex = 0;

  function openLightbox(index) {
    currentLbIndex = index;
    updateLightbox();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    reapplyLangActive();
  }

  function updateLightbox() {
    if (!lbImg) return;
    lbImg.style.opacity = '0';
    setTimeout(() => {
      lbImg.style.backgroundImage = `url('${galleryImages[currentLbIndex]}')`;
      lbImg.style.opacity = '1';
    }, 150);
    if (lbCounter) lbCounter.textContent = `${currentLbIndex + 1} / ${galleryImages.length}`;
  }

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => openLightbox(parseInt(item.dataset.index, 10)));
  });

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbOverlay) lbOverlay.addEventListener('click', closeLightbox);
  if (lbPrev) lbPrev.addEventListener('click', () => {
    currentLbIndex = (currentLbIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightbox();
  });
  if (lbNext) lbNext.addEventListener('click', () => {
    currentLbIndex = (currentLbIndex + 1) % galleryImages.length;
    updateLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') {
      currentLbIndex = (currentLbIndex - 1 + galleryImages.length) % galleryImages.length;
      updateLightbox();
    }
    if (e.key === 'ArrowRight') {
      currentLbIndex = (currentLbIndex + 1) % galleryImages.length;
      updateLightbox();
    }
  });
})();

/* ============================================================
   3. RESERVATION SYSTEM
   ============================================================ */
(function initReservation() {
  const modal = document.getElementById('reservationModal');
  const overlay = document.getElementById('resModalOverlay');
  const closeBtn = document.getElementById('resModalClose');
  const form = document.getElementById('reservationForm');
  const successState = document.getElementById('resSuccessState');
  const guestsDisplay = document.getElementById('guestsDisplay');
  const guestsHidden = document.getElementById('resGuests');
  const guestsDecrease = document.getElementById('guestsDecrease');
  const guestsIncrease = document.getElementById('guestsIncrease');
  const resSuccessDetails = document.getElementById('resSuccessDetails');
  const resWhatsAppConfirm = document.getElementById('resWhatsAppConfirm');
  const resCloseSuccess = document.getElementById('resCloseSuccess');
  let guestsCount = 2;
  let lastReservation = null;

  function openReservationModal() {
    if (!modal) return;
    setDateConstraints();
    form.style.display = '';
    successState.style.display = 'none';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeReservationModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    reapplyLangActive();
  }

  /* Expose globally so other features can call it */
  window.openReservationModal = openReservationModal;

  /* FAB */
  const fab = document.getElementById('fabReserve');
  if (fab) fab.addEventListener('click', openReservationModal);

  /* Close */
  if (closeBtn) closeBtn.addEventListener('click', closeReservationModal);
  if (overlay) overlay.addEventListener('click', closeReservationModal);
  if (resCloseSuccess) resCloseSuccess.addEventListener('click', closeReservationModal);

  /* Guests counter */
  function updateGuests(val) {
    guestsCount = Math.min(12, Math.max(1, val));
    if (guestsDisplay) guestsDisplay.textContent = guestsCount;
    if (guestsHidden) guestsHidden.value = guestsCount;
    if (guestsDecrease) guestsDecrease.disabled = guestsCount <= 1;
    if (guestsIncrease) guestsIncrease.disabled = guestsCount >= 12;
  }

  if (guestsDecrease) guestsDecrease.addEventListener('click', () => updateGuests(guestsCount - 1));
  if (guestsIncrease) guestsIncrease.addEventListener('click', () => updateGuests(guestsCount + 1));

  /* Validation */
  function validatePhone(val) {
    return /^(\+39|0039|039)?[\s.\-]?(3\d{2}|0\d{1,3})[\s.\-]?\d{3,4}[\s.\-]?\d{3,4}$/.test(val.trim());
  }

  function clearErrors() {
    ['resDateErr','resTimeErr','resNameErr','resPhoneErr'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '';
    });
    ['resDate','resTime','resName','resPhone'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.remove('error');
    });
  }

  function showError(inputId, errId, msg) {
    const input = document.getElementById(inputId);
    const err = document.getElementById(errId);
    if (input) input.classList.add('error');
    if (err) err.textContent = msg;
  }

  /* Submit */
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      clearErrors();
      let valid = true;

      const date = document.getElementById('resDate').value;
      const time = document.getElementById('resTime').value;
      const name = document.getElementById('resName').value.trim();
      const phone = document.getElementById('resPhone').value.trim();
      const email = document.getElementById('resEmail').value.trim();
      const notes = document.getElementById('resNotes').value.trim();

      if (!date) { showError('resDate','resDateErr','Seleziona una data'); valid = false; }
      if (!time) { showError('resTime','resTimeErr','Seleziona un orario'); valid = false; }
      if (!name) { showError('resName','resNameErr','Inserisci il tuo nome'); valid = false; }
      if (!phone) { showError('resPhone','resPhoneErr','Inserisci il tuo numero'); valid = false; }
      else if (!validatePhone(phone)) { showError('resPhone','resPhoneErr','Numero non valido'); valid = false; }

      if (!valid) return;

      lastReservation = { date, time, guests: guestsCount, name, phone, email, notes,
        id: Date.now(), status: 'pending', created: new Date().toISOString() };

      saveReservation(lastReservation);

      /* Show success */
      form.style.display = 'none';
      successState.style.display = 'flex';
      if (resSuccessDetails) {
        const dateDisplay = new Date(date + 'T12:00:00').toLocaleDateString('it-IT', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
        resSuccessDetails.innerHTML = `<strong>${name}</strong> — ${dateDisplay} alle <strong>${time}</strong><br>Ospiti: <strong>${guestsCount}</strong>${notes ? '<br>Note: ' + notes : ''}`;
      }

      showToast('✓ Prenotazione salvata con successo!');
      refreshAdmin();
    });
  }

  /* WhatsApp confirm */
  if (resWhatsAppConfirm) {
    resWhatsAppConfirm.addEventListener('click', () => {
      if (!lastReservation) return;
      const r = lastReservation;
      const dateDisplay = new Date(r.date + 'T12:00:00').toLocaleDateString('it-IT', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
      const msg = encodeURIComponent(
        `🍽️ *Prenotazione La Bontà Ristorante*\n\n` +
        `👤 Nome: ${r.name}\n` +
        `📅 Data: ${dateDisplay}\n` +
        `🕐 Orario: ${r.time}\n` +
        `👥 Ospiti: ${r.guests}\n` +
        `📞 Telefono: ${r.phone}` +
        (r.notes ? `\n📝 Note: ${r.notes}` : '') +
        `\n\nGrazie!`
      );
      window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
    });
  }

  /* Escape key */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeReservationModal();
  });
})();

/* ── localStorage helpers ── */
function saveReservation(reservation) {
  const stored = JSON.parse(localStorage.getItem('labonta_reservations') || '[]');
  stored.push(reservation);
  localStorage.setItem('labonta_reservations', JSON.stringify(stored));
}

function getReservations() {
  return JSON.parse(localStorage.getItem('labonta_reservations') || '[]');
}

function deleteReservation(id) {
  const stored = getReservations().filter(r => r.id !== id);
  localStorage.setItem('labonta_reservations', JSON.stringify(stored));
}

/* ============================================================
   4. WHATSAPP BUTTON
   ============================================================ */
(function initWhatsApp() {
  const fab = document.getElementById('fabWhatsApp');
  const waModal = document.getElementById('waModal');
  const waCancel = document.getElementById('waModalCancel');
  const waReserve = document.getElementById('waOptionReserve');
  const waTakeaway = document.getElementById('waOptionTakeaway');
  const waInfo = document.getElementById('waOptionInfo');

  function toggleWaModal() {
    waModal.classList.toggle('open');
  }

  function closeWaModal() {
    waModal.classList.remove('open');
  }

  if (fab) fab.addEventListener('click', toggleWaModal);
  if (waCancel) waCancel.addEventListener('click', closeWaModal);

  if (waReserve) waReserve.addEventListener('click', () => {
    closeWaModal();
    if (window.openReservationModal) window.openReservationModal();
  });

  if (waTakeaway) waTakeaway.addEventListener('click', () => {
    closeWaModal();
    const msg = encodeURIComponent('Ciao! Vorrei ordinare da asporto 🍕 Potete dirmi il menu del giorno e i tempi di attesa? Grazie!');
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
  });

  if (waInfo) waInfo.addEventListener('click', () => {
    closeWaModal();
    const msg = encodeURIComponent('Ciao! Vorrei alcune informazioni sul ristorante La Bontà. Potete aiutarmi?');
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
  });

  /* Close when clicking outside */
  document.addEventListener('click', e => {
    if (waModal && waModal.classList.contains('open') &&
        !waModal.contains(e.target) && e.target !== fab) {
      closeWaModal();
    }
  });

  /* Fix existing combo modal "Ordina Ora" button to open WhatsApp */
  const existingReserveBtn = document.getElementById('reserveBtn');
  if (existingReserveBtn) {
    existingReserveBtn.removeEventListener('click', existingReserveBtn._originalHandler);
    existingReserveBtn.addEventListener('click', () => {
      let msg = 'Ciao! Vorrei ordinare da La Bontà Ristorante. ';
      if (window.currentCombo && window.combos && window.combos[window.currentCombo]) {
        const combo = window.combos[window.currentCombo];
        msg += `Menu selezionato: *${combo.title}* — ${combo.subtitle}. `;
      }
      msg += 'Potete confermare la disponibilità? Grazie!';
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }
})();

/* ============================================================
   5. ADMIN DASHBOARD
   ============================================================ */
function refreshAdmin() {
  const panel = document.getElementById('adminPanel');
  if (!panel) return;

  const reservations = getReservations();
  const tbody = document.getElementById('adminTableBody');
  const emptyMsg = document.getElementById('adminEmpty');
  const statsEl = document.getElementById('adminStats');

  if (statsEl) {
    const today = new Date().toISOString().split('T')[0];
    const todayCount = reservations.filter(r => r.date === today).length;
    const totalGuests = reservations.reduce((sum, r) => sum + (r.guests || 0), 0);
    statsEl.innerHTML = `
      <div class="admin-stat"><div class="admin-stat-value">${reservations.length}</div><div class="admin-stat-label">Totale Prenotazioni</div></div>
      <div class="admin-stat"><div class="admin-stat-value">${todayCount}</div><div class="admin-stat-label">Oggi</div></div>
      <div class="admin-stat"><div class="admin-stat-value">${totalGuests}</div><div class="admin-stat-label">Ospiti Totali</div></div>
    `;
  }

  if (!tbody) return;

  if (reservations.length === 0) {
    tbody.innerHTML = '';
    if (emptyMsg) emptyMsg.style.display = 'block';
    return;
  }

  if (emptyMsg) emptyMsg.style.display = 'none';
  const sorted = [...reservations].sort((a, b) => new Date(a.date + 'T' + a.time) - new Date(b.date + 'T' + b.time));

  tbody.innerHTML = sorted.map(r => {
    const dateDisplay = new Date(r.date + 'T12:00:00').toLocaleDateString('it-IT', { day:'numeric', month:'short', year:'numeric' });
    return `
      <tr>
        <td>${dateDisplay}</td>
        <td>${r.time}</td>
        <td>${r.guests}</td>
        <td><strong style="color:var(--text-light)">${r.name}</strong></td>
        <td><a href="tel:${r.phone}" style="color:var(--gold);text-decoration:none">${r.phone}</a></td>
        <td>${r.email || '—'}</td>
        <td>${r.notes ? r.notes.substring(0,40) + (r.notes.length > 40 ? '…':'') : '—'}</td>
        <td><span class="admin-status ${r.status === 'confirmed' ? 'confirmed' : 'pending'}">${r.status === 'confirmed' ? '✓ Confermata' : '⌛ In attesa'}</span></td>
        <td><button class="admin-del-btn" data-id="${r.id}"><i class="fas fa-trash"></i></button></td>
      </tr>
    `;
  }).join('');

  /* Delete handlers */
  tbody.querySelectorAll('.admin-del-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      if (confirm('Eliminare questa prenotazione?')) {
        deleteReservation(id);
        refreshAdmin();
        showToast('Prenotazione eliminata.');
      }
    });
  });
}

(function initAdmin() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('admin') !== 'true') return;

  const panel = document.getElementById('adminPanel');
  if (panel) {
    panel.style.display = 'block';
    refreshAdmin();
  }

  /* Export CSV */
  const exportBtn = document.getElementById('adminExportCSV');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const reservations = getReservations();
      if (!reservations.length) { showToast('Nessuna prenotazione da esportare.'); return; }
      const headers = ['Data','Orario','Ospiti','Nome','Telefono','Email','Note','Stato'];
      const rows = reservations.map(r => [r.date, r.time, r.guests, r.name, r.phone, r.email || '', r.notes || '', r.status].map(v => `"${String(v).replace(/"/g,'""')}"`).join(','));
      const csv = [headers.join(','), ...rows].join('\n');
      const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `prenotazioni_labonta_${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
      URL.revokeObjectURL(url);
      showToast('CSV esportato!');
    });
  }

  /* Clear all */
  const clearBtn = document.getElementById('adminClearAll');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Eliminare TUTTE le prenotazioni? Questa azione non è reversibile.')) {
        localStorage.removeItem('labonta_reservations');
        refreshAdmin();
        showToast('Tutte le prenotazioni eliminate.');
      }
    });
  }
})();

/* Make combos accessible from WhatsApp handler */
window.combos = window.combos || (typeof combos !== 'undefined' ? combos : {});

/* Contatti section WhatsApp button */
const contattiWaBtn = document.getElementById('contattiWaBtn');
if (contattiWaBtn) {
  contattiWaBtn.addEventListener('click', () => {
    const waModal = document.getElementById('waModal');
    if (waModal) waModal.classList.toggle('open');
  });
}
