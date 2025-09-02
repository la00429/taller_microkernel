# ✨ Taller 2: Fragmentos de Código - Motivational Messages Pro

## 📋 Lista de Fragmentos a Completar

### **FRAGMENTO 1: Permisos básicos (manifest.json)**
**Ubicación**: Línea 8-10, dentro del array `"permissions"`
```json
"activeTab", "scripting"
```

### **FRAGMENTO 2: Permisos de host (manifest.json)**
**Ubicación**: Línea 13-15, dentro del array `"host_permissions"`  
```json
"<all_urls>"
```

### **FRAGMENTO 3: ID botón motivational (popup.html)**
**Ubicación**: Línea 162, en el botón Get Motivated
```html
id="btn-motivational"
```

### **FRAGMENTO 4: ID botón inspirational (popup.html)**
**Ubicación**: Línea 168, en el botón Find Inspiration
```html
id="btn-inspirational"
```

### **FRAGMENTO 5: ID botón success (popup.html)**
**Ubicación**: Línea 174, en el botón Success Mindset
```html
id="btn-success"
```

### **FRAGMENTO 6: Event listener principal (popup.js)**
**Ubicación**: Línea 83
```javascript
document.addEventListener('DOMContentLoaded', initializeApplication);
```

### **FRAGMENTO 7: Event listeners para botones (popup.js)**
**Ubicación**: Líneas 95-101
```javascript
document.getElementById('btn-motivational').addEventListener('click', () => fetchMessage('motivational'));
document.getElementById('btn-inspirational').addEventListener('click', () => fetchMessage('inspirational'));
document.getElementById('btn-success').addEventListener('click', () => fetchMessage('success'));
```

### **FRAGMENTO 8: chrome.tabs.query (popup.js)**
**Ubicación**: Línea 146
```javascript
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
```

### **FRAGMENTO 9: chrome.scripting.executeScript (popup.js)**
**Ubicación**: Línea 154
```javascript
chrome.scripting.executeScript({
  target: {tabId: activeTab.id},
  func: displayMessageOnPage,
  args: [message, category]
}).then(() => {
```

### **FRAGMENTO 10: Limpiar mensajes anteriores (popup.js)**
**Ubicación**: Línea 190
```javascript
const existingMessage = document.getElementById('motivational-pro-message');
if (existingMessage) existingMessage.remove();
```

### **FRAGMENTO 11: Crear elemento del mensaje (popup.js)**
**Ubicación**: Línea 206
```javascript
const messageContainer = document.createElement('div');
messageContainer.id = 'motivational-pro-message';
```

### **FRAGMENTO 12: Agregar mensaje al DOM (popup.js)**
**Ubicación**: Línea 260
```javascript
document.body.appendChild(messageContainer);
```

## 🎯 Orden de Completado Sugerido

1. **FRAGMENTOS 1-2**: Permisos en manifest.json
2. **FRAGMENTOS 3-5**: IDs de botones en popup.html
3. **FRAGMENTO 6**: Event listener principal  
4. **FRAGMENTO 7**: Event listeners de botones
5. **FRAGMENTOS 8-9**: APIs de Chrome para comunicación
6. **FRAGMENTOS 10-12**: Manipulación avanzada del DOM

## ✅ Verificación por Etapas

### **Etapa 1 (Fragmentos 1-2)**:
- Extension carga sin errores
- Aparece en chrome://extensions/

### **Etapa 2 (Fragmentos 3-5)**:  
- Popup abre correctamente
- Botones se ven bien

### **Etapa 3 (Fragmentos 6-7)**:
- Console muestra "Application initialized"
- Botones responden a clicks

### **Etapa 4 (Fragmentos 8-9)**:
- Console muestra "Fetching message"
- Script se ejecuta en la página

### **Etapa 5 (Fragmentos 10-12)**:
- Mensajes aparecen en la página
- Animaciones funcionan correctamente
- Click para cerrar funciona

## 🔧 Conceptos Demostrados por Fragmento

- **1-2**: Configuración de permisos del microkernel
- **3-5**: Interfaz de usuario profesional
- **6-7**: Inicialización y gestión de eventos
- **8-9**: Comunicación entre componentes del microkernel
- **10-12**: Inyección de contenido y manipulación del DOM

## 🎓 Resultado Final

Al completar todos los fragmentos tendrás:
- ✅ Plugin profesional funcionando
- ✅ Mensajes motivacionales con animaciones
- ✅ Arquitectura microkernel + servicios externos
- ✅ Experiencia de usuario de nivel profesional
