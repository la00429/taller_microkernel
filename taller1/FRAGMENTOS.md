# 🎯 Taller 1: Fragmentos de Código - Background Changer Pro

## 📋 Lista de Fragmentos a Completar

### **FRAGMENTO 1: Permisos básicos (manifest.json)**
**Ubicación**: Línea 8, dentro del array `"permissions"`
```json
"activeTab", "scripting"
```

### **FRAGMENTO 2: Permisos de host (manifest.json)**  
**Ubicación**: Línea 13, dentro del array `"host_permissions"`
```json
"<all_urls>"
```

### **FRAGMENTO 3: ID botón nature (popup.html)**
**Ubicación**: Línea 139, en el botón Nature
```html
id="btn-nature"
```

### **FRAGMENTO 4: ID botón ocean (popup.html)**
**Ubicación**: Línea 144, en el botón Ocean  
```html
id="btn-ocean"
```

### **FRAGMENTO 5: ID botón sunset (popup.html)**
**Ubicación**: Línea 149, en el botón Sunset
```html
id="btn-sunset"
```

### **FRAGMENTO 6: ID botón elegant (popup.html)**
**Ubicación**: Línea 154, en el botón Elegant
```html
id="btn-elegant"
```

### **FRAGMENTO 7: ID botón reset (popup.html)**
**Ubicación**: Línea 163, en el botón Reset
```html
id="btn-reset"
```

### **FRAGMENTO 8: Event listener principal (popup.js)**
**Ubicación**: Línea 40
```javascript
document.addEventListener('DOMContentLoaded', function() {
```

### **FRAGMENTO 9: Event listeners para botones (popup.js)**
**Ubicación**: Líneas 44-51
```javascript
document.getElementById('btn-nature').addEventListener('click', () => changeBackground('nature'));
document.getElementById('btn-ocean').addEventListener('click', () => changeBackground('ocean'));
document.getElementById('btn-sunset').addEventListener('click', () => changeBackground('sunset'));
document.getElementById('btn-elegant').addEventListener('click', () => changeBackground('elegant'));
```

### **FRAGMENTO 10: Event listener reset (popup.js)**
**Ubicación**: Línea 55
```javascript
document.getElementById('btn-reset').addEventListener('click', () => changeBackground('reset'));
```

### **FRAGMENTO 11: chrome.tabs.query (popup.js)**
**Ubicación**: Línea 68
```javascript
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
```

### **FRAGMENTO 12: chrome.scripting.executeScript (popup.js)**
**Ubicación**: Línea 77
```javascript
chrome.scripting.executeScript({
  target: {tabId: activeTab.id},
  func: applyBackgroundTheme,
  args: [themeId]
}).then(() => {
```

### **FRAGMENTO 13: Limpiar estilos anteriores (popup.js)**
**Ubicación**: Línea 98
```javascript
const previousStyle = document.getElementById('professional-bg-changer-style');
if (previousStyle) previousStyle.remove();
```

### **FRAGMENTO 14: Crear y aplicar estilo (popup.js)**
**Ubicación**: Línea 118
```javascript
const styleElement = document.createElement('style');
styleElement.id = 'professional-bg-changer-style';
styleElement.innerHTML = `
  body {
    background-color: ${theme.color} !important;
    transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }
`;
document.head.appendChild(styleElement);
```

## 🎯 Orden de Completado Sugerido

1. **FRAGMENTOS 1-2**: Permisos en manifest.json
2. **FRAGMENTOS 3-7**: IDs de botones en popup.html  
3. **FRAGMENTO 8**: Event listener principal
4. **FRAGMENTOS 9-10**: Event listeners de botones
5. **FRAGMENTOS 11-12**: APIs de Chrome
6. **FRAGMENTOS 13-14**: Manipulación del DOM

## ✅ Verificación

Después de cada grupo de fragmentos:
- **1-2**: Extension debe cargar sin errores
- **3-7**: Popup debe abrir correctamente
- **8-10**: Botones deben responder en console
- **11-12**: Funcionalidad debe ejecutarse
- **13-14**: Fondos deben cambiar visualmente
