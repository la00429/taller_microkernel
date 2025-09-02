# 🎯 Taller 1: Plugin de Cambio de Fondo - Microkernel

## 📋 Objetivo
Completar un plugin que demuestre arquitectura microkernel agregando las partes faltantes.

## 🚀 Pasos para Completar

### 1. **Completar manifest.json**
- Agregar permisos: `"activeTab"`, `"scripting"`
- Agregar host_permissions: `"<all_urls>"`

### 2. **Completar popup.html**
- Agregar IDs a los botones: `id="btn-green"`, `id="btn-blue"`, etc.

### 3. **Completar popup.js**
- Agregar event listeners para los botones
- Completar función `cambiarFondo()`
- Completar función `aplicarFondo()`

## 🔍 Conceptos de Microkernel Demostrados

- **Microkernel**: Navegador (sistema base)
- **Plugin**: Nuestra extensión (funcionalidad externa)
- **API**: Chrome Extension API (comunicación)
- **Extensibilidad**: Sin modificar el navegador

## 📁 Estructura
- `para_completar/` - Plugin con partes faltantes
- `solucion/` - Plugin completo funcionando

## ✅ Verificar que Funciona
1. Instalar en `chrome://extensions/`
2. Probar en cualquier página web
3. Los fondos deben cambiar correctamente
