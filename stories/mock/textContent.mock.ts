import { faker } from "@faker-js/faker";

import { TextContentProps } from "@/components/ui/TextContent";

const getLink = () => ({
  title: faker.lorem.words({ min: 1, max: 3 }),
  to: faker.internet.url(),
})

export const TextContentLeftMock: TextContentProps = {
  paragraphs: [faker.lorem.words({ min: 10, max: 30 })],
  title: faker.lorem.words({ min: 1, max: 5 }),
  alignment: 'left',
  link: getLink(),
}

export const TextContentCenterMock: TextContentProps = {
  paragraphs: [faker.lorem.words({ min: 10, max: 30 })],
  title: faker.lorem.words({ min: 1, max: 5 }),
  alignment: 'center',
  link: getLink(),
}

export const TextContentRightMock: TextContentProps = {
  paragraphs: [faker.lorem.words({ min: 10, max: 30 })],
  title: faker.lorem.words({ min: 1, max: 5 }),
  alignment: 'right',
  link: getLink(),
}

export const TextContentLeftDarkMock: TextContentProps = {
  paragraphs: [faker.lorem.words({ min: 10, max: 30 })],
  title: faker.lorem.words({ min: 1, max: 5 }),
  alignment: 'left',
  link: getLink(),
  darkMode: true
}
