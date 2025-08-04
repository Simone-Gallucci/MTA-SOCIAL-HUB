# MTA Social Hub - Setup Pagamenti Reali

## 🚀 PROSSIMI PASSI OBBLIGATORI

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

## � CHECKLIST IMMEDIATA

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

## 📞 SUPPORTO RAPIDO

**Errori Stripe:** [https://stripe.com/docs](https://stripe.com/docs)
**Errori PayPal:** [https://developer.paypal.com/docs](https://developer.paypal.com/docs)

## 💡 PROSSIMO LIVELLO

Una volta che tutto funziona, potresti aggiungere:
- 📧 **Email conferma ordini**
- 📦 **Tracking spedizioni** 
- 👤 **Account utenti**
- 📊 **Dashboard admin**
- 🛒 **Inventory management**

---

## 🎯 OBIETTIVO: ENTRO OGGI

1. ✅ **15 min:** Setup Stripe + PayPal
2. ✅ **5 min:** Test pagamenti
3. ✅ **2 min:** Verifica transazioni

**🎉 RISULTATO: E-commerce funzionante con pagamenti reali!**

---

*💬 Hai problemi? Controlla la console del browser (F12) per errori specifici.*
