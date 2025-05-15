<!-- prettier-ignore -->
# 🎯 Componente de Accesibilidad Web

**Widget para mejorar la accesibilidad** en sitios web, con herramientas para usuarios con dislexia, problemas de visión y preferencias visuales.

## 🌟 Características

- ✅ Fuente OpenDyslexic para mejor legibilidad
- ✅ Ajuste de tamaño de texto
- ✅ Modo alto contraste
- ✅ Botón de accesibilidad flotante
- ✅ Compatible con la mayoría de frameworks (React, Angular, Vue, HTML plano)

## 🚀 Instalación Rápida

### 1. Agrega el script principal

Añade esto antes del cierre de `</body>` en tu `index.html`:

````html
<script src="https://renzobarros89.github.io/accesibilidad-widget/widget-accesibilidad.iife.js"></script>
``` ### 2. Coloca estos links dentro del
<head>
  : ```html
  <!-- Fuente OpenDyslexic -->
  <link href="https://fonts.cdnfonts.com/css/open-dyslexic" rel="stylesheet" />

  <!-- Iconos FontAwesome -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  />
  ``` ### 3. Estilos CSS obligatorios. Añade estas reglas a tu archivo CSS
  principal: ```css /* Fuente para dislexia */ .dyslexic-font { font-family:
  "Open-Dyslexic", sans-serif !important; } /* Herencia para elementos hijos */
  .dyslexic-font * { font-family: inherit !important; }```
</head>
````
