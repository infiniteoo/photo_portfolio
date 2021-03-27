import shuffle from "../configs/shuffle";

const headerData = {
  bgImage: require("../../images/sports/twins opening day 2017 003.jpg"),
  title: "Sports",
  date: "2017 - Present",
  desc: "Baseball Shots",
  style: "featured-header-mobile",
};

const imageArray = [];

imageArray.push(
  {
    src: require("../../images/sports/twins opening day 2017 001.jpg"),
    src: require("../../images/sports/twins opening day 2017 001.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/sports/twins opening day 2017 002.jpg"),
    src: require("../../images/sports/twins opening day 2017 002.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/sports/twins opening day 2017 003.jpg"),
    src: require("../../images/sports/twins opening day 2017 003.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/sports/twins opening day 2017 029.jpg"),
    src: require("../../images/sports/twins opening day 2017 029.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/sports/twins opening day 2017 034.jpg"),
    src: require("../../images/sports/twins opening day 2017 034.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/sports/twins opening day 2017 036.jpg"),
    src: require("../../images/sports/twins opening day 2017 036.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/sports/twins opening day 2017 038.jpg"),
    src: require("../../images/sports/twins opening day 2017 038.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/sports/twins vs indians 041717 008.jpg"),
    src: require("../../images/sports/twins vs indians 041717 008.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/sports/twins vs indians 041717 021.jpg"),
    src: require("../../images/sports/twins vs indians 041717 021.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/sports/twins vs indians 041717 033.jpg"),
    src: require("../../images/sports/twins vs indians 041717 033.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/sports/twins vs white sox 041417 31.jpg"),
    src: require("../../images/sports/twins vs white sox 041417 31.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/sports/twins vs white sox 041417 37.jpg"),
    src: require("../../images/sports/twins vs white sox 041417 37.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/sports/twins vs white sox 041417 50.jpg"),
    src: require("../../images/sports/twins vs white sox 041417 50.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/sports/twins vs white sox 041617 003.jpg"),
    src: require("../../images/sports/twins vs white sox 041617 003.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/sports/twins vs white sox 041617 019.jpg"),
    src: require("../../images/sports/twins vs white sox 041617 019.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/sports/twins vs white sox 041617 038.jpg"),
    src: require("../../images/sports/twins vs white sox 041617 038.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/sports/twins vs white sox 041617 089.jpg"),
    src: require("../../images/sports/twins vs white sox 041617 089.jpg"),
    caption: "",
    category: "",
  }
);

const projectData = {
  imageArray: shuffle(imageArray),
  projectHeader: headerData,
};

export default projectData;
