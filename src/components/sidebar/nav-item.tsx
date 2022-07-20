import { Badge } from '@uvodohq/planum'
import type { ReactNode } from 'react'

import {
  activeNavClass,
  Item,
  ItemIcon,
  ItemText,
  NavLink,
} from './sidebar.styles'

interface NavItemProps {
  label: string
  path?: string
  icon?: ReactNode
  count?: number
  isActive?: boolean
}

export default function NavItem(props: NavItemProps) {
  const { label, path, icon, count = 0, isActive, ...rest } = props

  return (
    <Item>
      <NavLink
        href={path}
        className={isActive ? activeNavClass() : ''}
        {...rest}>
        <ItemIcon>{icon}</ItemIcon>

        <ItemText>{label}</ItemText>

        {count > 0 && (
          <Badge variant={isActive ? 'primary' : 'secondary'}>{count}</Badge>
        )}
      </NavLink>
    </Item>
  )
}
