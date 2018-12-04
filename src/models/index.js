/**
 * Options for different types of nodes.
 * commonProto is a set of options inherited by all.
 */
const commonProto = {
  mass: 3,
  fixed: false,
  clickable: true
};

export const cityProto = {
  ...commonProto,
  group: 'city'
};

export const keywordProto = {
  ...commonProto,
  group: 'keywords'
};

export const challengeProto = {
  ...commonProto,
  group: 'challenge'
};

export const topicProto = {
  ...commonProto,
  group: 'topics'
};

export const legendProto = {
  clickable: false,
  fixed: true,
  physics: false,
  size: 25
};

export const legendNodes = [
  {
    ...cityProto,
    ...legendProto,
    x: 25,
    y: 0,
    label: 'city'
  },
  {
    ...keywordProto,
    ...legendProto,
    x: 25,
    y: 50,
    label: 'keyword'
  },
  {
    ...challengeProto,
    ...legendProto,
    x: 25,
    y: 100,
    label: 'challenge'
  },
  {
    ...topicProto,
    ...legendProto,
    x: 25,
    y: 150,
    label: 'topic'
  }
];

export default function getProto(type) {
  switch (type) {
    case 'topics':
      return topicProto;
    case 'keywords':
      return keywordProto;
    case 'challenge':
      return challengeProto;
    case 'city':
      return cityProto;
    default:
      return {};
  }
}
