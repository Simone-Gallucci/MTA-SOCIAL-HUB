// Configurazione per i servizi di pagamento
// IMPORTANTE: Sostituisci con le tue chiavi reali

const PAYMENT_CONFIG = {
    // Stripe Configuration
    stripe: {
        // Usa la tua chiave pubblica Stripe (inizia con pk_)
        publicKey: 'pk_test_51234567890abcdef...', // SOSTITUISCI CON LA TUA CHIAVE
        // In produzione usa pk_live_...
    },
    
    // PayPal Configuration
    paypal: {
        // Usa il tuo Client ID PayPal
        clientId: 'AX1234567890abcdef...', // SOSTITUISCI CON IL TUO CLIENT ID
        currency: 'EUR'
    }
};

// Esporta la configurazione
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PAYMENT_CONFIG;
} else {
    window.PAYMENT_CONFIG = PAYMENT_CONFIG;
}
