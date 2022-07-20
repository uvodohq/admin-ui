# How to install

```bash
npm install @uvodohq/admin-ui @uvodohq/planum
```

## Demo example:

https://codesandbox.io/s/uvodo-admin-ui-app-layout-3w9b4e?file=/src/App.js

# How to use <AdminLayout/>

```jsx
import React from 'react'
import { AdminLayout } from '@uvodohq/admin-ui'

// admin styles will apply reset.css and #root{height:100%}
import '@uvodohq/admin-ui/dist/style.css'

export default function App() {
  return <AdminLayout>content</AdminLayout>
}
```

# Add Inter Font

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet" />
```
