import {
  CirclesFourIcon,
  ClipboardTextIcon,
  DoorIcon,
  GearIcon,
  HouseIcon,
  PaintBrushBroadIcon,
  PuzzlePieceIcon,
  UserIcon,
} from '../icons'
import { Logo } from '../logo'
import NavItem from './nav-item'
import ProfileInfo from './profile-info'
import {
  ListContainer,
  LogoWrapper,
  Nav,
  SidebarContainer,
} from './sidebar.styles'

export function Sidebar() {
  const navList = [
    {
      icon: <HouseIcon weight="duotone" />,
      label: 'Dashboard',
      path: '/dashboard',
    },
    {
      icon: <CirclesFourIcon weight="duotone" />,
      label: 'Products',
      path: '/products',
    },
    {
      icon: <ClipboardTextIcon weight="duotone" />,
      label: 'Orders',
      path: '/orders',
      count: 21,
    },
    {
      icon: <UserIcon weight="duotone" />,
      label: 'Customers',
      path: '/customers',
    },
    {
      icon: <PuzzlePieceIcon weight="duotone" />,
      label: 'Plugins',
      path: '/plugins',
      isActive: true,
    },
    {
      icon: <PaintBrushBroadIcon weight="duotone" />,
      label: 'Design',
      path: '/design',
    },
    {
      icon: <GearIcon weight="duotone" />,
      label: 'Settings',
      path: '/settings',
    },
    {
      icon: <DoorIcon weight="duotone" />,
      label: 'Logout',
      path: '/auth/login',
    },
  ]

  return (
    <SidebarContainer className="uvodo-sidebar">
      <LogoWrapper>
        <a href="/dashboard">
          <Logo type="white" />
        </a>
      </LogoWrapper>

      <Nav>
        <ListContainer>
          {navList.map((item) => {
            return <NavItem key={item.label} {...item} />
          })}
        </ListContainer>
      </Nav>

      <ProfileInfo account={{}} />
    </SidebarContainer>
  )
}
