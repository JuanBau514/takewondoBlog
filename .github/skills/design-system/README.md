# README - Design System Skill

## 📋 Descripción General

Este skill proporciona un **sistema de diseño completo** para tu aplicación de Taekwondo Club, incluyendo:

- ✅ **Paleta de colores** inspirada en la bandera coreana y colombiana
- ✅ **Modo claro y oscuro** completamente especificados
- ✅ **Sistema de tipografía** escalable
- ✅ **Espaciado consistente** basado en una escala de 8px
- ✅ **Componentes UI** documentados (botones, tarjetas, inputs)
- ✅ **Guías de accesibilidad** (WCAG AA compliant)
- ✅ **Configuración Tailwind** lista para implementar
- ✅ **Ejemplos de componentes React** (TSX)

---

## 📂 Estructura de Archivos

```
.github/skills/design-system/
├── SKILL.md                      # Este archivo (definición del skill)
├── design-system.md              # Guía de estilo completa
├── tokens.json                   # Tokens de diseño en JSON
├── tailwind-config-extension.js  # Configuración Tailwind extendida
├── component-examples.tsx        # Ejemplos de componentes React/TS
└── README.md                     # Este documento
```

---

## 🎨 Colores Principales

### Paleta Coreana (Bandera de Corea)

| Color      | Hex       | Uso                           |
| ---------- | --------- | ----------------------------- |
| **Rojo**   | `#DA1F50` | Primario, CTAs, énfasis       |
| **Azul**   | `#0052CC` | Links, secundario, highlights |
| **Blanco** | `#FFFFFF` | Fondos claros                 |
| **Negro**  | `#0D0D0D` | Texto, bordes                 |

### Paleta Colombiana (Complementaria)

| Color        | Hex       | Uso                          |
| ------------ | --------- | ---------------------------- |
| **Amarillo** | `#FFD60A` | Alertas, badges, atención    |
| **Verde**    | `#2D6A4F` | Elementos secundarios, éxito |

### Modo Oscuro (Variantes)

Todos los colores tienen **variantes optimizadas para modo oscuro** que mantienen accesibilidad y contraste.

---

## 🚀 Cómo Usar

### 1. **Consultar la Guía de Estilo**

Abre `design-system.md` para ver:

- Paletas completas con códigos RGB
- Especificaciones de tipografía
- Tamaños de espaciado
- Estilos de componentes
- Guías de accesibilidad

### 2. **Integrar Colores en Tailwind**

Copia la configuración de `tailwind-config-extension.js` a tu `tailwind.config.ts`:

```javascript
// tailwind.config.ts
import designSystemConfig from "./path/to/tailwind-config-extension.js";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: designSystemConfig.extend,
  },
  plugins: [],
};
```

### 3. **Usar en Componentes**

Implementa componentes con las clases Tailwind del design system:

```jsx
// Button con colores del design system
<button className="
  bg-taekwondo-red-500 dark:bg-taekwondo-red-dark-500
  text-white dark:text-neutral-dark-0
  px-6 py-3 rounded-lg font-semibold
  hover:bg-taekwondo-red-800 dark:hover:bg-taekwondo-red-dark-600
  transition-colors duration-200
">
  Registrarse
</button>

// Card
<div className="
  bg-white dark:bg-secondary-dark
  border border-light-primary dark:border-dark-primary
  rounded-md p-6 shadow-light-md dark:shadow-dark-md
">
  Contenido
</div>

// Input
<input className="
  bg-secondary-light dark:bg-secondary-dark
  border-2 border-light-primary dark:border-dark-primary
  text-primary-light dark:text-primary-dark
  focus:border-taekwondo-blue-500 dark:focus:border-taekwondo-blue-dark-500
  rounded-lg px-4 py-2
" />
```

### 4. **Copiar Componentes React**

Usa los componentes de `component-examples.tsx` como base:

```jsx
import { Button, Card, Input } from "./design-system/components";

export function MyPage() {
  return (
    <>
      <Card hoverable>
        <h3>Mis Clases</h3>
        <p>Información sobre las clases...</p>
        <Button variant="primary">Inscribirse</Button>
      </Card>
    </>
  );
}
```

### 5. **Activar Modo Oscuro**

Añade una clase `dark` al elemento raíz:

```jsx
// Toggle dark mode
function DarkModeToggle() {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <button
      onClick={() => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark", !isDark);
      }}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
```

---

## 📊 Tokens de Diseño

Los tokens están disponibles en `tokens.json` para referencia programática:

```json
{
  "colors": {
    "light": {
      "primary": {
        "red": "#DA1F50",
        "blue": "#0052CC"
      }
    },
    "dark": {
      "primary": {
        "red": "#FF4B6E",
        "blue": "#4A9EFF"
      }
    }
  }
}
```

Úsalos en configuraciones, scripts o herramientas de build.

---

## ♿ Accesibilidad

### Contrastes Validados

Todos los colores cumplen **WCAG AA** (4.5:1 mínimo):

- ✅ Negro (#0D0D0D) sobre Blanco (#FFFFFF): 18.5:1
- ✅ Blanco sobre Rojo (#DA1F50): 4.8:1
- ✅ Negro sobre Amarillo (#FFD60A): 13.2:1

### Buenas Prácticas

1. Usar `aria-labels` en botones sin texto
2. Implementar orden de tabulación lógico
3. Asegurar textos suficientemente grandes
4. No depender solo del color para comunicar información
5. Testear con herramientas como axe DevTools

---

## 🌓 Modo Claro vs Oscuro

### Light Mode (Primario)

```css
Background:  #FFFFFF
Text:        #0D0D0D
Accent Red:  #DA1F50
Accent Blue: #0052CC
```

### Dark Mode (Secundario)

```css
Background:  #0D0D0D
Text:        #F5F5F5
Accent Red:  #FF4B6E (brighter)
Accent Blue: #4A9EFF (brighter)
```

**Cambios clave en dark mode:**

- Fondos oscuros previenen fatiga visual
- Colores de acento son **más brillantes** para mantener contraste
- Sombras se adaptan para no aparecer ocultos

---

## 📱 Breakpoints Responsive

```
Mobile:   < 640px
Tablet:   640px - 1024px
Desktop:  > 1024px
```

Úsalos con Tailwind:

```jsx
<div
  className="
  grid grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
"
>
  {/* Contenido responsivo */}
</div>
```

---

## 🔧 Personalización

Si necesitas ajustar colores o tipografía:

1. **Edita `tailwind-config-extension.js`** para cambios de Tailwind
2. **Edita `design-system.md`** para documentación
3. **Actualiza `tokens.json`** para mantener sincronizados los tokens

**Importante:** Mantén coherencia entre archivos.

---

## 📚 Ejemplos Prácticos

### Hero Section

```jsx
<section
  className="py-20 px-4 bg-gradient-to-br from-white dark:from-primary-dark 
                   to-secondary-light dark:to-secondary-dark"
>
  <h1 className="h1 text-primary-light dark:text-primary-dark mb-4">
    Bienvenido al Taekwondo Club
  </h1>
  <Button variant="primary" size="lg">
    Inscribirse Ahora
  </Button>
</section>
```

### Card Grid

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {clases.map((clase) => (
    <Card key={clase.id} hoverable>
      <h3 className="h3 text-primary-light dark:text-primary-dark">
        {clase.nombre}
      </h3>
      <Badge variant="success">{clase.nivel}</Badge>
      <Button variant="primary" className="mt-4">
        Más Información
      </Button>
    </Card>
  ))}
</div>
```

### Form

```jsx
<Form
  title="Contacto"
  fields={[
    { name: "nombre", label: "Nombre", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "mensaje", label: "Mensaje", type: "textarea" },
  ]}
  onSubmit={(data) => console.log(data)}
/>
```

---

## 🔗 Recursos Externos

- **Figma Design File**: [Crear en Figma] (opcional)
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Color Accessibility**: https://webaim.org/articles/contrast/
- **Korean Design**: https://en.wikipedia.org/wiki/Flag_of_South_Korea
- **Colombian Colors**: https://en.wikipedia.org/wiki/Flag_of_Colombia

---

## 🤝 Contribuyendo

Si encuentras inconsistencias o tienes sugerencias:

1. Revisa los archivos del skill
2. Documenta cambios en `design-system.md`
3. Actualiza tokens en `tokens.json`
4. Prueba con ambos modos (claro/oscuro)

---

## 📝 Control de Versiones

| Versión | Fecha      | Cambios                              |
| ------- | ---------- | ------------------------------------ |
| **1.0** | 12/03/2026 | Guía completa con paletas light/dark |
|         |            | Componentes React documentados       |
|         |            | Integración Tailwind lista           |

---

## ❓ Preguntas Frecuentes

**P: ¿Cómo cambio de modo claro a oscuro?**
R: Agrega/remove la clase `dark` al `html` o usa `document.documentElement.classList.toggle('dark')`.

**P: ¿Puedo usar otros colores?**
R: Sí, pero mantén consistencia. Extiende `tailwind-config-extension.js` si necesitas nuevos colores.

**P: ¿Es responsivo el design system?**
R: Sí, incluye breakpoints para móvil (640px), tablet (1024px) y desktop.

**P: ¿Son accesibles los componentes?**
R: Los colores cumplen WCAG AA. Los componentes deben implementarse con `aria-labels` y navegación por teclado.

---

## 📞 Soporte

Para preguntas sobre este design system, consulta:

- `design-system.md` - Documentación completa
- `component-examples.tsx` - Ejemplos de código
- `tokens.json` - Referencia de valores

---

**Made with 💪 for Taekwondo Club**

_Last Updated: 12 de marzo 2026_
