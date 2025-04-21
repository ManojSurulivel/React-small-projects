# React + http + crud

### ❌ Error:
```
@blueprintjs/core@5.18.0 requires react@"^16.8 || 17 || 18"
But your project is using react@19.1.0
```

---

### ✅ Solution Options:

#### 🔹 Option 1: **Downgrade React to 18 (Recommended if you want BlueprintJS to work properly)**

```bash
npm uninstall react react-dom
npm install react@18 react-dom@18
```

Then install BlueprintJS:
```bash
npm install @blueprintjs/core
```

---

#### 🔹 Option 2: **Use `--force` or `--legacy-peer-deps` (NOT recommended for production)**
This will **force install**, but may break things.

```bash
npm install @blueprintjs/core --legacy-peer-deps
```
or
```bash
npm install @blueprintjs/core --force
```

⚠️ This may cause bugs because **BlueprintJS doesn't support React 19 yet.**

---

### ✅ Best Practice for Now
- Use **React 18** if you want BlueprintJS.
- Wait until **BlueprintJS supports React 19** (they'll update their package).

---

Let me know if you want help downgrading React cleanly or finding an alternative to BlueprintJS that works with React 19!


This error is because of a **wrong import path for `normalize.css`** in your `index.css` or `index.js`/`main.js` file.

---

### ❌ The error:
```
ENOENT: no such file or directory, open '~normalize.css'
```

You're importing `normalize.css` like this (WRONG):
```css
@import '~normalize.css';
```

This is not valid in Vite or PostCSS unless you configure it specially.

---

### ✅ Solution Options:

#### 🔹 Option 1: Use normal `import` in your JS file (Recommended)

If you're using Vite and `normalize.css` is installed, do this in `main.jsx` or `index.jsx`:

```js
import 'normalize.css';
```

Make sure it's installed:

```bash
npm install normalize.css
```

---

#### 🔹 Option 2: Fix the `@import` in your CSS (if you're importing in CSS file)

Change:
```css
@import '~normalize.css';
```

To:
```css
@import 'normalize.css';
```

✅ This works in PostCSS or Vite without the `~` symbol.

---

### 🔁 Recap:
- Don't use `~normalize.css` – it's from older Webpack setups.
- Use `import 'normalize.css'` in JS or `@import 'normalize.css';` in CSS.
- Install it using `npm install normalize.css`

---

Let me know if you want help setting up `normalize.css` or want to use a different reset like `modern-css-reset`!


### packages install

* npm create vite@latest
* react-http-crud
* React
* JavaScript
* cd react-http-crud
* npm install
* npm run dev

### Extra packages install:

* npm uninstall react react-dom
* npm install react@18 react-dom@18

* npm install @blueprintjs/core
* npm install @blueprintjs/core --legacy-peer-deps

* npm install normalize.css

###