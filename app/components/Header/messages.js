/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  videos: {
    id: `${scope}.videos`,
    defaultMessage: 'Videos',
  },
  faqs: {
    id: `${scope}.faqs`,
    defaultMessage: 'Faqs',
  },
  more: {
    id: `${scope}.more`,
    defaultMessage: 'More',
  },
  gethex: {
    id: `${scope}.gethex`,
    defaultMessage: ' GET HEX',
  },
});
