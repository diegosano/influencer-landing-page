import { faker } from '@faker-js/faker'

import type { Image } from '@/types/media'

const icons = [
  'pinterest',
  'youtube',
  'twitter',
  'google',
  'github',
  'play',
  'instagram',
  'spotify',
] as const

export const getRandomIconName = () => {
  const int = faker.number.int({ min: 0, max: 6 })
  return icons[int]
}

export const getImage = (): Image => ({
  url: faker.image.url(),
  alt: faker.lorem.words(5),
})
