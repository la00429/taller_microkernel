// Plugin de Mensajes Motivacionales
console.log('✨ Plugin de mensajes iniciado');

// Configurar botones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  console.log('Configurando botones de mensajes...');
  
  document.getElementById('btn-motivacional').addEventListener('click', () => obtenerMensaje('motivational'));
  document.getElementById('btn-inspiracional').addEventListener('click', () => obtenerMensaje('inspirational'));
  document.getElementById('btn-exito').addEventListener('click', () => obtenerMensaje('success'));
});

async function obtenerMensaje(tipo) {
  console.log('Obteniendo mensaje de tipo:', tipo);
  
  // Mostrar indicador de carga
  mostrarCarga(true);
  mostrarError(false);
  
  try {
    // Obtener mensaje de la API
    const mensaje = await fetchMensaje(tipo);
    
    // Enviar mensaje a la página activa
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs[0]) {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          func: mostrarMensajeEnPagina,
          args: [mensaje, tipo]
        });
      }
    });
    
  } catch (error) {
    console.error('Error obteniendo mensaje:', error);
    mostrarError(true);
  } finally {
    mostrarCarga(false);
  }
}

async function fetchMensaje(tipo) {
  // Mensajes predefinidos según el tipo como backup
  const mensajesBackup = {
    'motivational': [
      { texto: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.", autor: "Robert Collier" },
      { texto: "No esperes por el momento perfecto, toma el momento y hazlo perfecto.", autor: "Anónimo" },
      { texto: "Tu única limitación eres tú mismo.", autor: "Anónimo" }
    ],
    'inspirational': [
      { texto: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.", autor: "John Lennon" },
      { texto: "Sé el cambio que quieres ver en el mundo.", autor: "Gandhi" },
      { texto: "El futuro pertenece a quienes creen en la belleza de sus sueños.", autor: "Eleanor Roosevelt" }
    ],
    'success': [
      { texto: "El éxito no es final, el fracaso no es fatal: es el coraje de continuar lo que cuenta.", autor: "Winston Churchill" },
      { texto: "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.", autor: "Winston Churchill" },
      { texto: "No midas tu éxito por lo que has logrado, sino por lo que has superado.", autor: "Anónimo" }
    ]
  };
  
  try {
    // Intentar usar API de consejos simple
    const response = await fetch('https://api.adviceslip.com/advice');
    if (response.ok) {
      const data = await response.json();
      return {
        texto: data.slip.advice,
        autor: "Advice Slip API",
        tipo: tipo
      };
    }
  } catch (error) {
    console.log('API no disponible, usando mensajes predefinidos');
  }
  
  // Usar mensajes predefinidos como fallback
  const mensajes = mensajesBackup[tipo] || mensajesBackup['inspirational'];
  const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
  
  return {
    texto: mensajeAleatorio.texto,
    autor: mensajeAleatorio.autor,
    tipo: tipo
  };
}

// Esta función se ejecuta EN LA PÁGINA WEB
function mostrarMensajeEnPagina(mensaje, tipo) {
  console.log('📱 Mostrando mensaje en página:', mensaje);
  
  // Remover mensaje anterior si existe
  const anterior = document.getElementById('mensaje-motivacional-plugin');
  if (anterior) {
    anterior.remove();
  }
  
  // Colores según el tipo
  const colores = {
    'motivational': 'linear-gradient(135deg, #ff6b6b, #ee5a52)',
    'inspirational': 'linear-gradient(135deg, #4ecdc4, #44a08d)',
    'success': 'linear-gradient(135deg, #feca57, #ff9ff3)'
  };
  
  const emojis = {
    'motivational': '💪',
    'inspirational': '🌟',
    'success': '🚀'
  };
  
  // Crear contenedor del mensaje
  const contenedor = document.createElement('div');
  contenedor.id = 'mensaje-motivacional-plugin';
  contenedor.style.cssText = `
    position: fixed !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    background: ${colores[tipo]} !important;
    color: white !important;
    padding: 30px !important;
    border-radius: 20px !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
    z-index: 999999 !important;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important;
    max-width: 500px !important;
    width: 90% !important;
    text-align: center !important;
    animation: aparecer 0.5s ease-out !important;
    cursor: pointer !important;
  `;
  
  contenedor.innerHTML = `
    <div style="font-size: 40px; margin-bottom: 20px;">${emojis[tipo]}</div>
    <div style="font-size: 18px; line-height: 1.5; margin-bottom: 15px; font-weight: 500;">
      "${mensaje.texto}"
    </div>
    <div style="font-size: 14px; opacity: 0.9; margin-bottom: 20px;">
      — ${mensaje.autor}
    </div>
    <div style="font-size: 12px; opacity: 0.7;">
      Haz clic para cerrar
    </div>
  `;
  
  // Agregar animación CSS
  if (!document.getElementById('mensaje-motivacional-styles')) {
    const styles = document.createElement('style');
    styles.id = 'mensaje-motivacional-styles';
    styles.innerHTML = `
      @keyframes aparecer {
        from {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.8);
        }
        to {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
      }
    `;
    document.head.appendChild(styles);
  }
  
  // Cerrar al hacer clic
  contenedor.addEventListener('click', function() {
    contenedor.style.animation = 'aparecer 0.3s ease-out reverse';
    setTimeout(() => contenedor.remove(), 300);
  });
  
  // Cerrar automáticamente después de 10 segundos
  setTimeout(() => {
    if (contenedor.parentNode) {
      contenedor.style.animation = 'aparecer 0.3s ease-out reverse';
      setTimeout(() => contenedor.remove(), 300);
    }
  }, 10000);
  
  document.body.appendChild(contenedor);
}

// Funciones auxiliares del popup
function mostrarCarga(mostrar) {
  document.getElementById('loading').style.display = mostrar ? 'block' : 'none';
}

function mostrarError(mostrar) {
  document.getElementById('error').style.display = mostrar ? 'block' : 'none';
}
