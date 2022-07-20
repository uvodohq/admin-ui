import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Paragraph,
  styled,
} from '@uvodohq/planum'

const ProfileContainer = styled('div', {
  mt: 'auto',
  borderTop: '1px solid $surface800',
  p: '$16 $24',
  dflex: 'center',
  height: 64,
})

export default function ProfileInfo({ account }: any) {
  const fullName = `${account?.first_name || ''} ${account?.last_name || ''}`
  const nameInitial = `${account?.first_name?.charAt(0) || ''}${
    account?.last_name?.charAt(0) || ''
  }`

  return (
    <ProfileContainer as="a" href={`/settings/account`}>
      <Avatar>
        <AvatarImage
          // src="https://images.unsplashss.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
        />
        <AvatarFallback delayMs={300}>{nameInitial}</AvatarFallback>
      </Avatar>

      <Paragraph
        css={{
          fw: '$medium',
          color: '$white',
          flex: 1,
          ml: '$8',
          lineClamp: 1,
        }}>
        {fullName}
      </Paragraph>
    </ProfileContainer>
  )
}
