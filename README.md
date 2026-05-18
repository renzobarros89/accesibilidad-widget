# 🎯 Widget de Accesibilidad Web

**Widget para mejorar la accesibilidad** en sitios web, con herramientas para usuarios con dislexia, problemas de visión y diversas preferencias visuales. Se integra como un botón flotante que despliega un panel compacto en la esquina inferior derecha.

## 🌟 Características generales

- ✅ Botón flotante fijo en la esquina inferior derecha
- ✅ Panel compacto flotante con scroll interno
- ✅ Atajo de teclado `Alt + A` para abrir/cerrar el panel
- ✅ Tecla `Escape` para cerrar el panel
- ✅ Diseño responsive (panel más compacto en móviles ≤ 640px)
- ✅ Botón de restablecimiento global para volver a los ajustes originales
- ✅ Compatible con la mayoría de frameworks (React, Angular, Vue, HTML plano)

---

## 🛠️ Herramientas de accesibilidad

### 🔊 Texto a voz

Activa la lectura en voz alta del contenido. Al hacer clic sobre cualquier elemento de la página, su texto es leído mediante la **Web Speech API** del navegador.

---

### 🔗 Resaltar enlaces

Resalta visualmente todos los `<a>` y `<button>` de la página aplicándoles:

- Fondo amarillo
- Subrayado
- Texto en color negro

---

### Encabezados grandes

Amplía el tamaño de los encabezados (`h1`, `h2`, `h3`, `h4`) al **400%** para mejorar la jerarquía visual del contenido. Se puede activar y desactivar.

---

### 📏 Guía de lectura

Muestra una línea horizontal azul que sigue el cursor del ratón a lo largo de **toda la pantalla**, facilitando el seguimiento de líneas de texto durante la lectura.

---

### 🎨 Color de fuente

Cambia el color del texto de todos los elementos `h1`, `h2`, `h3`, `p`, `button` y `a`. Cicla entre los siguientes colores:

| #   | Color      |
| --- | ---------- |
| 0   | (original) |
| 1   | Azul       |
| 2   | Rojo       |
| 3   | Verde      |
| 4   | Naranja    |
| 5   | Blanco     |
| 6   | Negro      |

Cada clic avanza al siguiente color. Vuelve al original automáticamente al usar el botón **Restablecer**.

---

### 🅰️ Fuente para dislexia

Activa la fuente **OpenDyslexic** en todo el `<body>` añadiendo la clase `.dyslexic-font`. Esta fuente está diseñada para facilitar la lectura a personas con dislexia.

> Requiere tener la fuente cargada en el proyecto (ver sección de instalación).

---

### 🌗 Contraste

Cicla entre diferentes modos de contraste aplicados a nivel de `document.documentElement`:

| Modo       | Descripción                                        |
| ---------- | -------------------------------------------------- |
| (original) | Sin cambios                                        |
| Invertido  | Aplica `filter: invert(1)` a toda la página        |
| Oscuro     | Fondo negro, texto verde (#50D0A0), bordes blancos |
| Claro      | Fondo blanco, texto negro, bordes negros           |

---

### 👁️ Daltonismo

Aplica filtros de color CSS a toda la página para simular o compensar distintos tipos de daltonismo:

| Tipo         | Filtro CSS aplicado  |
| ------------ | -------------------- |
| (original)   | Sin filtro           |
| Protanopia   | `hue-rotate(30deg)`  |
| Deuteranopia | `hue-rotate(60deg)`  |
| Tritanopia   | `hue-rotate(120deg)` |
| Monocromo    | `grayscale(100%)`    |

---

### ↺ Restablecer

Botón que resetea **todas** las herramientas activas a su estado original con un solo clic.

---

## 🚀 Instalación

### 1. Agrega el script principal

Añade esto antes del cierre de `</body>` en tu `index.html`:

```html
<script src="https://renzobarros89.github.io/accesibilidad-widget/widget-accesibilidad.iife.js"></script>
```

### 2. Coloca estos links dentro del `<head>`

```html
<!-- Fuente OpenDyslexic -->
<link href="https://fonts.cdnfonts.com/css/open-dyslexic" rel="stylesheet" />

<!-- Iconos FontAwesome -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
/>
```

### 3. Estilos CSS obligatorios

Añade estas reglas a tu archivo CSS principal:

```css
/* Fuente para dislexia */
.dyslexic-font {
  font-family: "Open-Dyslexic", sans-serif !important;
}

/* Herencia para elementos hijos */
.dyslexic-font * {
  font-family: inherit !important;
}
```

---

## 🔌 Integración en otros proyectos

### Opción A — HTML / sitio estático (vía CDN)

Agregá esto en cualquier página HTML. No requiere ningún framework ni instalación.

**En el `<head>`:**

```html
<link href="https://fonts.cdnfonts.com/css/open-dyslexic" rel="stylesheet" />
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
/>
```

**Antes del `</body>`:**

```html
<script src="https://renzobarros89.github.io/accesibilidad-widget/widget-accesibilidad.iife.js"></script>
```

**CSS mínimo requerido** (en tu archivo CSS principal):

```css
.dyslexic-font,
.dyslexic-font * {
  font-family: "Open-Dyslexic", sans-serif !important;
}
.contrast-dark,
.contrast-dark * {
  background-color: #000 !important;
  color: #50d0a0 !important;
  border-color: #fff !important;
}
.contrast-light,
.contrast-light * {
  background-color: #fff !important;
  color: #000 !important;
  border-color: #000 !important;
}
```

> Sin este CSS los modos de contraste oscuro/claro y la fuente para dislexia no funcionarán. El resto de herramientas funciona sin CSS adicional.

---

### Opción B — React / Vite (importación directa)

Copiá la carpeta `src/components/Accesibilidad/` completa a tu proyecto y usá el componente directamente:

```jsx
import Accesibilidad from "./components/Accesibilidad/Accesibilidad";

function App() {
  return (
    <>
      {/* tu contenido */}
      <Accesibilidad />
    </>
  );
}
```

**Dependencias externas requeridas** en tu `index.html`:

```html
<link href="https://fonts.cdnfonts.com/css/open-dyslexic" rel="stylesheet" />
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
/>
```

**CSS requerido** en tu archivo global (ej. `index.css`):

```css
.dyslexic-font,
.dyslexic-font * {
  font-family: "Open-Dyslexic", sans-serif !important;
}
.contrast-dark,
.contrast-dark * {
  background-color: #000 !important;
  color: #50d0a0 !important;
  border-color: #fff !important;
}
.contrast-light,
.contrast-light * {
  background-color: #fff !important;
  color: #000 !important;
  border-color: #000 !important;
}
```

---

### Opción C — npm (próximamente)

Consultá el archivo [`PUBLISH-NPM.md`](./PUBLISH-NPM.md) para los pasos de publicación y uso vía `npm install`.

---

## ⚙️ Uso en desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Generar build de producción
npm run build

# Publicar en GitHub Pages
npm run deploy
```

---

## 🧱 Estructura del proyecto

```
src/
  components/
    Accesibilidad/
      Accesibilidad.jsx           # Componente raíz con botón flotante
      FloatComponent.jsx          # Panel flotante con todas las herramientas
      ButtonComponent.jsx         # Botón reutilizable para cada herramienta
      ColorChanger/               # Cambio de color de fuente
      ContrasteComponent/         # Modos de contraste
      DaltonismoComponent/        # Filtros para daltonismo
      DislexiaToggle/             # Fuente OpenDyslexic (fuente para dislexia)
      HighlightLinksButton/       # Resaltado de enlaces y botones
      IncreaseHeadingSizeButton/  # Aumento de tamaño de encabezados
      ReadingGuide/               # Línea de guía de lectura
      ReadText/                   # Texto a voz
      ResetComponent/             # Restablecer todos los ajustes
```

---

## 🧰 Tecnologías

- **React 18** + **Vite**
- **Web Speech API** (texto a voz, nativa del navegador)
- **FontAwesome 6** (iconos)
- **OpenDyslexic** (fuente para dislexia)
- **CSS Filters** (contraste y daltonismo)
