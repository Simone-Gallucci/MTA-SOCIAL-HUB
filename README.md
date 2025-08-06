# 🏪 MTA Social Hub - E-commerce Centro Sportivo

Un sistema e-commerce completo per centri sportivi, sviluppato con Vue.js e sistema di pagamenti integrato.

## 🚀 Avvio Rapido

### Requisiti
- Browser moderno (Chrome, Firefox, Safari, Edge)
- Nessun server richiesto - funziona aprendo direttamente il file HTML

### Installazione
1. Scarica tutti i file del progetto
2. Apri `index.html` nel browser
3. Il sistema è pronto all'uso!

## 📁 Struttura del Progetto

```
MTA SOCIAL HUB/
├── index.html       # Pagina principale dell'applicazione
├── style.css        # Stili CSS personalizzati
├── products.js      # Database prodotti sportivi
├── config.js        # Configurazione pagamenti
├── carrello.html    # Pagina carrello (legacy)
└── README.md        # Questa documentazione
```

## 🛍️ Gestione Prodotti

### Modifica Prodotti Sportivi
I prodotti sono definiti nel file `products.js`. Per modificare il catalogo:

1. Apri `products.js`
2. Modifica l'array `products` con i tuoi articoli
3. Salva il file
4. Ricarica la pagina web

### Struttura Prodotto
```javascript
{
    id: 1,                          // ID univoco
    name: "Nome Prodotto",          // Nome dell'articolo
    price: 99.99,                   // Prezzo in euro
    image: "URL_immagine",          // Link immagine prodotto
    description: "Descrizione..."   // Descrizione dettagliata
}
```

### Esempi di Prodotti Inclusi
- Scarpe da Calcio Nike Mercurial
- Pallone da Basket Spalding
- Racchetta da Tennis Wilson
- Tuta da Allenamento Adidas
- Borraccia Termica
- Tappetino Yoga
- Guanti da Boxe
- Casco da Ciclismo

## 🛒 Funzionalità E-commerce

### Carrello
- ➕ Aggiungi prodotti al carrello
- 🔢 Modifica quantità articoli
- 🗑️ Rimuovi prodotti
- 💾 Salvataggio automatico nel browser (localStorage)
- 💰 Calcolo totale automatico

### Checkout
- 📝 Form dati cliente completo
- 🚚 Gestione consegna a domicilio
- 💳 Multipli metodi di pagamento
- ✅ Validazione dati in tempo reale
- 📱 Design responsive per mobile

### Metodi di Pagamento
- **Stripe** - Carte di credito/debito
- **PayPal** - Account PayPal e carte tramite PayPal
- **Bonifico Bancario** - Con generazione IBAN e istruzioni

## 🎨 Personalizzazione

### Modifica Stili
Edita `style.css` per personalizzare:
- Colori del brand
- Font e tipografia
- Layout e spaziature
- Effetti e animazioni

### Modifica Logo e Nome
Nel file `index.html`, cerca:
```html
<h1 class="logo">🛍️ MTA Social Hub</h1>
```

## 📱 Caratteristiche Tecniche

### Tecnologie Utilizzate
- **Vue.js 3** - Framework JavaScript reattivo
- **Vanilla CSS** - Stili personalizzati senza framework
- **Local Storage** - Persistenza dati carrello
- **Responsive Design** - Ottimizzato per mobile e desktop

### Browser Supportati
- ✅ Chrome (raccomandato)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

### Prestazioni
- ⚡ Caricamento istantaneo
- 💾 Nessun database richiesto
- 🔒 Funziona offline (dopo primo caricamento)
- 📱 Ottimizzato per mobile

## 🛡️ Sicurezza e Privacy

### Dati Utente
- I dati del carrello sono salvati solo nel browser dell'utente
- Nessuna informazione viene inviata a server esterni (tranne pagamenti)
- I dati di checkout vengono processati solo durante il pagamento

### Pagamenti
- Integrazione sicura con Stripe (PCI DSS compliant)
- PayPal con protezione acquirenti
- Dati carta non salvati localmente

## 🚨 Risoluzione Problemi

### Prodotti Non Caricano
1. Verifica che `products.js` sia nella stessa cartella di `index.html`
2. Controlla la console browser (F12) per errori
3. Assicurati che il file JavaScript non abbia errori di sintassi

### Carrello Non Funziona
1. Controlla se il browser supporta localStorage
2. Verifica che JavaScript sia abilitato
3. Prova in modalità incognito per escludere estensioni

### Pagamenti Non Funzionano
1. Verifica configurazione in `config.js`
2. Controlla connessione internet
3. Vedi sezione configurazione pagamenti sotto

---

## 🔧 CONFIGURAZIONE PAGAMENTI

### ⚡ FASE 1: CONFIGURAZIONE IMMEDIATA (15 minuti)

#### 1. 🔧 Setup Stripe (Pagamenti Carte)
```bash
# 1. Vai su: https://stripe.com
# 2. Clicca "Sign up" e crea account gratuito
# 3. Verifica email e completa registrazione
# 4. Vai su Dashboard > Developers > API keys
# 5. Copia la "Publishable key" (inizia con pk_test_)
```

**Ora apri `config.js` e sostituisci:**
```javascript
publicKey: 'pk_test_51234567890abcdef...', // ← INCOLLA LA TUA CHIAVE QUI
```

#### 2. 💰 Setup PayPal (Pagamenti PayPal)
```bash
# 1. Vai su: https://developer.paypal.com
# 2. Fai login con il tuo account PayPal normale
# 3. Vai su "My Apps & Credentials"
# 4. Clicca "Create App"
# 5. Nome app: "MTA Social Hub"
# 6. Account: Default (sandbox)
# 7. Features: spunta "Accept payments"
# 8. Clicca "Create App"
# 9. Copia il "Client ID" che appare
```

**Ora aggiorna 2 file:**

1. **In `config.js`:**
```javascript
clientId: 'AX1234567890abcdef...', // ← INCOLLA IL TUO CLIENT ID QUI
```

2. **In `index.html` (riga 10):**
```html
<script src="https://www.paypal.com/sdk/js?client-id=TUO_CLIENT_ID_QUI&currency=EUR"></script>
```

### ⚡ FASE 2: TEST IMMEDIATO (5 minuti)

1. **Apri `index.html` nel browser**
2. **Aggiungi prodotti al carrello**
3. **Vai al checkout**
4. **Testa Stripe con questi dati:**
   - Carta: `4242 4242 4242 4242`
   - Scadenza: `12/28`
   - CVV: `123`
   - Nome: `Test User`

5. **Testa PayPal** cliccando il pulsante PayPal

### ⚡ FASE 3: VERIFICA FUNZIONAMENTO (2 minuti)

✅ **Controlla le transazioni:**
- **Stripe:** Dashboard > Payments
- **PayPal:** Sandbox > Transactions

## 🛡️ FASE 4: PRODUZIONE (Quando sei pronto)

### Step 1: Attiva Account Reali
```bash
# STRIPE:
# 1. Dashboard Stripe > Activate account
# 2. Completa verifica identità/business
# 3. Copia le chiavi LIVE (pk_live_...)

# PAYPAL:
# 1. App PayPal > Switch to Live
# 2. Crea nuova app per produzione
# 3. Copia Client ID LIVE
```

### Step 2: Aggiorna Configurazione
```javascript
// In config.js - per PRODUZIONE:
stripe: {
    publicKey: 'pk_live_...', // ← Chiave LIVE
},
paypal: {
    clientId: 'TUO_CLIENT_ID_LIVE', // ← Client ID LIVE
}
```

### Step 3: SSL/HTTPS Obbligatorio
```bash
# DEVI avere HTTPS per pagamenti reali
# Opzioni hosting consigliate:
# - Netlify (gratuito con SSL automatico)
# - Vercel (gratuito con SSL automatico)  
# - GitHub Pages (gratuito con SSL)
```

## ✅ CHECKLIST IMMEDIATA

- [ ] ✅ Account Stripe creato
- [ ] ✅ Chiave Stripe copiata in `config.js`
- [ ] ✅ Account PayPal Developer creato
- [ ] ✅ App PayPal creata (sandbox)
- [ ] ✅ Client ID PayPal copiato in `config.js`
- [ ] ✅ Client ID PayPal aggiornato in `index.html`
- [ ] ✅ Testato pagamento Stripe
- [ ] ✅ Testato pagamento PayPal
- [ ] ✅ Verificate transazioni nelle dashboard

## 🚨 PROBLEMI COMUNI

### "Stripe non carica"
```bash
# Verifica:
# 1. Chiave in config.js è corretta
# 2. Inizia con pk_test_ (non sk_)
# 3. Console browser per errori
```

### "PayPal non appare"
```bash
# Verifica:
# 1. Client ID in config.js
# 2. Client ID in index.html (stessa riga)
# 3. Connessione internet attiva
```

### "Pagamenti non funzionano"
```bash
# IN TEST MODE:
# - Usa sempre carte test Stripe
# - Usa account sandbox PayPal

# IN PRODUZIONE:
# - HTTPS obbligatorio
# - Chiavi LIVE configurate
# - Account verificati
```

---

## 📞 Supporto

Per problemi tecnici:
- Controlla la console browser (F12)
- Verifica configurazione pagamenti
- Consulta documentazioni ufficiali Stripe/PayPal

## 🎯 Prossimi Sviluppi

Possibili miglioramenti futuri:
- 📧 Sistema email conferma ordini
- 📦 Tracking spedizioni
- 👤 Sistema account utenti
- 📊 Dashboard amministratore
- 🏪 Gestione inventory

---

*💡 **Suggerimento**: Personalizza sempre i prodotti in `products.js` e testa i pagamenti prima di andare in produzione!*
