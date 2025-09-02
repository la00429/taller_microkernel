# 📁 Estructura de los Talleres - Microkernel

## 🎯 Organización General

```
taller/
├── taller1/                    # Plugin de Cambio de Fondo
│   ├── README.md              # Instrucciones básicas
│   ├── TALLER.md              # Guía del instructor  
│   ├── INSTRUCCIONES.md       # Pasos para completar
│   ├── solucion/              # Plugin completo funcionando
│   │   └── plugin/
│   │       ├── manifest.json
│   │       ├── popup.html
│   │       └── popup.js
│   └── para_completar/        # Plugin con partes faltantes
│       ├── manifest.json      # (con TODOs)
│       ├── popup.html         # (con TODOs)
│       └── popup.js           # (con TODOs)
│
├── taller2/                   # Plugin de Mensajes Motivacionales
│   ├── README.md              # Documentación completa
│   ├── manifest.json          # Plugin funcionando
│   ├── popup.html
│   └── popup.js
│
└── ESTRUCTURA.md              # Este archivo
```

## 🎓 Taller 1: Fundamentos de Microkernel

### **Objetivo**: Entender conceptos básicos
- **Duración**: 30 minutos
- **Nivel**: Principiante
- **Método**: Completar partes faltantes

### **Conceptos Demostrados**:
- Microkernel como base estable
- Plugin como funcionalidad externa
- APIs para comunicación
- Extensibilidad sin modificar el core

## ✨ Taller 2: Microkernel + APIs Externas

### **Objetivo**: Integración con servicios externos
- **Duración**: 45 minutos  
- **Nivel**: Intermedio
- **Método**: Plugin completo funcionando

### **Conceptos Demostrados**:
- Orquestación de múltiples APIs
- Composición de servicios
- Manejo de asincronía
- UX avanzada con animaciones

## 🚀 Cómo Usar los Talleres

### **Para Instructores**:
1. **Taller 1**: Usar `para_completar/` como base, `solucion/` como referencia
2. **Taller 2**: Demostrar funcionando, explicar código
3. **Secuencia**: Hacer Taller 1 primero, luego Taller 2

### **Para Estudiantes**:
1. **Taller 1**: Completar TODOs en `para_completar/`
2. **Taller 2**: Instalar y probar plugin completo
3. **Reflexión**: Comparar ambos enfoques

## 💡 Progresión de Aprendizaje

### **Taller 1 → Taller 2**:
- **Básico** → **Avanzado**
- **Una API** → **Múltiples APIs**  
- **Funcionalidad simple** → **UX compleja**
- **Completar código** → **Analizar arquitectura**

## 🎯 Mensajes Clave

### **Ambos talleres demuestran**:
> "El navegador sigue siendo el mismo, pero ahora puede hacer mucho más"

### **Diferencia clave**:
- **Taller 1**: Extensión básica del navegador
- **Taller 2**: Integración de ecosistemas completos

¡Arquitectura microkernel: simple en concepto, poderosa en aplicación! 🌟
