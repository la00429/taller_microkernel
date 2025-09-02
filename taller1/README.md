# 🎨 Taller: Plugin de Navegador - Arquitectura Microkernel

## 🎯 Objetivo (30 minutos)
Crear un plugin funcional que demuestre cómo funciona la arquitectura microkernel.

## 🏗️ Conceptos Clave
- **Microkernel**: Navegador (sistema base estable)
- **Plugin**: Nuestra extensión (funcionalidad externa)
- **API**: Chrome Extension API (comunicación)
- **Extensibilidad**: Agregar funciones sin modificar el core

## 🚀 Instalación Rápida
1. Abrir Chrome → `chrome://extensions/`
2. Activar "Modo de desarrollador"
3. "Cargar extensión sin empaquetar" → Seleccionar carpeta `plugin/`
4. ¡Probar en cualquier página web!

## 🎨 Funcionalidad
- **🌿 Verde**: Fondo verde
- **🌊 Azul**: Fondo azul  
- **🔥 Rojo**: Fondo rojo
- **🔄 Original**: Restaurar fondo

## 💡 ¿Por qué es Microkernel?
- El **navegador** NO se modifica
- Solo usamos sus **APIs públicas**
- El plugin funciona **independientemente**
- Fácil **instalación/desinstalación**

¡El navegador sigue siendo el mismo, pero ahora puede cambiar fondos! 🌟
