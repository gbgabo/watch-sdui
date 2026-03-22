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
        title: "Real Madrid vs Manchester City",
        subtitle: "Champions League semi-final — live at the Bernabéu",
        image_url:
          "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/500px-Real_Madrid_CF.svg.png",
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
    title: "Match Highlights",
    subtitle: "Best goals and moments from the weekend",
    layout: "Carousel",
    items: [
      {
        id: 103,
        title: "Premier League Round-up",
        subtitle: "Six goals in a breathless Sunday afternoon",
        image_url:
          "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/500px-Premier_League_Logo.svg.png",
        domain: "Content",
      },
      {
        id: 104,
        title: "Bundesliga: Bayern's Late Winner",
        subtitle: "90th-minute header keeps title race alive",
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg/500px-FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg.png",
        domain: "Content",
      },
      {
        id: 105,
        title: "Serie A: Inter Milan Masterclass",
        subtitle: "Dominant display puts Inter top of the table",
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/500px-FC_Internazionale_Milano_2021.svg.png",
        domain: "Content",
      },
      {
        id: 106,
        title: "FA Cup: Wembley Classic",
        subtitle: "Extra-time drama at the home of English football",
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/London_Wembley.jpg/500px-London_Wembley.jpg",
        domain: "Content",
      },
    ],
  },
  {
    id: 3,
    position: 2,
    title: "Player Profiles",
    subtitle: "The stars shaping the beautiful game",
    layout: "List",
    items: [
      {
        id: 107,
        title: "Erling Haaland",
        subtitle: "The machine that never stops scoring",
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Erling_Haaland_June_2025.jpg/500px-Erling_Haaland_June_2025.jpg",
        domain: "Collection",
      },
      {
        id: 108,
        title: "Vinicius Jr.",
        subtitle: "Dribbling his way to the Ballon d'Or",
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/2023_05_06_Final_de_la_Copa_del_Rey_-_52879242230_%28cropped%29.jpg/500px-2023_05_06_Final_de_la_Copa_del_Rey_-_52879242230_%28cropped%29.jpg",
        domain: "Collection",
      },
      {
        id: 109,
        title: "Pedri",
        subtitle: "Barcelona's midfield maestro at 22",
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Pedri.jpg/500px-Pedri.jpg",
        domain: "Collection",
      },
      {
        id: 110,
        title: "Rodri",
        subtitle: "The anchor every great team needs",
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/RODRI_-_SWE_vs_ESP_-_UEFA_EURO_2020_QUALIFIERS_-_2019.10.15_%28cropped%29.jpg/500px-RODRI_-_SWE_vs_ESP_-_UEFA_EURO_2020_QUALIFIERS_-_2019.10.15_%28cropped%29.jpg",
        domain: "Collection",
      },
      {
        id: 111,
        title: "Kylian Mbappé",
        subtitle: "Chasing history at the Bernabéu",
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Picture_with_Mbapp%C3%A9_%28cropped_and_rotated%29.jpg/500px-Picture_with_Mbapp%C3%A9_%28cropped_and_rotated%29.jpg",
        domain: "Collection",
      },
      {
        id: 112,
        title: "Lautaro Martínez",
        subtitle: "Serie A's deadliest finisher",
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Lautaro_Martinez_ARGENTINA_VS_VENEZUELA_2017.jpg/500px-Lautaro_Martinez_ARGENTINA_VS_VENEZUELA_2017.jpg",
        domain: "Collection",
      },
    ],
  },
  {
    id: 10,
    position: 3,
    title: "Coming Soon",
    subtitle: "More football content on the way",
    layout: "Carousel",
    items: [],
  },
];
