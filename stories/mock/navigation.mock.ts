import { faker } from '@faker-js/faker'

import { NavigationProps } from '@/components/sections/Navigation'

export const NavigationMock: NavigationProps = {
  profilePicture: {
    url: faker.image.urlPicsumPhotos(),
    alt: faker.lorem.words(5),
  },
  socialMedias: [
    {
      iconName: 'linkedin',
      link: '/',
    },
    {
      iconName: 'instagram',
      link: '/',
    },
    {
      iconName: 'spotify',
      link: '/',
    },
  ],
}
