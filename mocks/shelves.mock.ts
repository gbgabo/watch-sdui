import { Shelf } from "@/types/shelf.schema";

export const shelvesMock: Shelf[] = [
  {
    id: 1,
    position: 0,
    title: "Match of the Week",
    subtitle: "The biggest fixture in European football right now",
    layout: "Banner",
    items: [
      {
        id: 101,
        title: "Curitiba Watchers X Northbridge Thunder",
        subtitle: "Champions League semi-final — live at the Bernabéu",
        image_url: "/img/mock/banner-image.png",
        domain: "Content",
      },
      {
        id: 102,
        title: "El Clásico Preview",
        subtitle: "Everything on the line at Camp Nou",
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Camp_Nou_aerial.jpg/500px-Camp_Nou_aerial.jpg",
        domain: "Content",
      },
    ],
  },
  {
    id: 2,
    position: 1,
    title: "Best Highlights",
    subtitle: "Best goals and moments from the weekend",
    layout: "Carousel",
    items: [
      {
        id: 103,
        title: "Premier League Round-up",
        subtitle: "Six goals in a breathless Sunday afternoon",
        image_url: "/img/mock/content-1.png",
        domain: "Content",
      },
      {
        id: 104,
        title: "Bundesliga: Bayern's Late Winner",
        subtitle: "90th-minute header keeps title race alive",
        image_url: "/img/mock/content-2.png",
        domain: "Content",
      },
      {
        id: 105,
        title: "Serie A: Inter Milan Masterclass",
        subtitle: "Dominant display puts Inter top of the table",
        image_url: "/img/mock/content-3.png",
        domain: "Content",
      },
      {
        id: 106,
        title: "FA Cup: Wembley Classic",
        subtitle: "Extra-time drama at the home of English football",
        image_url: "/img/mock/content-4.png",
        domain: "Content",
      },
    ],
  },
  {
    id: 3,
    position: 2,
    title: "Super League Teams",
    subtitle: "The stars shaping the beautiful game",
    layout: "Carousel",
    items: [
      {
        id: 206,
        title: "Boston Celtics",
        subtitle: "Championship window wide open",
        image_url:
          "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/500px-Boston_Celtics.svg.png",
        domain: "Team",
      },
      {
        id: 207,
        title: "Los Angeles Lakers",
        subtitle: "LeBron's last dance — or is it?",
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/500px-Los_Angeles_Lakers_logo.svg.png",
        domain: "Team",
      },
      {
        id: 208,
        title: "Denver Nuggets",
        subtitle: "Jokić and co. defending the throne",
        image_url:
          "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Denver_Nuggets.svg/500px-Denver_Nuggets.svg.png",
        domain: "Team",
      },
      {
        id: 209,
        title: "Golden State Warriors",
        subtitle: "Can Curry lead one more title run?",
        image_url:
          "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/500px-Golden_State_Warriors_logo.svg.png",
        domain: "Team",
      },
      {
        id: 210,
        title: "Milwaukee Bucks",
        subtitle: "Giannis hungry for a second ring",
        image_url:
          "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/500px-Milwaukee_Bucks_logo.svg.png",
        domain: "Team",
      },
      {
        id: 211,
        title: "Miami Heat",
        subtitle: "The culture that refuses to die",
        image_url:
          "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/500px-Miami_Heat_logo.svg.png",
        domain: "Team",
      },
    ],
  },
  {
    id: 4,
    position: 3,
    title: "This is a news carousel",
    subtitle: "The stars shaping the beautiful game",
    layout: "Carousel",
    items: [
      {
        id: 306,
        title: "Boston Celtics",
        subtitle: "Championship window wide open",
        image_url: "/img/mock/news-1.png",
        domain: "News",
      },
      {
        id: 307,
        title: "Los Angeles Lakers",
        subtitle: "LeBron's last dance — or is it?",
        image_url: "/img/mock/news-2.png",
        domain: "News",
      },
      {
        id: 308,
        title: "Denver Nuggets",
        subtitle: "Jokić and co. defending the throne",
        image_url: "/img/mock/news-3.png",
        domain: "News",
      },
      {
        id: 309,
        title: "Golden State Warriors",
        subtitle: "Can Curry lead one more title run?",
        image_url: "/img/mock/news-4.png",
        domain: "News",
      },
      {
        id: 310,
        title: "Milwaukee Bucks",
        subtitle: "Giannis hungry for a second ring",
        image_url: "/img/mock/news-5.png",
        domain: "News",
      },
      {
        id: 311,
        title: "Miami Heat",
        subtitle: "The culture that refuses to die",
        image_url: "/img/mock/news-6.png",
        domain: "News",
      },
    ],
  },
  {
    id: 5,
    position: 4,
    title: "All programs",
    subtitle: "The stars shaping the beautiful game",
    layout: "Carousel",
    items: [
      {
        id: 406,
        title: "Boston Celtics",
        subtitle: "Championship window wide open",
        image_url: "/img/mock/collection-1.png",
        domain: "Collection",
      },
      {
        id: 407,
        title: "Los Angeles Lakers",
        subtitle: "LeBron's last dance — or is it?",
        image_url: "/img/mock/collection-2.png",
        domain: "Collection",
      },
      {
        id: 408,
        title: "Denver Nuggets",
        subtitle: "Jokić and co. defending the throne",
        image_url: "/img/mock/collection-3.png",
        domain: "Collection",
      },
      {
        id: 409,
        title: "Golden State Warriors",
        subtitle: "Can Curry lead one more title run?",
        image_url: "/img/mock/collection-4.png",
        domain: "Collection",
      },
      {
        id: 410,
        title: "Milwaukee Bucks",
        subtitle: "Giannis hungry for a second ring",
        image_url: "/img/mock/collection-5.png",
        domain: "Collection",
      },
      {
        id: 411,
        title: "Miami Heat",
        subtitle: "The culture that refuses to die",
        image_url: "/img/mock/collection-6.png",
        domain: "Collection",
      },
      {
        id: 412,
        title: "Miami Heat",
        subtitle: "The culture that refuses to die",
        image_url: "/img/mock/collection-7.png",
        domain: "Collection",
      },
    ],
  },
  {
    id: 10,
    position: 5,
    title: "Coming Soon",
    subtitle: "More football content on the way",
    layout: "Carousel",
    items: [],
  },
];
