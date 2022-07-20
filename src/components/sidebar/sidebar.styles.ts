import { css, styled, Subheader } from '@uvodohq/planum'

export const SidebarContainer = styled('section', {
  bgColor: '$surface900',
  flex: 1,
  width: '100%',
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
})

export const Nav = styled('nav', {
  py: '$16',
})

export const LogoWrapper = styled('div', {
  px: '$24',
  pt: '$16',
  pb: '$24',
  dflex: 'flex',

  '& > a': { display: 'inline-flex' },
})

export const ListContainer = styled('ul', {
  px: '$12',
})

export const Item = styled('li', {
  '&:not(:last-child)': {
    mb: '$8',
  },
})

export const ItemIcon = styled('span', {
  mr: '$8',
  color: '$surface500',
  transition: 'color 0.2s ease-in-out',
})

export const activeNavClass = css()

export const NavLink = styled('a', {
  dflex: 'center',
  py: '$4',
  px: '$16',
  paddingRight: '$8',
  borderRadius: '$sm',
  transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
  userSelect: 'none',

  '&:hover': {
    backgroundColor: '$surface800',

    [`& ${ItemIcon}`]: {
      color: '$white',
    },
  },

  [`&.${activeNavClass}`]: {
    backgroundColor: '$primary600',

    [`& ${ItemIcon}`]: {
      color: '$primary200',
    },
  },
})

export const ItemText = styled(Subheader, {
  fw: '$semibold',
  textTransform: 'capitalize',
  flex: 1,
  color: '$white',
  transition: 'color 0.2s ease-in-out',
})
