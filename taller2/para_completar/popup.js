/**
 * Motivational Messages Pro Extension
 * Advanced Microkernel + External API Integration Demo
 * 
 * This extension demonstrates advanced microkernel patterns:
 * - External service integration
 * - Asynchronous data fetching
 * - Error handling and fallback mechanisms
 * - Professional UI/UX patterns
 */

// Extension configuration
const CONFIG = {
  version: '2.0.0',
  name: 'Motivational Messages Pro',
  apiTimeout: 5000,
  retryAttempts: 2,
  fallbackMode: true
};

// Message categories and curated content
const MESSAGE_CATEGORIES = {
  motivational: {
    name: 'Motivational',
    emoji: '💪',
    gradient: 'linear-gradient(135deg, #ff6b6b, #ee5a52)',
    messages: [
      { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
      { text: "Don't wait for the perfect moment, take the moment and make it perfect.", author: "Anonymous" },
      { text: "Your only limitation is yourself.", author: "Anonymous" },
      { text: "Dreams don't work unless you do.", author: "John C. Maxwell" },
      { text: "Failure is simply the opportunity to begin again, this time more intelligently.", author: "Henry Ford" }
    ]
  },
  inspirational: {
    name: 'Inspirational', 
    emoji: '🌟',
    gradient: 'linear-gradient(135deg, #4ecdc4, #44a08d)',
    messages: [
      { text: "Life is what happens while you're busy making other plans.", author: "John Lennon" },
      { text: "Be the change you want to see in the world.", author: "Gandhi" },
      { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
      { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" }
    ]
  },
  success: {
    name: 'Success',
    emoji: '🚀', 
    gradient: 'linear-gradient(135deg, #feca57, #ff9ff3)',
    messages: [
      { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
      { text: "Success is going from failure to failure without losing enthusiasm.", author: "Winston Churchill" },
      { text: "Don't measure your success by what you've accomplished, but by what you've overcome.", author: "Anonymous" },
      { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
      { text: "Success is not measured by the position you reach but by the obstacles you overcome.", author: "Booker T. Washington" }
    ]
  }
};

// Application state
let appState = {
  isLoading: false,
  lastMessageTime: null,
  errorCount: 0,
  initialized: false
};

// FRAGMENTO 6: Inicialización de la aplicación
// Instrucción: Configurar el event listener para DOMContentLoaded
// Pista: document.addEventListener('DOMContentLoaded', initializeApplication);

// TODO: Agregar event listener para DOMContentLoaded

/**
 * Initialize the application
 */
function initializeApplication() {
  console.log('🚀 Initializing Motivational Messages Pro v' + CONFIG.version);
  
  try {
    // FRAGMENTO 7: Configurar event listeners para botones
    // Instrucción: Agregar event listeners para cada botón de categoría
    // Pista: document.getElementById('btn-motivational').addEventListener('click', () => fetchMessage('motivational'));
    
    // TODO: Configurar botón motivational
    
    // TODO: Configurar botón inspirational
    
    // TODO: Configurar botón success
    
    // Update application state
    appState.initialized = true;
    console.log('✅ Application initialized successfully');
    
    // Show ready status
    updateUIState('ready');
    
  } catch (error) {
    console.error('❌ Initialization failed:', error);
    updateUIState('error');
  }
}

/**
 * Main function to fetch and display motivational messages
 * Demonstrates microkernel orchestration of multiple services
 */
async function fetchMessage(category) {
  console.log(`🎯 Fetching ${category} message...`);
  
  // Validate input
  if (!MESSAGE_CATEGORIES[category]) {
    console.error('❌ Invalid category:', category);
    return;
  }
  
  // Prevent concurrent requests
  if (appState.isLoading) {
    console.log('⚠️ Request already in progress');
    return;
  }
  
  try {
    // Update UI state
    updateUIState('loading');
    appState.isLoading = true;
    
    // Simulate API delay for demonstration
    await delay(800);
    
    // Get message (using fallback for reliability)
    const message = await getMessageWithFallback(category);
    
    // FRAGMENTO 8: Enviar mensaje a la página activa
    // Instrucción: Usar chrome.tabs.query para obtener la pestaña activa
    // Pista: chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { ... });
    
    // TODO: Implementar chrome.tabs.query
    
      if (tabs.length === 0) {
        throw new Error('No active tab found');
      }
      
      const activeTab = tabs[0];
      console.log(`📄 Displaying message on: ${activeTab.title}`);
      
      // FRAGMENTO 9: Ejecutar script en la página
      // Instrucción: Usar chrome.scripting.executeScript para mostrar el mensaje
      // Pista: chrome.scripting.executeScript({ target: {tabId: activeTab.id}, func: displayMessageOnPage, args: [message, category] });
      
      // TODO: Implementar chrome.scripting.executeScript
      
        console.log('✅ Message displayed successfully');
        updateUIState('success');
        appState.lastMessageTime = Date.now();
        
      }).catch((error) => {
        console.error('❌ Script execution failed:', error);
        updateUIState('error');
      });
      
    // TODO: Cerrar chrome.tabs.query
    // });
    
  } catch (error) {
    console.error('❌ Message fetch failed:', error);
    appState.errorCount++;
    updateUIState('error');
  } finally {
    appState.isLoading = false;
  }
}

/**
 * Get message with fallback mechanism
 * Demonstrates resilient service integration
 */
async function getMessageWithFallback(category) {
  const categoryConfig = MESSAGE_CATEGORIES[category];
  
  // Always use local messages for reliability in demo
  const messages = categoryConfig.messages;
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  return {
    text: randomMessage.text,
    author: randomMessage.author,
    category: category,
    source: 'local_curated',
    timestamp: Date.now()
  };
}

/**
 * Function that executes in the webpage context
 * Demonstrates advanced content script patterns
 */
function displayMessageOnPage(message, category) {
  console.log(`🌐 Displaying message in page context:`, message);
  
  // FRAGMENTO 10: Limpiar mensajes anteriores
  // Instrucción: Remover cualquier mensaje anterior que pueda existir
  // Pista: const existingMessage = document.getElementById('motivational-pro-message');
  // Pista: if (existingMessage) existingMessage.remove();
  
  // TODO: Limpiar mensajes anteriores
  
  // Get category configuration
  const categories = {
    motivational: { 
      gradient: 'linear-gradient(135deg, #ff6b6b, #ee5a52)', 
      emoji: '💪',
      name: 'Motivational'
    },
    inspirational: { 
      gradient: 'linear-gradient(135deg, #4ecdc4, #44a08d)', 
      emoji: '🌟',
      name: 'Inspirational'
    },
    success: { 
      gradient: 'linear-gradient(135deg, #feca57, #ff9ff3)', 
      emoji: '🚀',
      name: 'Success'
    }
  };
  
  const categoryConfig = categories[category];
  
  // FRAGMENTO 11: Crear elemento del mensaje
  // Instrucción: Crear el elemento div para mostrar el mensaje
  // Pista: const messageContainer = document.createElement('div');
  // Pista: messageContainer.id = 'motivational-pro-message';
  
  // TODO: Crear elemento del mensaje
  
  // Professional styling
  messageContainer.style.cssText = `
    position: fixed !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) scale(0.9) !important;
    background: ${categoryConfig.gradient} !important;
    color: white !important;
    padding: 40px !important;
    border-radius: 20px !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    z-index: 999999 !important;
    box-shadow: 0 25px 50px rgba(0,0,0,0.3) !important;
    max-width: 600px !important;
    width: 90% !important;
    text-align: center !important;
    animation: messageAppear 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards !important;
    cursor: pointer !important;
    backdrop-filter: blur(10px) !important;
    border: 1px solid rgba(255,255,255,0.2) !important;
  `;
  
  // Professional content layout
  messageContainer.innerHTML = `
    <div style="margin-bottom: 24px;">
      <div style="font-size: 48px; margin-bottom: 16px; animation: float 3s ease-in-out infinite;">${categoryConfig.emoji}</div>
      <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 2px; opacity: 0.8; font-weight: 600;">
        ${categoryConfig.name} Message
      </div>
    </div>
    
    <div style="font-size: 22px; line-height: 1.4; margin-bottom: 24px; font-weight: 400; font-style: italic;">
      "${message.text}"
    </div>
    
    <div style="font-size: 16px; opacity: 0.9; margin-bottom: 24px; font-weight: 500;">
      — ${message.author}
    </div>
    
    <div style="font-size: 13px; opacity: 0.7; padding: 12px 24px; background: rgba(0,0,0,0.2); border-radius: 25px; display: inline-block;">
      💡 Click anywhere to close • Auto-close in 10s
    </div>
  `;
  
  // Add professional animations
  addMessageAnimations();
  
  // FRAGMENTO 12: Agregar el mensaje al DOM
  // Instrucción: Agregar el mensaje al body de la página
  // Pista: document.body.appendChild(messageContainer);
  
  // TODO: Agregar mensaje al DOM
  
  // Professional interaction handlers
  setupMessageInteractions(messageContainer);
  
  console.log('✅ Professional message displayed successfully');
}

/**
 * Add professional animations
 */
function addMessageAnimations() {
  if (document.getElementById('motivational-pro-animations')) return;
  
  const animationStyles = document.createElement('style');
  animationStyles.id = 'motivational-pro-animations';
  animationStyles.innerHTML = `
    @keyframes messageAppear {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
      }
      100% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes messageDisappear {
      0% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.9);
      }
    }
  `;
  
  document.head.appendChild(animationStyles);
}

/**
 * Setup professional message interactions
 */
function setupMessageInteractions(messageContainer) {
  // Click to dismiss
  messageContainer.addEventListener('click', () => {
    dismissMessage(messageContainer);
  });
  
  // Auto-dismiss after 10 seconds
  setTimeout(() => {
    if (messageContainer.parentNode) {
      dismissMessage(messageContainer);
    }
  }, 10000);
  
  // Escape key to dismiss
  const escapeHandler = (event) => {
    if (event.key === 'Escape' && messageContainer.parentNode) {
      dismissMessage(messageContainer);
      document.removeEventListener('keydown', escapeHandler);
    }
  };
  
  document.addEventListener('keydown', escapeHandler);
}

/**
 * Dismiss message with animation
 */
function dismissMessage(messageContainer) {
  messageContainer.style.animation = 'messageDisappear 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards';
  setTimeout(() => {
    if (messageContainer.parentNode) {
      messageContainer.remove();
    }
  }, 400);
}

/**
 * Update UI state in popup
 */
function updateUIState(state) {
  const loadingEl = document.getElementById('loading');
  const errorEl = document.getElementById('error');
  const readyEl = document.getElementById('ready-status');
  
  // Reset all states
  [loadingEl, errorEl, readyEl].forEach(el => {
    if (el) el.classList.remove('active');
  });
  
  // Show appropriate state
  switch (state) {
    case 'loading':
      if (loadingEl) loadingEl.classList.add('active');
      break;
    case 'error':
      if (errorEl) errorEl.classList.add('active');
      break;
    case 'success':
    case 'ready':
    default:
      if (readyEl) readyEl.style.display = 'flex';
      break;
  }
}

/**
 * Utility function for delays
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Error handling and logging
 */
window.addEventListener('error', (event) => {
  console.error('🚨 Global error:', event.error);
  updateUIState('error');
});

// Initialize when DOM is ready
console.log('📱 Motivational Messages Pro script loaded');
