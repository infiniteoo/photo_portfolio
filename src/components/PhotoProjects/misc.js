import shuffle from "../configs/shuffle";

const headerData = {
  bgImage: require("../../images/misc/bruce glamour headshot.png"),
  title: "Miscellaneous",
  date: "2017 - Present",
  desc: "Random Shots",
  style: "featured-header-mobile",
};

const imageArray = [];

imageArray.push(
  {
    src: require("../../images/misc/bruce flowers.jpg"),
    src: require("../../images/misc/bruce flowers.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/misc/bruce glamour headshot.png"),
    src: require("../../images/misc/bruce glamour headshot.png"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/misc/COIN & ARIZONA @ Triple Rock 042417 29.jpg"),
    src: require("../../images/misc/COIN & ARIZONA @ Triple Rock 042417 29.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/misc/dylan colors.jpg"),
    src: require("../../images/misc/dylan colors.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/misc/Glam Dolls NE Opening Troy Dorman 18.jpg"),
    src: require("../../images/misc/Glam Dolls NE Opening Troy Dorman 18.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/misc/studio b with green light.png"),
    src: require("../../images/misc/studio b with green light.png"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/misc/take a bite.png"),
    src: require("../../images/misc/take a bite.png"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/misc/target dog.png"),
    src: require("../../images/misc/target dog.png"),
    caption: "",
    category: "",
  }
);

const projectData = {
  imageArray: shuffle(imageArray),
  projectHeader: headerData,
};

export default projectData;
