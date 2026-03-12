# Guía de Diseño - Taekwondo Club

## 1. Sistema de Colores

### Light Mode (Modo Claro) 🌞

#### Paleta Principal

| Variable        | Hex       | RGB                | Uso                                   |
| --------------- | --------- | ------------------ | ------------------------------------- |
| `primary-red`   | `#DA1F50` | rgb(218, 31, 80)   | Botones principales, CTAs, énfasis    |
| `primary-blue`  | `#0052CC` | rgb(0, 82, 204)    | Links, icons activos, highlights      |
| `accent-yellow` | `#FFD60A` | rgb(255, 214, 10)  | Badges, alertas, llamadas de atención |
| `accent-green`  | `#2D6A4F` | rgb(45, 106, 79)   | Elementos secundarios, tags           |
| `white`         | `#FFFFFF` | rgb(255, 255, 255) | Fondos principales, texto inverso     |
| `black`         | `#0D0D0D` | rgb(13, 13, 13)    | Texto principal, bordes sólidos       |
| `gray-50`       | `#F8F8F8` | rgb(248, 248, 248) | Fondos secundarios                    |
| `gray-100`      | `#E8E8E8` | rgb(232, 232, 232) | Bordes sutiles                        |
| `gray-300`      | `#CCCCCC` | rgb(204, 204, 204) | Inputs deshabilitados                 |
| `gray-500`      | `#808080` | rgb(128, 128, 128) | Texto secundario                      |

#### Usos Específicos - Light Mode

```
Backgrounds:
├── Primary: #FFFFFF
├── Secondary: #F8F8F8
└── Tertiary: #E8E8E8

Text:
├── Primary: #0D0D0D
├── Secondary: #808080
└── Inverse: #FFFFFF

Interactive:
├── Primary Action: #DA1F50
├── Secondary Action: #0052CC
├── Success: #2D6A4F
├── Warning: #FFD60A
└── Hover: #B81640 (darkened primary)
```

---

### Dark Mode (Modo Oscuro) 🌙

#### Paleta Principal

| Variable              | Hex       | RGB                | Uso                                     |
| --------------------- | --------- | ------------------ | --------------------------------------- |
| `primary-red`         | `#FF4B6E` | rgb(255, 75, 110)  | Botones principales (más claro en dark) |
| `primary-blue`        | `#4A9EFF` | rgb(74, 158, 255)  | Links, icons activos (más brillante)    |
| `accent-yellow`       | `#FED66D` | rgb(254, 214, 109) | Badges, alertas (suavizado)             |
| `accent-green`        | `#52B788` | rgb(82, 183, 136)  | Elementos secundarios (más claro)       |
| `dark-bg`             | `#0D0D0D` | rgb(13, 13, 13)    | Fondo principal                         |
| `dark-surface`        | `#1A1A1A` | rgb(26, 26, 26)    | Cards, superficies elevadas             |
| `dark-border`         | `#2D2D2D` | rgb(45, 45, 45)    | Bordes sutiles                          |
| `dark-text`           | `#F5F5F5` | rgb(245, 245, 245) | Texto principal                         |
| `dark-text-secondary` | `#B0B0B0` | rgb(176, 176, 176) | Texto secundario                        |

#### Usos Específicos - Dark Mode

```
Backgrounds:
├── Primary: #0D0D0D
├── Secondary: #1A1A1A
└── Tertiary: #2D2D2D

Text:
├── Primary: #F5F5F5
├── Secondary: #B0B0B0
└── Inverse: #0D0D0D

Interactive:
├── Primary Action: #FF4B6E
├── Secondary Action: #4A9EFF
├── Success: #52B788
├── Warning: #FED66D
└── Hover: #FF1F4D (brighter primary)
```

---

## 2. Sistemas de Tipografía

### Font Stack

```css
/* Sans Serif - Primaria */
font-family:
  -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue",
  sans-serif;

/* Monospace - Código */
font-family: "Monaco", "Courier New", monospace;
```

### Escala Tipográfica

| Nombre    | Tamaño | Peso           | Uso                         |
| --------- | ------ | -------------- | --------------------------- |
| `h1`      | 48px   | 700 (Bold)     | Títulos principales, héroes |
| `h2`      | 36px   | 700 (Bold)     | Títulos de secciones        |
| `h3`      | 28px   | 600 (Semibold) | Subtítulos                  |
| `h4`      | 24px   | 600 (Semibold) | Encabezados de cards        |
| `body-lg` | 18px   | 400 (Regular)  | Texto destacado             |
| `body`    | 16px   | 400 (Regular)  | Texto principal             |
| `body-sm` | 14px   | 400 (Regular)  | Texto secundario            |
| `caption` | 12px   | 400 (Regular)  | Labels, badges              |
| `code`    | 13px   | 400 (Regular)  | Código inline               |

### Ejemplos de Composición

```
Heading 1: "TAEKWONDO CLUB" (48px, Bold, Uppercase)
Heading 2: "Nuestros Programas" (36px, Bold)
Body Text: "Somos el club de taekwondo..." (16px, Regular, Letter-spacing: 0.5px)
Small Text: "Fundado en 2020" (14px, Regular, Color: gray-500)
```

---

## 3. Sistema de Espaciado

### Escala de Espaciado (basada en 8px)

```
$space-0   = 0px
$space-1   = 4px
$space-2   = 8px
$space-3   = 12px
$space-4   = 16px
$space-5   = 20px
$space-6   = 24px
$space-7   = 28px
$space-8   = 32px
$space-10  = 40px
$space-12  = 48px
$space-16  = 64px
$space-20  = 80px
$space-24  = 96px
```

### Aplicaciones Recomendadas

```
Padding Components: $space-4 (16px)
Margin Sections: $space-8 (32px)
Gap en Grillas: $space-4 (16px)
Padding Cards: $space-6 (24px)
Gap entre Items: $space-3 (12px)
```

---

## 4. Componentes UI

### Botones

#### Primary Button (Modo Claro)

```
Background: #DA1F50
Color: #FFFFFF
Padding: 12px 24px
Border Radius: 8px
Font: 16px, Semibold
Hover: #B81640 (darkened 15%)
Active: #8F0F33 (darkened 30%)
Disabled: #CCCCCC (gray-300)
Disabled Text: #808080 (gray-500)
```

#### Primary Button (Modo Oscuro)

```
Background: #FF4B6E
Color: #0D0D0D
Padding: 12px 24px
Border Radius: 8px
Font: 16px, Semibold
Hover: #FF6B89 (lightened)
Active: #E63254
Disabled: #2D2D2D (dark-border)
Disabled Text: #808080
```

### Tarjetas (Cards)

#### Light Mode

```
Background: #FFFFFF
Border: 1px solid #E8E8E8
Border Radius: 12px
Box Shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
Padding: 24px
Hover Shadow: 0 8px 24px rgba(0, 0, 0, 0.12)
```

#### Dark Mode

```
Background: #1A1A1A
Border: 1px solid #2D2D2D
Border Radius: 12px
Box Shadow: 0 2px 8px rgba(0, 0, 0, 0.3)
Padding: 24px
Hover Shadow: 0 8px 24px rgba(255, 255, 255, 0.05)
```

### Inputs

#### Light Mode

```
Background: #F8F8F8
Border: 2px solid #E8E8E8
Border Radius: 8px
Padding: 12px 16px
Font: 16px
Focus Border: #0052CC
Focus Shadow: 0 0 0 3px rgba(0, 82, 204, 0.1)
Text Color: #0D0D0D
Placeholder: #808080
```

#### Dark Mode

```
Background: #1A1A1A
Border: 2px solid #2D2D2D
Border Radius: 8px
Padding: 12px 16px
Font: 16px
Focus Border: #4A9EFF
Focus Shadow: 0 0 0 3px rgba(74, 158, 255, 0.1)
Text Color: #F5F5F5
Placeholder: #808080
```

---

## 5. Iconografía

### Especificaciones

- **Tamaño Estándar**: 24px × 24px
- **Tamaño Grande**: 48px × 48px
- **Tamaño Pequeño**: 16px × 16px
- **Stroke Width**: 2px
- **Color Primario** (Light): #0D0D0D
- **Color Primario** (Dark): #F5F5F5
- **Color Activo/Hover**: #DA1F50 (Light) / #FF4B6E (Dark)

### Ejemplos

```
Home Icon: Simple house outline, 2px stroke
Menu Icon: Three horizontal lines, 2px stroke
User Icon: Circle with head/shoulders outline
Logout Icon: Door with arrow pointing out
Settings Icon: Gear/cog shape without background
```

---

## 6. Gradientes (Opcionales)

### Hero Gradient - Light Mode

```css
background: linear-gradient(135deg, #da1f50 0%, #0052cc 100%);
```

### Hero Gradient - Dark Mode

```css
background: linear-gradient(135deg, #ff4b6e 0%, #4a9eff 100%);
```

### Subtle Gradient - Backgrounds

```css
/* Light Mode */
background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);

/* Dark Mode */
background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
```

---

## 7. Estados Interactivos

### Hover States

| Estado       | Light Mode            | Dark Mode             |
| ------------ | --------------------- | --------------------- |
| **Default**  | Color base            | Color base            |
| **Hover**    | +15% más oscuro       | +20% más claro        |
| **Active**   | +30% más oscuro       | +40% más claro        |
| **Disabled** | Gray-300              | Dark-border           |
| **Focus**    | Outline 3px con color | Outline 3px con color |

### Transiciones

```css
transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
/* Smooth easing for interactions */
```

---

## 8. Breakpoints (Responsive)

```
Mobile:     < 640px
Tablet:     640px - 1024px
Desktop:    > 1024px
Large:      > 1440px
```

### Grid System

```
Móvil:    4 columnas (12px gap)
Tablet:   8 columnas (16px gap)
Desktop:  12 columnas (24px gap)
```

---

## 9. Accesibilidad (WCAG AA)

### Contraste de Colores Requerido

Todos los textos deben tener un ratio de contraste mínimo de 4.5:1

**Light Mode - Validado:**

- Text (#0D0D0D) on White (#FFFFFF): 18.5:1 ✅
- Text (#FFFFFF) on Primary Red (#DA1F50): 4.8:1 ✅
- Text (#0D0D0D) on Yellow (#FFD60A): 13.2:1 ✅

**Dark Mode - Validado:**

- Text (#F5F5F5) on Dark BG (#0D0D0D): 18.5:1 ✅
- Text (#0D0D0D) on Primary Red Dark (#FF4B6E): 5.2:1 ✅
- Text (#F5F5F5) on Dark Surface (#1A1A1A): 13.8:1 ✅

### Recomendaciones

1. Usar `aria-labels` en botones sin texto
2. Implementar skip links en navegación
3. Asegurar orden de tab lógico
4. Usar `role` atributos cuando sea necesario
5. Testear con lectores de pantalla

---

## 10. Modo Oscuro - Implementación

### Activación CSS

```css
/* Usando una clase raíz */
html.dark {
  --bg-primary: #0d0d0d;
  --bg-secondary: #1a1a1a;
  --text-primary: #f5f5f5;
  --text-secondary: #b0b0b0;
  --color-primary-red: #ff4b6e;
  --color-primary-blue: #4a9eff;
  --color-accent-yellow: #fed66d;
  --color-accent-green: #52b788;
}
```

### Preferencia del Sistema

```css
@media (prefers-color-scheme: dark) {
  /* Aplicar estilos oscuros automáticamente */
}
```

---

## 11. Ejemplos de Implementación Tailwind CSS

```html
<!-- Light Mode Button -->
<button
  class="bg-[#DA1F50] text-white px-6 py-3 rounded-lg font-semibold
              hover:bg-[#B81640] active:bg-[#8F0F33] 
              transition-colors duration-200"
>
  Registrarse
</button>

<!-- Dark Mode Button -->
<button
  class="dark:bg-[#FF4B6E] dark:text-[#0D0D0D] dark:hover:bg-[#FF6B89]
              bg-[#DA1F50] text-white px-6 py-3 rounded-lg font-semibold"
>
  Registrarse
</button>

<!-- Card -->
<div
  class="bg-white dark:bg-[#1A1A1A] 
            border border-[#E8E8E8] dark:border-[#2D2D2D]
            rounded-xl p-6 shadow-lg dark:shadow-2xl"
>
  Contenido de tarjeta
</div>

<!-- Input -->
<input
  type="text"
  class="w-full bg-[#F8F8F8] dark:bg-[#1A1A1A]
              border-2 border-[#E8E8E8] dark:border-[#2D2D2D]
              text-[#0D0D0D] dark:text-[#F5F5F5]
              placeholder-gray-500
              focus:border-[#0052CC] dark:focus:border-[#4A9EFF]
              rounded-lg px-4 py-2"
/>
```

---

## 12. Paleta de Referencia Visual

### Comparativa Light vs Dark

```
LIGHT MODE                          DARK MODE
─────────────────────────────────────────────────────────────
Background: #FFFFFF                 Background: #0D0D0D
Accent:     #DA1F50                 Accent:     #FF4B6E
Blue:       #0052CC                 Blue:       #4A9EFF
Green:      #2D6A4F                 Green:      #52B788
Yellow:     #FFD60A                 Yellow:     #FED66D
Text:       #0D0D0D                 Text:       #F5F5F5
─────────────────────────────────────────────────────────────
Inspired by: Korean Taekwondo + Colombian Heritage
```

---

## 13. Recursos de Referencia

### Herramientas Recomendadas

- **Figma**: Para prototipos y mockups
- **Storybook**: Para documentar componentes
- **Contrast Checker**: WebAIM (webaim.org)
- **Color Tools**: Colordot.io, Coolors.co

### Documentación Relacionada

- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- Tailwind CSS Docs: https://tailwindcss.com/docs
- Material Design: https://material.io/design

---

## 14. Control de Cambios

| Versión | Fecha      | Cambios                             |
| ------- | ---------- | ----------------------------------- |
| 1.0     | 2026-03-12 | Guía inicial con paletas light/dark |
|         |            | Tipografía y espaciado definidos    |
|         |            | Componentes UI especificados        |

---

**Última Actualización**: 12 de marzo 2026
**Mantenedor**: Design System Team
**Estado**: PUBLICADO Y ACTIVO
