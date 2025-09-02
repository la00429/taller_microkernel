// Plugin Microkernel Demo
console.log('🎨 Plugin iniciado');

// Configurar botones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  console.log('Configurando botones...');
  
  document.getElementById('btn-green').addEventListener('click', () => cambiarFondo('green'));
  document.getElementById('btn-blue').addEventListener('click', () => cambiarFondo('blue'));
  document.getElementById('btn-red').addEventListener('click', () => cambiarFondo('red'));
  document.getElementById('btn-reset').addEventListener('click', () => cambiarFondo('reset'));
});

function cambiarFondo(color) {
  console.log('Cambiando fondo a:', color);
  
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (tabs[0]) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        func: aplicarFondo,
        args: [color]
      });
    }
  });
}

// Esta función se ejecuta EN LA PÁGINA WEB (no en el popup)
function aplicarFondo(color) {
  console.log('🌐 Aplicando fondo:', color);
  
  // Remover estilo anterior
  const estiloAnterior = document.getElementById('microkernel-plugin-style');
  if (estiloAnterior) {
    estiloAnterior.remove();
  }
  
  // Si es reset, solo remover y salir
  if (color === 'reset') {
    mostrarNotificacion('Fondo original restaurado');
    return;
  }
  
  // Colores disponibles
  const colores = {
    'green': '#4CAF50',
    'blue': '#2196F3',
    'red': '#f44336'
  };
  
  // Crear nuevo estilo
  const estilo = document.createElement('style');
  estilo.id = 'microkernel-plugin-style';
  estilo.innerHTML = `
    body {
      background-color: ${colores[color]} !important;
      transition: background-color 0.5s ease !important;
    }
  `;
  
  document.head.appendChild(estilo);
  
  const nombres = {
    'green': 'Verde',
    'blue': 'Azul', 
    'red': 'Rojo'
  };
  
  mostrarNotificacion(`Fondo cambiado a ${nombres[color]}`);
}

// Mostrar notificación en la página
function mostrarNotificacion(mensaje) {
  // Remover notificación anterior
  const anterior = document.getElementById('microkernel-notification');
  if (anterior) {
    anterior.remove();
  }
  
  const notif = document.createElement('div');
  notif.id = 'microkernel-notification';
  notif.style.cssText = `
    position: fixed !important;
    top: 20px !important;
    right: 20px !important;
    background: rgba(0, 0, 0, 0.8) !important;
    color: white !important;
    padding: 12px 16px !important;
    border-radius: 6px !important;
    font-family: system-ui !important;
    font-size: 14px !important;
    z-index: 999999 !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
    animation: slideIn 0.3s ease-out !important;
  `;
  
  notif.textContent = `🎨 ${mensaje}`;
  
  // Agregar animación
  if (!document.getElementById('microkernel-animations')) {
    const styles = document.createElement('style');
    styles.id = 'microkernel-animations';
    styles.innerHTML = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(styles);
  }
  
  document.body.appendChild(notif);
  
  // Remover después de 3 segundos
  setTimeout(() => {
    if (notif.parentNode) {
      notif.style.animation = 'slideIn 0.3s ease-out reverse';
      setTimeout(() => notif.remove(), 300);
    }
  }, 3000);
}
