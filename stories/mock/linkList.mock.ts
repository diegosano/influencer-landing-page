import { LinkListProps } from "@/components/ui/LinkList";
import { getLink } from "@/stories/mock/helper";

export const LinkListMock: LinkListProps = {
  iconName: 'external-link',
  links: [getLink(), getLink(), getLink(), getLink(), getLink()],
}

export const LinkListDarkMock: LinkListProps = {
  iconName: 'external-link',
  links: [getLink(), getLink(), getLink(), getLink(), getLink()],
  darkMode: true,
}
