# 🎓 Guía del Taller - 30 Minutos

## 📋 Estructura del Taller

### **Fase 1: Demo y Conceptos (10 min)**
1. **Mostrar plugin funcionando** (3 min)
   - Abrir cualquier página web
   - Usar el plugin para cambiar fondos
   - **Mensaje clave**: "El navegador sigue igual, pero ahora puede cambiar fondos"

2. **Explicar microkernel** (7 min)
   - **Navegador** = microkernel (sistema básico estable)
   - **Plugin** = funcionalidad externa
   - **API** = Chrome Extension API (puente de comunicación)
   - **Sin modificar el core** = navegador no cambia

### **Fase 2: Instalación y Prueba (15 min)**
1. **Instalación** (5 min)
   - `chrome://extensions/`
   - "Modo desarrollador" ON
   - "Cargar extensión sin empaquetar"
   - Seleccionar carpeta `plugin/`

2. **Pruebas** (10 min)
   - Probar en diferentes páginas web
   - Ver notificaciones
   - Experimentar con colores
   - Restaurar original

### **Fase 3: Reflexión (5 min)**
**Preguntas clave:**
- ¿Qué modificamos del navegador? → ¡Nada!
- ¿Cómo se comunican los componentes? → APIs
- ¿Qué otros plugins podrían crear? → Ideas libres

## 🎯 Conceptos Demostrados

| Concepto | Ejemplo en el Plugin |
|----------|---------------------|
| **Microkernel** | Navegador como base estable |
| **Extensibilidad** | Plugin agrega funcionalidad |
| **APIs** | chrome.tabs, chrome.scripting |
| **Aislamiento** | Plugin no afecta estabilidad |
| **Modularidad** | Fácil instalar/desinstalar |

## 💡 Mensaje Final
> "En 30 minutos crearon un plugin funcional sin modificar una línea del navegador. Eso es el poder del microkernel: ¡extensibilidad elegante!"

## 🚀 Próximos Pasos
- Explorar más APIs de Chrome
- Crear otros plugins
- Estudiar otros sistemas microkernel (VS Code, WordPress)
- Aplicar principios en sus proyectos
