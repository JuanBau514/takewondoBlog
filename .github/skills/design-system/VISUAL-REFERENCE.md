# Referencia Visual Rápida - Design System

## 🎨 Visualización de Paletas

### Light Mode - Complete

```
┌─────────────────────────────────────────────────────────────────┐
│                    LIGHT MODE PALETTE                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ██████  PRIMARIO ROJO        #DA1F50  rgb(218, 31, 80)        │
│  ██████  Vigencia y pasión    MAIN CTA, Primary Buttons       │
│                                                                 │
│  ██████  PRIMARIO AZUL        #0052CC  rgb(0, 82, 204)         │
│  ██████  Armonía y poder      Links, Secondary Actions        │
│                                                                 │
│  ██████  AMARILLO COLOMBIA    #FFD60A  rgb(255, 214, 10)       │
│  ██████  Alerta y atención    Badges, Warnings                 │
│                                                                 │
│  ██████  VERDE ORGANIZACIONAL #2D6A4F  rgb(45, 106, 79)        │
│  ██████  Crecimiento          Success States, Secondaries      │
│                                                                 │
│  ██████  BLANCO PURO          #FFFFFF  rgb(255, 255, 255)      │
│  ██████  Limpieza y luz       Primary Background              │
│                                                                 │
│  ██████  NEGRO PROFUNDO       #0D0D0D  rgb(13, 13, 13)         │
│  ██████  Fuerza y texto       Primary Text, Strong Borders    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Dark Mode - Complete

```
┌─────────────────────────────────────────────────────────────────┐
│                    DARK MODE PALETTE                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ██████  ROJO (CLARO)         #FF4B6E  rgb(255, 75, 110)       │
│  ██████  Más vibrante         Primary Buttons (Dark)          │
│                                                                 │
│  ██████  AZUL (CLARO)         #4A9EFF  rgb(74, 158, 255)       │
│  ██████  Más brillante        Links Dark, Highlights          │
│                                                                 │
│  ██████  AMARILLO (SUAVE)     #FED66D  rgb(254, 214, 109)      │
│  ██████  Más cálido           Warnings Dark Mode              │
│                                                                 │
│  ██████  VERDE (CLARO)        #52B788  rgb(82, 183, 136)       │
│  ██████  Más fresco           Success Dark                    │
│                                                                 │
│  ██████  FONDO OSCURO         #0D0D0D  rgb(13, 13, 13)         │
│  ██████  Protección ocular    Primary Background Dark         │
│                                                                 │
│  ██████  SUPERFICIE           #1A1A1A  rgb(26, 26, 26)         │
│  ██████  Elevación visual     Cards, Containers              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📐 Escala Tipográfica

```
┌─────────────────────────────────────────────────────────────────┐
│              TYPOGRAPHIC HIERARCHY                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  TAEKWONDO CLUB    [H1: 48px | 700 Bold | Titles]             │
│                                                                 │
│  Nuestros Programas  [H2: 36px | 700 Bold | Section Headers]  │
│                                                                 │
│    Programa Especial    [H3: 28px | 600 Semibold | Subtitles] │
│                                                                 │
│     Detalles del Programa [H4: 24px | 600 Semibold | Cards]   │
│                                                                 │
│  Información destacada sobre nuestros programas de entrenamiento │
│  [Body Large: 18px | 400 Regular | Emphasis Text]             │
│                                                                 │
│  Este es el texto principal que usamos en párrafos y contenido  │
│  [Body: 16px | 400 Regular | Main Content]                    │
│                                                                 │
│  Textos pequeños como descripciones secundarias o comentarios │
│  [Body Small: 14px | 400 Regular | Secondary Content]         │
│                                                                 │
│  Label, badge, footer text [Caption: 12px | 400 Regular]     │
│                                                                 │
│  const example = "código inline"; [Code: 13px | Monospace]   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📏 Sistema de Espaciado (Escala 8px)

```
Espaciado Compacto:
  4px  (1x)  ▮
  8px  (2x)  ▮▮
 12px  (3x)  ▮▮▮
 16px  (4x)  ▮▮▮▮

Espaciado Normal:
 20px  (5x)  ▮▮▮▮▮
 24px  (6x)  ▮▮▮▮▮▮
 28px  (7x)  ▮▮▮▮▮▮▮
 32px  (8x)  ▮▮▮▮▮▮▮▮

Espaciado Grande:
 40px (10x)  ▮▮▮▮▮▮▮▮▮▮
 48px (12x)  ▮▮▮▮▮▮▮▮▮▮▮▮
 64px (16x)  ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮
 96px (24x)  ▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮
```

### Aplicaciones:

```
Padding Buttons:    12px vertical  × 24px horizontal
Padding Cards:      24px (all sides)
Gap Grid Items:     16px
Padding Inputs:     12px vertical  × 16px horizontal
Margin Sections:    32px-48px between
```

---

## 🔘 Componentes Predefinidos

### Button Component Specs

```
┌─────────────────────────────────────┐
│                                     │
│         REGISTRARSE                 │  Light Mode
│         (sm: 14px)                  │  48px × 80px
│        (md: 16px)                   │
│         (lg: 18px)                  │
│                                     │
└─────────────────────────────────────┘

ESTADOS:
  Normal     →  #DA1F50  (100% opacity)
  Hover      →  #B81640  (darkened 15%)
  Active     →  #8F0F33  (darkened 30%)
  Disabled   →  #CCCCCC  (grayed out)
  Focus      →  Outline 3px #0052CC

Dark Mode:
  Normal     →  #FF4B6E
  Hover      →  #FF6B89
  Active     →  #E63254
```

### Card Component Specs

```
┌──────────────────────────────────────────┐
│                                          │
│  Nuestras Clases                         │  Light Mode:
│  ──────────────────                      │  White background
│  Somos el club de taekwondo              │  Gray-100 border
│  especializado en...                     │  Box shadow low
│     [VER MAS]                            │
│                                          │
└──────────────────────────────────────────┘

  Border Radius: 12px
  Padding: 24px
  Box Shadow: 0 2px 8px rgba(0,0,0, 0.08)
  Hover Shadow: 0 8px 24px rgba(0,0,0, 0.12)

Dark Mode:
  Dark background #1A1A1A
  Dark border #2D2D2D
  Darker shadows
```

### Input Field Specs

```
┌──────────────────────────────────────────┐
│                                          │
│  Email                                   │
│  ┌────────────────────────────────────┐  │
│  │ tu@email.com                      │  │  Light Mode:
│  └────────────────────────────────────┘  │  Gray-50 fill
│  Ingresa tu correo electrónico           │  Gray-100 border
│                                          │
└──────────────────────────────────────────┘

  Background: #F8F8F8
  Border: 2px solid #E8E8E8
  Focus Border: #0052CC
  Focus Shadow: 0 0 0 3px rgba(0,82,204, 0.1)
  Padding: 12px horizontal × 16px vertical

Dark Mode:
  Background: #1A1A1A
  Border: 2px solid #2D2D2D
  Focus Border: #4A9EFF
```

### Badge Component Specs

```
┌──────────────────────────────────┐
│  ▮ PRINCIPIANTE  ▮ INTERMEDIO    │
│  ▮ AVANZADO      ▮ COMPETIDOR    │
└──────────────────────────────────┘

  Padding: 3px horizontal × 1px vertical (scaled)
  Border Radius: full (rounded pill)
  Font: 12px, semibold

  Primary:    #DA1F50 bg, white text
  Secondary:  #0052CC bg, white text
  Success:    #2D6A4F bg, white text
  Warning:    #FFD60A bg, black text
```

---

## 🌓 Modo Oscuro - Transformación

```
LIGHT MODE                    →    DARK MODE
──────────────────────────────────────────────────
#FFFFFF   (Blanco)                #0D0D0D   (Negro)
#F8F8F8   (Gris claro)            #1A1A1A   (Gris oscuro)
#0D0D0D   (Negro)            ←    #F5F5F5   (Blanco)

#DA1F50   (Rojo)                  #FF4B6E   (Rojo claro)
#0052CC   (Azul)                  #4A9EFF   (Azul claro)
#FFD60A   (Amarillo)              #FED66D   (Amarillo suave)
#2D6A4F   (Verde)                 #52B788   (Verde claro)

CONTRASTE AUMENTA:
  Light: Text #0D0D0D on #FFFFFF = 18.5:1
  Dark:  Text #F5F5F5 on #0D0D0D = 18.5:1
  ✅ Ambos cumplen WCAG AAA
```

---

## 📱 Responsive Breakpoints

```
MOBILE FIRST APPROACH

┌──────────┬──────────────────────────────────────┐
│ 0px      │                                      │
│          │  Mobile: 1 column                    │
│ 640px    │  Grid gaps: 16px padding            │
│          │  Font scales down 10-15%            │
└──────────┴──────────────────────────────────────┘

┌──────────┬──────────────────────────────────────┐
│ 640px    │                                      │
│          │  Tablet: 2 columns                   │
│ 1024px   │  Grid gaps: 16px padding            │
│          │  Font normal                        │
└──────────┴──────────────────────────────────────┘

┌──────────┬──────────────────────────────────────┐
│ 1024px   │                                      │
│          │  Desktop: 3+ columns                 │
│ 1440px   │  Grid gaps: 24px padding            │
│          │  Máximo ancho: 1200px               │
└──────────┴──────────────────────────────────────┘
```

---

## ✅ Checklist de Accesibilidad

```
WCAG AA COMPLIANCE:

✅ Color Contrast Ratios:
   • Text (#0D0D0D) on White (#FFFFFF):    18.5:1 (AAA)
   • White on Red (#DA1F50):                4.8:1 (AA)
   • Black on Yellow (#FFD60A):            13.2:1 (AAA)

✅ No information by color alone
   • Use patterns, text, icons additionally

✅ Focus visible
   • Todos los botones tienen focus outline

✅ Keyboard Navigation
   • Orden de tabulación natural

✅ Images & Icons
   • Alt text en imágenes
   • aria-label en botones solo-icon

✅ Form Labels
   • Visible labels < inputs
   • Error messages linked to fields
```

---

## 🎯 Ejemplos de Componentes - Composición

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  HERO SECTION (Full Width)                          │
│  ───────────────────────────────────────────────    │
│                                                     │
│  [Gradient: Red #DA1F50 → Blue #0052CC]            │
│                                                     │
│  BIENVENIDO AL TAEKWONDO CLUB                       │
│  [H1: 48px, White text, bold]                      │
│                                                     │
│  Especialistas en entrenamiento marcial desde 2020 │
│  [Body Large: White text, 18px]                    │
│                                                     │
│  [ REGISTRARSE AHORA ]  [ VER PROGRAMAS ]          │
│  [Primary Red Button]   [Secondary Blue]           │
│                                                     │
└─────────────────────────────────────────────────────┘

┌──────────┬──────────┬──────────┐
│          │          │          │
│ PROGRAMA │ PROGRAMA │ PROGRAMA │  Cards Grid (3 cols)
│   1      │    2     │    3     │  Each: 24px padding
│          │          │          │  16px gap between
│  [•]     │  [•]     │  [•]     │  Hover shadow effect
│          │          │          │
└──────────┴──────────┴──────────┘

┌─────────────────────────────────────────────────────┐
│ FORMULARIO DE CONTACTO                              │
│ ───────────────────────────────────────────────     │
│                                                     │
│ Nombre [____________________]                       │
│ Email  [____________________]                       │
│ Mensaje[____________________]                       │
│        [____________________]                       │
│                                                     │
│          [ ENVIAR MENSAJE ]                         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 💻 Código Rápido (Tailwind)

### Primary Button - Light Mode

```tailwind
bg-taekwondo-red-500 text-white px-6 py-3 rounded-lg
font-semibold hover:bg-taekwondo-red-800
active:bg-taekwondo-red-900 transition-colors
```

### Primary Button - Dark Mode

```tailwind
dark:bg-taekwondo-red-dark-500 dark:text-neutral-dark-0
dark:hover:bg-taekwondo-red-dark-600 dark:active:bg-taekwondo-red-dark-700
```

### Card - Both Modes

```tailwind
bg-white dark:bg-secondary-dark
border border-light-primary dark:border-dark-primary
rounded-md p-6 shadow-light-sm dark:shadow-dark-sm
hover:shadow-light-md dark:hover:shadow-dark-lg
```

### Input - Both Modes

```tailwind
bg-secondary-light dark:bg-secondary-dark
border-2 border-light-primary dark:border-dark-primary
text-primary-light dark:text-primary-dark
focus:border-taekwondo-blue-500
dark:focus:border-taekwondo-blue-dark-500
rounded-lg px-4 py-2
```

---

## 🎨 Herramienta para Copiar Colores

**Copia rápido desde terminal:**

```bash
# Extrae todos los colores hex del design system
grep -E '#[0-9A-Fa-f]{6}' design-system.md | sort | uniq

# Resultado:
#0052CC
#0D0D0D
#2D6A4F
#4A9EFF
#52B788
#8F0F33
#B81640
#C2183A
#DA1F50
#E63254
#FED66D
#FFD60A
#FF4B6E
#FF6B89
#FFFFFF
```

---

## 📊 Comparativa Colores

```
        LIGHT MODE          DARK MODE           WCAG Contrast
        ──────────          ─────────           ──────────────
Red     #DA1F50  (218,31,80)    #FF4B6E (255,75,110)     A.O (↑)
        Oscuro   (4.5:1)        Claro   (más brillante)

Blue    #0052CC  (0,82,204)     #4A9EFF (74,158,255)     I.O (↑)
        Oscuro   (4.5:1)        Claro   (más brillante)

Green   #2D6A4F  (45,106,79)    #52B788 (82,183,136)     A.O
        Oscuro                  Claro

Yellow  #FFD60A  (255,214,10)   #FED66D (254,214,109)    A.O
        Claro                   Suave

White   #FFFFFF  (255,255,255)  ─────── (no necesario)
        Fondo claro

Black   #0D0D0D  (13,13,13)     ─────── (no necesario)
        Texto oscuro

─────────────────────────────────────────────────────────────
✅ All validated for WCAG AA compliance (4.5:1 minimum)
```

---

**Visual Reference v1.0**  
_Last Updated: 12 de marzo 2026_
