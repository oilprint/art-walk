import { v4 as uuidv4 } from "uuid";
import { bigShoe1, bigShoe2, bigShoe3, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from '../assets/images'

export const categoryList = [
"All", "Monet style", "Van Gogh Style", "Picasso style", "Other"
];

export const socialList = [
  { id: uuidv4(),
    title: 'Facebook',
    href: "https://www.facebook.com/",
  },
  { id: uuidv4(),
    title: 'Youtube',
    href: "https://www.youtube.com/",
  },
  { id: uuidv4(),
    title: 'Instagram',
    href: "https://www.instagram.com/",
  }
]

 export const shoes = [
    {id: uuidv4(),
      thumbnail: thumbnailShoe1,
      bigShoe: bigShoe1,
    },
    {id: uuidv4(),
      thumbnail: thumbnailShoe2,
      bigShoe: bigShoe2,
    },
    {id: uuidv4(),
      thumbnail: thumbnailShoe3,
      bigShoe: bigShoe3,
    },
];