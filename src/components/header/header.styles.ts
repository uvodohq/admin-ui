import { paragraphCss, styled } from '@uvodohq/planum'

export const StyledHeader = styled('section', {
  display: 'flex',
  flex: 1,
  width: '100%',
})

export const StyledLink = styled('a', paragraphCss, {
  dflex: 'center',
  fontWeight: '$semibold',
  marginLeft: 'auto',
  color: '$textDark',
  transition: 'color 0.2s ease-in-out',

  '&:hover': {
    color: '$textBrand',
  },
})

export const StyledLinkIcon = styled('span', {
  color: '$textBrand',
  mr: '$8',
  dflex: 'center',
})
