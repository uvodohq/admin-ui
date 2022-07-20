import { Box, Tooltip, TooltipTrigger } from '@uvodohq/planum'

import { StorefrontIcon } from '../icons'
import { StyledHeader, StyledLink, StyledLinkIcon } from './header.styles'

const VisitStoreLink = () => {
  return (
    <Box css={{ position: 'relative', ml: 'auto' }}>
      <TooltipTrigger delay={0}>
        <StyledLink href="#">
          <StyledLinkIcon>
            <StorefrontIcon />
          </StyledLinkIcon>
          Visit store
        </StyledLink>

        <Tooltip>Uvodo.com</Tooltip>
      </TooltipTrigger>
    </Box>
  )
}

export const Header = () => {
  return (
    <StyledHeader>
      <VisitStoreLink />
    </StyledHeader>
  )
}
