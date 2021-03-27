import shuffle from "../configs/shuffle";

const headerData = {
  bgImage: require("../../images/city/dylan 2.jpg"),
  title: "City Shots",
  date: "2017 - Present",
  desc: "Cityscapes, Architecture & Art",
  style: "featured-header-mobile",
};

const imageArray = [];

imageArray.push(
  {
    src: require("../../images/city/5th ave underpass target field.png"),
    src: require("../../images/city/5th ave underpass target field.png"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/city/bridge enhanced.jpg"),
    src: require("../../images/city/bridge enhanced.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/city/COIN & ARIZONA @ Triple Rock 042417 59.jpg"),
    src: require("../../images/city/COIN & ARIZONA @ Triple Rock 042417 59.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/city/duffey paper company.png"),
    src: require("../../images/city/duffey paper company.png"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/city/dylan 2.jpg"),
    src: require("../../images/city/dylan 2.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/city/graffiti enhanced no brick.jpg"),
    src: require("../../images/city/graffiti enhanced no brick.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/city/Lewis Del Mar @ 7th St Entry 050317 02.jpg"),
    src: require("../../images/city/Lewis Del Mar @ 7th St Entry 050317 02.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/city/shadow to sky.jpg"),
    src: require("../../images/city/shadow to sky.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/city/target field.jpg"),
    src: require("../../images/city/target field.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/city/target station.png"),
    src: require("../../images/city/target station.png"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/city/Twinsfest 2017 Day 1 Troy Dorman 37.jpg"),
    src: require("../../images/city/Twinsfest 2017 Day 1 Troy Dorman 37.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/city/water tower.png"),
    src: require("../../images/city/water tower.png"),
    caption: "",
    category: "",
  }
);

const projectData = {
  imageArray: shuffle(imageArray),
  projectHeader: headerData,
};

export default projectData;
