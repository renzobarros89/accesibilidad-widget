# Guía: Publicar el widget en npm

Estos pasos te permiten distribuir el widget como paquete npm para que cualquiera pueda instalarlo con `npm install accesibilidad-widget`.

---

## 1. Preparar el `package.json`

Editá `package.json` con los campos requeridos por npm. Reemplazá el contenido con algo así:

```json
{
  "name": "accesibilidad-widget",
  "version": "1.0.0",
  "description": "Widget de accesibilidad web para React — fuente dislexia, contraste, guía de lectura, texto a voz y más.",
  "private": false,
  "type": "module",
  "main": "dist/widget-accesibilidad.iife.js",
  "module": "dist/widget-accesibilidad.iife.js",
  "files": ["dist"],
  "keywords": [
    "accesibilidad",
    "accessibility",
    "widget",
    "react",
    "wcag",
    "dislexia"
  ],
  "author": "Tu Nombre <tu@email.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/renzobarros89/accesibilidad-widget.git"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.7.0",
    "vite": "^5.4.21",
    "gh-pages": "^6.3.0"
  },
  "peerDependencies": {
    "react": ">=17",
    "react-dom": ">=17"
  }
}
```

> **Importante**: cambiá `"private": true` por `"private": false`. Sin eso npm rechaza la publicación.

---

## 2. Crear cuenta en npm (si no tenés)

1. Ir a [https://www.npmjs.com/signup](https://www.npmjs.com/signup)
2. Crear cuenta con usuario, email y contraseña
3. Verificar el email

---

## 3. Iniciar sesión en la terminal

```bash
npm login
```

Te va a pedir usuario, contraseña y un OTP (código de un solo uso que llega al email).

---

## 4. Verificar que el nombre del paquete esté disponible

```bash
npm search accesibilidad-widget
```

O entrá directamente a `https://www.npmjs.com/package/accesibilidad-widget`. Si no existe, está libre.

> Si el nombre ya existe, cambiá el `"name"` en `package.json` por algo único, como `@tu-usuario/accesibilidad-widget` (paquete con scope).

---

## 5. Generar el build de producción

```bash
npm run build
```

Esto genera `dist/widget-accesibilidad.iife.js`, que es el archivo que se va a publicar.

---

## 6. Publicar

```bash
npm publish
```

Si usás nombre con scope (`@tu-usuario/...`), agregá el flag `--access public`:

```bash
npm publish --access public
```

---

## 7. Verificar la publicación

Entrá a `https://www.npmjs.com/package/accesibilidad-widget` y verificá que aparezca el paquete.

---

## 8. Cómo usarlo desde npm (una vez publicado)

### Instalación

```bash
npm install accesibilidad-widget
```

### En HTML (vía CDN de unpkg)

```html
<script src="https://unpkg.com/accesibilidad-widget/dist/widget-accesibilidad.iife.js"></script>
```

### En React

```jsx
import "accesibilidad-widget";
// El widget se monta automáticamente al cargar el script
```

---

## 9. Publicar una nueva versión

Cada vez que hagas cambios:

1. Actualizá la versión en `package.json` (seguí [semver](https://semver.org/)):
   - Parche (bug fix): `1.0.0` → `1.0.1`
   - Minor (nueva funcionalidad): `1.0.0` → `1.1.0`
   - Major (cambio que rompe compatibilidad): `1.0.0` → `2.0.0`

   O usá el comando automático:

   ```bash
   npm version patch   # 1.0.0 → 1.0.1
   npm version minor   # 1.0.0 → 1.1.0
   npm version major   # 1.0.0 → 2.0.0
   ```

2. Generá el build:

   ```bash
   npm run build
   ```

3. Publicá:
   ```bash
   npm publish
   ```

---

## 10. Agregar un `.npmignore` (recomendado)

Creá un archivo `.npmignore` en la raíz para que solo se publiquen los archivos necesarios:

```
src/
public/
index.html
vite.config.js
.eslintrc.cjs
PUBLISH-NPM.md
```

Así el paquete publicado solo incluirá `dist/` y `package.json` (más liviano).
