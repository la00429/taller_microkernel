/**
 * Professional Background Changer Extension
 * Microkernel Architecture Demonstration
 * 
 * This extension demonstrates how the microkernel pattern allows
 * extending browser functionality without modifying the core system.
 */

// Extension initialization
console.log('🚀 Professional Background Changer initialized');

// Color theme configuration
const THEME_CONFIG = {
  nature: {
    color: '#2E7D32',
    name: 'Nature Theme',
    description: 'Calming green inspired by nature'
  },
  ocean: {
    color: '#1565C0', 
    name: 'Ocean Theme',
    description: 'Deep blue like ocean depths'
  },
  sunset: {
    color: '#EF6C00',
    name: 'Sunset Theme', 
    description: 'Warm orange sunset colors'
  },
  elegant: {
    color: '#424242',
    name: 'Elegant Theme',
    description: 'Sophisticated dark gray'
  }
};

// FRAGMENTO 8: Configurar event listeners
// Instrucción: Agregar event listener para DOMContentLoaded
// Pista: document.addEventListener('DOMContentLoaded', function() { ... });
// TODO: Agregar aquí el event listener principal

  console.log('📱 DOM loaded, configuring interface...');
  
  // FRAGMENTO 9: Configurar botones de temas
  // Instrucción: Agregar event listeners para cada botón de tema
  // Pista: document.getElementById('btn-nature').addEventListener('click', () => changeBackground('nature'));
  
  // TODO: Configurar botón nature
  
  // TODO: Configurar botón ocean
  
  // TODO: Configurar botón sunset
  
  // TODO: Configurar botón elegant
  
  // FRAGMENTO 10: Configurar botón reset
  // Instrucción: Agregar event listener para el botón reset
  // Pista: document.getElementById('btn-reset').addEventListener('click', () => changeBackground('reset'));
  
  // TODO: Configurar botón reset

// });

/**
 * Main function to change background
 * Demonstrates microkernel communication via Chrome Extension API
 */
function changeBackground(themeId) {
  console.log(`🎨 Changing background to theme: ${themeId}`);
  
  // FRAGMENTO 11: Implementar chrome.tabs.query
  // Instrucción: Usar chrome.tabs.query para obtener la pestaña activa
  // Pista: chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { ... });
  
  // TODO: Agregar chrome.tabs.query aquí
  
    if (tabs.length === 0) {
      console.error('❌ No active tab found');
      showNotification('Error: No active tab detected', 'error');
      return;
    }
    
    const activeTab = tabs[0];
    console.log(`📄 Target tab: ${activeTab.title}`);
    
    // FRAGMENTO 12: Implementar chrome.scripting.executeScript
    // Instrucción: Usar chrome.scripting.executeScript para ejecutar código en la página
    // Pista: chrome.scripting.executeScript({ target: {tabId: activeTab.id}, func: applyBackgroundTheme, args: [themeId] });
    
    // TODO: Agregar chrome.scripting.executeScript aquí
    
      console.log('✅ Background change script executed successfully');
      
      // Update UI state
      updateUIState(themeId);
      
    }).catch((error) => {
      console.error('❌ Script execution failed:', error);
      showNotification(`Error: ${error.message}`, 'error');
    });
    
  // TODO: Cerrar la función chrome.tabs.query
  // });
}

/**
 * Function that executes in the webpage context (content script)
 * This demonstrates how the microkernel allows code injection
 */
function applyBackgroundTheme(themeId) {
  console.log(`🌐 Applying theme in webpage context: ${themeId}`);
  
  // FRAGMENTO 13: Limpiar estilos anteriores
  // Instrucción: Buscar y remover estilos anteriores del plugin
  // Pista: const previousStyle = document.getElementById('professional-bg-changer-style');
  // Pista: if (previousStyle) previousStyle.remove();
  
  // TODO: Limpiar estilos anteriores
  
  // Handle reset case
  if (themeId === 'reset') {
    showPageNotification('Original background restored', 'success');
    return;
  }
  
  // Theme configuration (duplicated for content script context)
  const themes = {
    nature: { color: '#2E7D32', name: 'Nature Theme' },
    ocean: { color: '#1565C0', name: 'Ocean Theme' },
    sunset: { color: '#EF6C00', name: 'Sunset Theme' },
    elegant: { color: '#424242', name: 'Elegant Theme' }
  };
  
  const theme = themes[themeId];
  if (!theme) {
    console.error('❌ Unknown theme:', themeId);
    return;
  }
  
  // FRAGMENTO 14: Crear y aplicar nuevo estilo
  // Instrucción: Crear elemento style y agregarlo al head
  // Pista: const styleElement = document.createElement('style');
  // Pista: styleElement.id = 'professional-bg-changer-style';
  // Pista: styleElement.innerHTML = `body { background-color: ${theme.color} !important; }`;
  // Pista: document.head.appendChild(styleElement);
  
  // TODO: Crear y aplicar estilo
  
  // Show confirmation notification
  showPageNotification(`${theme.name} applied successfully`, 'success');
  
  console.log(`✅ Theme ${themeId} applied successfully`);
}

/**
 * Update popup UI state
 */
function updateUIState(themeId) {
  // Remove active state from all buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Add active state to current button
  if (themeId !== 'reset') {
    const activeButton = document.getElementById(`btn-${themeId}`);
    if (activeButton) {
      activeButton.classList.add('active');
    }
  }
  
  // Update status indicator
  const statusIndicator = document.querySelector('.status-indicator');
  if (statusIndicator) {
    statusIndicator.style.background = themeId === 'reset' ? '#6c757d' : THEME_CONFIG[themeId]?.color || '#4CAF50';
  }
}

/**
 * Show notification in popup
 */
function showNotification(message, type = 'info') {
  console.log(`📢 Notification: ${message} (${type})`);
  // Implementation would go here for popup notifications
}

/**
 * Show notification in webpage (content script context)
 */
function showPageNotification(message, type = 'info') {
  // Remove previous notification
  const existingNotif = document.getElementById('professional-bg-notification');
  if (existingNotif) {
    existingNotif.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.id = 'professional-bg-notification';
  notification.style.cssText = `
    position: fixed !important;
    top: 24px !important;
    right: 24px !important;
    background: ${type === 'success' ? '#4CAF50' : '#2196F3'} !important;
    color: white !important;
    padding: 16px 24px !important;
    border-radius: 8px !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    z-index: 999999 !important;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2) !important;
    animation: slideInRight 0.3s ease-out !important;
    cursor: pointer !important;
  `;
  
  notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="font-size: 16px;">${type === 'success' ? '✅' : 'ℹ️'}</span>
      <span>${message}</span>
    </div>
  `;
  
  // Add animation styles
  if (!document.getElementById('professional-bg-animations')) {
    const animationStyles = document.createElement('style');
    animationStyles.id = 'professional-bg-animations';
    animationStyles.innerHTML = `
      @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(animationStyles);
  }
  
  // Add click to dismiss
  notification.addEventListener('click', () => {
    notification.style.animation = 'slideInRight 0.3s ease-out reverse';
    setTimeout(() => notification.remove(), 300);
  });
  
  // Auto remove after 4 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = 'slideInRight 0.3s ease-out reverse';
      setTimeout(() => notification.remove(), 300);
    }
  }, 4000);
  
  document.body.appendChild(notification);
}