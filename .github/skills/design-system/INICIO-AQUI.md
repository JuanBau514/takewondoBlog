# Skill: Design System Taekwondo Club

## 🎯 ¿Qué es este Skill?

Un **skill** es una capacidad especializada que puedes invocar en VS Code cuando la necesites. Este skill de **Design System** proporciona:

✅ Una **guía de estilo completa** para tu aplicación  
✅ **Paletas de colores** con light/dark mode  
✅ **Configuración Tailwind** lista para usar  
✅ **Componentes React** documentados  
✅ **Herramientas recomendadas** para desarrollo

---

## 📁 Archivos del Skill

```
.github/skills/design-system/
│
├── 📄 SKILL.md                    ← Descripción del skill
├── 📄 README.md                   ← Guía de inicio rápido (LEER PRIMERO)
├── 📄 design-system.md            ← DOCUMENTO PRINCIPAL - Paletas, tipografía, componentes
├── 📄 TOOLS-GUIDE.md              ← Herramientas y extensiones recomendadas
├── 📋 tokens.json                 ← Tokens de diseño en formato JSON
├── 💻 tailwind-config-extension.js ← Configuración Tailwind lista para implementar
└── 🎨 component-examples.tsx      ← Ejemplos de componentes React/TS
```

---

## 🚀 Cómo Usar El Skill

### Opción 1: Acceso Rápido desde VS Code

1. **Escribe `/` en un chat** o pregunta a Copilot
2. **Busca "design-system"** o "estilo"
3. **Selecciona** "Design System Taekwondo"
4. Recibirás contexto automático del skill

### Opción 2: Lectura Manual

1. Abre `.github/skills/design-system/README.md`
2. Sigue los pasos descritos
3. Consulta `design-system.md` según necesites

### Opción 3: Integración Tailwind (Recomendado)

1. Abre `tailwind-config-extension.js`
2. Copia la configuración
3. Pégala en tu `tailwind.config.ts`
4. Reinicia: `npm run dev`

---

## 🎨 Colores Principales (Para Recordar)

### Light Mode 🌞

```
🔴 Rojo Principal:     #DA1F50
🔵 Azul Primario:      #0052CC
🟡 Amarillo:           #FFD60A
🟢 Verde:              #2D6A4F
⚪ Fondo:              #FFFFFF
⚫ Texto:              #0D0D0D
```

### Dark Mode 🌙

```
🔴 Rojo (más claro):   #FF4B6E
🔵 Azul (más claro):   #4A9EFF
🟡 Amarillo (suave):   #FED66D
🟢 Verde (más claro):  #52B788
⚫ Fondo:              #0D0D0D
🟦 Superficie:         #1A1A1A
```

---

## 📖 Lectura Recomendada

**Orden de lectura:**

1. 📄 **README.md** - Introducción y cómo usar (5 min)
2. 🎨 **design-system.md** - Guía completa (15 min)
3. 💻 **component-examples.tsx** - Componentes listos (10 min)
4. 📄 **TOOLS-GUIDE.md** - Herramientas extras (5 min)

**Total**: ~35 minutos para entender completamente

---

## 💡 Casos de Uso

### ✅ Usa el Skill cuando:

- "Necesito crear un nuevo botón consistente"
- "¿Cuál es el color principal para CTAs?"
- "Cómo implementar dark mode"
- "Quiero componentes React del design system"
- "¿Qué extensiones necesito?"
- "Necesito validar contrastes"

### ❌ NO necesitas el Skill para:

- Preguntas generales de JavaScript/React
- Debugging de código
- Issues de compilación
- Configuración de npm/Node

---

## 🎯 Flujo Típico

```
┌─────────────────────────────────────┐
│ 1. Lee README.md (inicio rápido)    │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│ 2. Consulta design-system.md        │
│    (busca paleta, componente, etc)  │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│ 3. Copia color/código apropiado     │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│ 4. Implementa en tu componente      │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│ 5. Valida contraste en WebAIM       │
│    (si es color de texto)           │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│ 6. Prueba en light y dark mode      │
└─────────────────────────────────────┘
```

---

## 📊 Validación Rápida de Colores

**Necesito verificar si mi contraste es válido:**

1. Abre → https://webaim.org/resources/contrastchecker/
2. Copia color de fondo (ej: `#DA1F50`)
3. Copia color de texto (ej: `#FFFFFF`)
4. Verifica que sea ≥ 4.5:1 para WCAG AA

**Todos nuestros colores ya están validados ✅**

---

## 🔧 Instalación de Extensiones

Si VS Code te pide instalar extensiones:

**→ CLICK EN "Install All"** (verás el prompt arriba a la derecha)

Si no ves el prompt:

```bash
# Terminal en tu proyecto
cd takewondo-frontend
code --install-extension anseki.vscode-color
code --install-extension bradlc.vscode-tailwindcss
# ... (un comando por extensión)
```

---

## ❓ Preguntas Rápidas Respondidas

**P: ¿Cuál color uso para botones primarios?**  
R: `#DA1F50` (light) / `#FF4B6E` (dark)

**P: ¿Cómo cambio a dark mode en mi app?**  
R: Agrega clase `dark` al `<html>` → `document.documentElement.classList.toggle('dark')`

**P: ¿Dónde está el archivo Figma?**  
R: No incluído, pero puedes crear uno importando los colores de `tokens.json`

**P: ¿Puedo cambiar los colores?**  
R: Sí, pero actualiza ambos: `tailwind-config-extension.js` Y `design-system.md`

**P: ¿El design system es responsive?**  
R: Sí, incluye breakpoints: mobile (640px), tablet (1024px), desktop (1440px+)

---

## 📞 ¿Necesitas Ayuda?

### Con el Skill:

→ Consulta `README.md` o `TOOLS-GUIDE.md`

### Con Tailwind:

→ https://tailwindcss.com/docs

### Con colores/accessibilidad:

→ https://webaim.org/resources/contrastchecker/

### Con React/Componentes:

→ Usa `component-examples.tsx` como referencia

---

## 📈 Próximos Pasos Recomendados

**AHORA (in the next 15 min):**

- [ ] Lee este archivo
- [ ] Abre `README.md`
- [ ] Revisa colores principales

**HOY:**

- [ ] Lee `design-system.md` completamente
- [ ] Copia configuración Tailwind
- [ ] Prueba crear un botón simple

**ESTA SEMANA:**

- [ ] Implementa light/dark mode
- [ ] Crea componentes base (Button, Card, Input)
- [ ] Valida contrastes

**PRÓXIMAS SEMANAS:**

- [ ] Documenta en Storybook
- [ ] Capacita al equipo
- [ ] Itera basado en feedback

---

## 🎓 Aprendizaje

### Tópicos Cubiertos:

- ✅ Teoría de color en diseño
- ✅ Accesibilidad (WCAG AA)
- ✅ Light/Dark modes
- ✅ Tipografía escalar
- ✅ Espaciado consistente
- ✅ Componentes React reutilizables
- ✅ Integración Tailwind CSS
- ✅ Herramientas del ecosistema

### Habilidades Adquiridas:

1. Crear design systems profesionales
2. Validar accesibilidad de colores
3. Implementar dark mode
4. Usar Tailwind CSS avanzado
5. Documentar para equipos

---

## 📋 Resumen de Archivos

| Archivo                          | Propósito                     | Lectura        |
| -------------------------------- | ----------------------------- | -------------- |
| **README.md**                    | Inicio rápido y overview      | 5-10 min       |
| **design-system.md**             | Guía completa de estilo       | 15-20 min      |
| **TOOLS-GUIDE.md**               | Herramientas y extensiones    | 10 min         |
| **tokens.json**                  | Valores en formato JSON       | Referencia     |
| **tailwind-config-extension.js** | Config Tailwind lista         | Implementar    |
| **component-examples.tsx**       | Componentes React boilerplate | Copiar/adaptar |

---

## 🚀 ¡Comienza Aquí!

```
1️⃣ Abre: design-system/README.md
   ↓
2️⃣ Consulta: design-system/design-system.md
   ↓
3️⃣ Implementa: Copia colores a tu proyecto
   ↓
4️⃣ Prueba: Light y dark mode funcionando
   ↓
5️⃣ Documenta: Tu componente personalizado
```

---

**Status**: ✅ Design System Activo y Listo  
**Versión**: 1.0  
**Última Actualización**: 12 de marzo 2026  
**Mantenedor**: Design System Team

---

**¿Listo para comenzar? Lee `README.md` a continuación →**
