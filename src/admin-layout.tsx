import './styles/app.css'
import './styles/reset.css'

import { customScrollbar, styled } from '@uvodohq/planum'

import { Header, Sidebar } from '~/components'

const AppGrid = styled('div', {
  display: 'grid',
  height: '100%',
  gridTemplateAreas: `
    "sidebar content"
    "sidebar content" 
  `,
  gridTemplateColumns: '240px 1fr',
  gridTemplateRows: '1fr',
})

const SidebarContainer = styled('aside', {
  gridArea: 'sidebar',
})

const MainContainer = styled('main', customScrollbar, {
  gridArea: 'content',
  overflowY: 'scroll',
})

const HeaderContainer = styled('header', {
  height: 64,
  dflex: 'center',
  backgroundColor: '$white',
})

const BodyContainer = styled('section', {
  bg: '$surface500',
  width: '100%',
  minHeight: 'calc(100% - 64px)',
})

const Center = styled('div', {
  width: '100%',
  maxWidth: 1032,
  mx: 'auto',
  px: '$16',
})

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppGrid>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>

      <MainContainer>
        <HeaderContainer>
          <Center>
            <Header />
          </Center>
        </HeaderContainer>

        <BodyContainer>
          <Center>{children}</Center>
        </BodyContainer>
      </MainContainer>
    </AppGrid>
  )
}
