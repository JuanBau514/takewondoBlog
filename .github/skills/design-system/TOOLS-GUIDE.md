---
name: design-system-tools-guide
description: "Herramientas y recursos recomendados para trabajar con el design system"
---

# Guía de Herramientas del Design System

## 🛠️ Herramientas Recomendadas para VS Code

### 1. **Extensiones VS Code**

#### Visualización de Colores

- **Color Picker**: `anseki.vscode-color`
  - Visual color picker integrado en VS Code
  - Muestra hex, RGB, HSL
  - Soporte de variables CSS

```bash
code --install-extension anseki.vscode-color
```

- **Color Highlight**: `naumovs.color-highlight`
  - Destaca colores en el código
  - Preview de colores en tiempo real

```bash
code --install-extension naumovs.color-highlight
```

#### Iconografía

- **Material Icon Theme**: `PKief.material-icon-theme`
  - Iconos para arquitectura del design system
  - Íconos por tipo de archivo

```bash
code --install-extension PKief.material-icon-theme
```

#### Diseño

- **Peacock**: `johnpapa.vscode-peacock`
  - Colorea las carpetas workspace del design system

```bash
code --install-extension johnpapa.vscode-peacock
```

- **SVG**: `jock.svg`
  - Visualiza y edita SVGs
  - Útil para íconos

```bash
code --install-extension jock.svg
```

#### Tailwind CSS

- **Tailwind CSS IntelliSense**: `bradlc.vscode-tailwindcss`
  - Autocompletado para clases Tailwind
  - Muestra colores del design system

```bash
code --install-extension bradlc.vscode-tailwindcss
```

- **Tailwind Fold**: `stivo.tailwind-fold`
  - Agrupa clases largos de Tailwind
  - Mejor legibilidad

```bash
code --install-extension stivo.tailwind-fold
```

#### Documentación

- **Better Comments**: `aaron-bond.better-comments`
  - Colorea comentarios por tipo
  - Útil para documentar diseño

```bash
code --install-extension aaron-bond.better-comments
```

- **Markdown Preview Enhanced**: `shd101wyy.markdown-preview-enhanced`
  - Vista previa mejorada de markdown
  - Muestra tablas y diagramas

```bash
code --install-extension shd101wyy.markdown-preview-enhanced
```

---

## 🎨 Herramientas Online Externas

### Validación de Contraste

- **WebAIM Contrast Checker**
  - https://webaim.org/resources/contrastchecker/
  - Valida WCAG AA y AAA
  - Test de daltonismo

- **Contrast Ratio**
  - https://contrast-ratio.com/
  - Interfaz simple y clara
  - Previstas en vivo

### Generación de Colores

- **Coolors.co**
  - https://coolors.co/
  - Generador de paletas
  - Exporta en múltiples formatos

- **Color Hunt**
  - https://colorhunt.co/
  - Paletas inspiradas
  - Filtering por categoría

- **Colordot.io**
  - https://www.colordot.io/
  - Selecciona colores intuitivamente
  - Modo oscuro integrado

### Desarrollo Responsive

- **Responsively App**
  - https://responsively.app/
  - Simula múltiples dispositivos
  - Inspección en tiempo real

### Documentación & Prototipos

- **Figma** (FREE & PRO)
  - https://www.figma.com/
  - Diseño colaborativo
  - Variedades de componentes
  - Modo oscuro/claro

- **Storybook** (Libre)
  - https://storybook.js.org/
  - Documenta componentes React
  - Pruebas visuales
  - Modo dark incluido

---

## 📦 Instalación de Herramientas Recomendadas

### Opción 1: Instalar Extensiones Automáticamente

Crea un archivo `.vscode/extensions.json` en tu proyecto:

```json
{
  "recommendations": [
    "anseki.vscode-color",
    "naumovs.color-highlight",
    "PKief.material-icon-theme",
    "johnpapa.vscode-peacock",
    "jock.svg",
    "bradlc.vscode-tailwindcss",
    "stivo.tailwind-fold",
    "aaron-bond.better-comments",
    "shd101wyy.markdown-preview-enhanced"
  ]
}
```

VS Code pedirá instalar automáticamente.

### Opción 2: Instalar Manualmente en Terminal

```bash
# Colores
code --install-extension anseki.vscode-color
code --install-extension naumovs.color-highlight

# Iconografía
code --install-extension PKief.material-icon-theme
code --install-extension jock.svg

# Productividad
code --install-extension johnpapa.vscode-peacock
code --install-extension aaron-bond.better-comments

# Tailwind
code --install-extension bradlc.vscode-tailwindcss
code --install-extension stivo.tailwind-fold

# Markdown
code --install-extension shd101wyy.markdown-preview-enhanced
```

---

## 🎯 Flujo de Trabajo Recomendado

### 1. **Configuración Inicial**

```bash
# 1. Abre tu proyecto en VS Code
code takewondo-frontend/

# 2. Instala las extensiones (verás prompt automático)

# 3. Abre design-system/tailwind-config-extension.js
# 4. Copia la configuración a tu tailwind.config.ts

# 5. Reinicia el servidor de desarrollo
npm run dev
```

### 2. **Desarrollo de Componentes**

```
📝 design-system.md → 🎨 Figma Mockup → 💻 Componente React → ✅ Test Contrast
```

### 3. **Validación**

```bash
# 1. Abre "design-system.md"
# 2. Revisa paletas light/dark
# 3. Copia color hex
# 4. Usa WebAIM Contrast Checker
# 5. Implementa en componente
# 6. Prueba con Color Picker extension
```

### 4. **Documentación**

```bash
# 1. Usa Better Comments para anotar
# 2. Actualiza design-system.md si es necesario
# 3. Exporta de Figma si usas
# 4. Mantén sincronizado tokens.json
```

---

## 🎨 Colores para Copiar/Pegar

### Light Mode - Hex

```
🔴 Rojo Primario:      #DA1F50
🔵 Azul Primario:      #0052CC
🟡 Amarillo:           #FFD60A
🟢 Verde:              #2D6A4F
⚪ Blanco:             #FFFFFF
⚫ Negro:              #0D0D0D
```

### Dark Mode - Hex

```
🔴 Rojo (Light):       #FF4B6E
🔵 Azul (Light):       #4A9EFF
🟡 Amarillo (Light):   #FED66D
🟢 Verde (Light):      #52B788
⚫ Fondo Oscuro:       #0D0D0D
🟦 Superficie:         #1A1A1A
```

### Dark Mode - RGB

```
🔴 Rojo:    rgb(255, 75, 110)
🔵 Azul:    rgb(74, 158, 255)
🟡 Amarillo: rgb(254, 214, 109)
🟢 Verde:   rgb(82, 183, 136)
```

---

## 📊 Plantillas para Documentación

### Template: Nuevo Componente

```markdown
## [Nombre Componente]

### Descripción

[Breve descripción]

### Variantes

- Primaria: Azul/Rojo principal
- Secundaria: [Secundario]

### Light Mode

- Background: [Color]
- Text: [Color]
- Border: [Color]

### Dark Mode

- Background: [Color]
- Text: [Color]
- Border: [Color]

### Contraste (WCAG AA)

- [Color A] sobre [Color B]: [Ratio]:1 ✅

### Código de Ejemplo

\`\`\`jsx
<Component>Contenido</Component>
\`\`\`
```

---

## 🔍 Checklist de Implementación

### Antes de usar design system:

- [ ] Instalé extensiones recomendadas
- [ ] Copié configuración Tailwind a mi proyecto
- [ ] Leí design-system.md completamente
- [ ] Comprendí diferencia light/dark mode
- [ ] Validé contrastes en WebAIM
- [ ] Testé componentes en ambos modos
- [ ] Documenté cambios en design-system.md
- [ ] Sincronicé tokens.json si cambié colores

### Al crear nuevo componente:

- [ ] Usé colores del design system
- [ ] Validé contraste (mínimo 4.5:1)
- [ ] Implementé light y dark mode
- [ ] Probé en Figma/Storybook
- [ ] Documenté en README del componente
- [ ] Coherente con espaciado (escala 8px)
- [ ] Tipografía sigue la escala
- [ ] Transiciones usan easing smooth

---

## 🚀 Scripting Útil

### Script: Extraer colores de design-system.md

```bash
# Copia todos los hex colors de design-system.md
grep -oE '#[0-9A-Fa-f]{6}' design-system/design-system.md | sort | uniq

# Resultado:
# #0052CC
# #0D0D0D
# #2D6A4F
# #DA1F50
# #FFD60A
# #FFFFFF
```

### Script: Validar Tailwind config

```bash
# Verifica que tailwind.config.ts sea válido
npx tailwindcss -i ./src/input.css -o ./src/output.css --check
```

---

## 👥 Recursos de Comunidad

### Design System Públicos (Inspiración)

- **Material Design**: https://material.io/design
- **Ant Design**: https://ant.design/
- **ShadCN/UI**: https://ui.shadcn.com/
- **Chakra UI**: https://chakra-ui.com/

### Comunidades

- **Taiga for Design Systems**: https://taiga.io/
- **Design Observer**: https://designobserver.com/
- **A List Apart**: https://alistapart.com/

---

## 📞 Troubleshooting

### "No veo cambios de color en Tailwind"

1. Verifica que tailwind.config.ts extienda `designSystemConfig`
2. Reinicia servidor: `npm run dev`
3. Limpia caché: `rm -rf .next build dist`
4. Reconstruye: `npm run build`

### "Los colores se ven diferentes en oscuro"

1. Verifica que `dark:` clase está aplicada
2. Usa DevTools para inspeccionar computed styles
3. Abre en navegador: `html { color-scheme: dark; }`
4. Valida en https://webaim.org/resources/contrastchecker/

### "No aparece preview de color en VS Code"

1. Instala `anseki.vscode-color`
2. Abre paleta de comandos: `Ctrl+Shift+P`
3. Escribe "Color Picker: Open"
4. Verifica que los colores están en formato de hex válido

---

## 📋 Próximos Pasos

1. ✅ Instala extensiones
2. ✅ Integra Tailwind config
3. ✅ Lee design-system.md
4. 🔲 Crea componentes base (Button, Card, Input)
5. 🔲 Documenta en Storybook
6. 🔲 Obtén feedback del equipo
7. 🔲 Itera y mejora colores si es necesario

---

**Última Actualización**: 12 de marzo 2026
**Nivel**: Intermedio → Avanzado
