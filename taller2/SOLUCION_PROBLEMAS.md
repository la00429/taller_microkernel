# 🚨 Solución: API No Funciona

## 🎯 Problema
La API externa puede no funcionar debido a restricciones CORS o bloqueos de red.

## ✅ Solución Inmediata

### **Opción 1: Usar versión sin API**
1. **Renombrar archivos**:
   - `popup.js` → `popup_con_api.js` (backup)
   - `popup_sin_api.js` → `popup.js` (activo)

2. **Recargar extensión**:
   - `chrome://extensions/` → Buscar plugin → Botón "Recargar"

### **Opción 2: Modificar manifest.json**
Quitar permisos de API externa:
```json
{
  "host_permissions": ["<all_urls>"]
}
```
(Eliminar `"https://api.adviceslip.com/*"`)

## 🎨 ¿Qué Cambia?

### **Con API Externa**:
- Mensajes dinámicos desde internet
- Demuestra integración de servicios
- Puede fallar por restricciones de red

### **Sin API Externa**:
- Mensajes predefinidos curados
- Funciona 100% del tiempo
- Misma experiencia visual
- Simula delay de API para realismo

## 💡 Conceptos Microkernel Intactos

**Ambas versiones demuestran**:
- ✅ Extensibilidad del navegador
- ✅ Composición de funcionalidades
- ✅ Aislamiento de componentes
- ✅ APIs internas (chrome.tabs, chrome.scripting)

## 🎓 Para el Taller

### **Mensaje clave**:
> "Incluso sin API externa, el plugin demuestra cómo el microkernel permite crear experiencias ricas sin modificar el navegador"

### **Ventaja pedagógica**:
- Funciona offline
- Sin dependencias externas
- Enfoque en arquitectura, no en APIs
- Experiencia consistente para todos

## 🔄 Cambio Rápido

```bash
# En la carpeta taller2/
rename popup.js popup_con_api.js
rename popup_sin_api.js popup.js
```

¡El taller sigue siendo igual de efectivo! 🌟
