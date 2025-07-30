const menuItems = [
  { icon: "home-icon", label: "Home", path: "/" },
  { icon: "search-icon", label: "Search A Book", path: "/search" },
  { icon: "saved-icon", label: "Saved Books", path: "/saved" },
  { icon: "what-to-read", label: "Hmm... Choose A Book", path: "/choose" },
  {
    icon: "translate-to-voice",
    label: "Let`s transform to voice",
    path: "/voice",
  },
  { icon: "add-friend", label: "Add Friends", path: "/friends" },
  { icon: "settings", label: "Settings", path: "/settings" },
];

const popularBooks = [
  {
    id: "1",
    coverUrl:
      "https://i.pinimg.com/1200x/ee/06/da/ee06da4b1bb681c5b9e9bc03b0d9f7ae.jpg",
    title: "A Court Of Thorns And Rosessssssssssssssss",
    author: "Sarah J. Maas",
  },
  {
    id: "2",
    coverUrl:
      "https://i.pinimg.com/1200x/1c/75/21/1c75214276da6c49dc701ee52c7886c0.jpg",
    title: "Secret Garden",
    author: "Frances H. Burnett",
  },
  {
    id: "3",
    coverUrl:
      "https://i.pinimg.com/736x/24/17/a3/2417a3ead6d7d3a41f8825e7af2385ce.jpg",
    title: "For All Stars And Keys",
    author: "Author Name",
  },
];

const announcementsBooks = [
  {
    id: "4",
    coverUrl:
      "https://i.pinimg.com/736x/a0/e3/e3/a0e3e300dcb6b44e959ac4c6cfbb721c.jpg",
    title: "The Endless War",
    author: "Author Name",
  },
  {
    id: "5",
    coverUrl:
      "https://i.pinimg.com/736x/19/e2/55/19e2554764e2e5d25362c37bb57930ac.jpg",
    title: "Court Of Secrets",
    author: "Author Name",
  },
  {
    id: "6",
    coverUrl:
      "https://i.pinimg.com/1200x/5a/63/78/5a6378e030ed4093ad8e16fa8cb3da62.jpg",
    title: "The Tales We Tell",
    author: "Author Name",
  },
  // Додайте більше книжок
];

export { popularBooks, announcementsBooks, menuItems };
export const BOOKS_PER_PAGE = 3; // Кількість книжок на сторінці
