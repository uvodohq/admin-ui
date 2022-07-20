import { createRoot } from 'react-dom/client'

import { AdminLayout } from '~/admin-layout'

import { Box } from './src/components/box'

const container = document.querySelector('#root')
const root = createRoot(container!)

const App = () => (
  <AdminLayout>
    <Box />
  </AdminLayout>
)

root.render(<App />)
