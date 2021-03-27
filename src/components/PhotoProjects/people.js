import shuffle from "../configs/shuffle";

const headerData = {
  bgImage: require("../../images/people/twins opening day 2017 049.jpg"),
  title: "People",
  date: "2017 - Present",
  desc: "Candid Shots of Everyday People Living Their Lives",
  style: "featured-header-mobile",
};

const imageArray = [];

imageArray.push(
  {
    src: require("../../images/people/buxton lumi.jpg"),
    src: require("../../images/people/buxton lumi.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/people/Go-Twinsfest 2017 Day 2 Troy Dorman 231.jpg"),
    src: require("../../images/people/Go-Twinsfest 2017 Day 2 Troy Dorman 231.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/people/Go-Twinsfest 2017 Day 2 Troy Dorman 235.jpg"),
    src: require("../../images/people/Go-Twinsfest 2017 Day 2 Troy Dorman 235.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/people/Go-Twinsfest 2017 Day 2 Troy Dorman 252.jpg"),
    src: require("../../images/people/Go-Twinsfest 2017 Day 2 Troy Dorman 252.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/people/Go-Twinsfest 2017 Day 2 Troy Dorman 255.jpg"),
    src: require("../../images/people/Go-Twinsfest 2017 Day 2 Troy Dorman 255.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/people/jordan smiles.png"),
    src: require("../../images/people/jordan smiles.png"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/people/Lewis Del Mar @ 7th St Entry 050317 08.jpg"),
    src: require("../../images/people/Lewis Del Mar @ 7th St Entry 050317 08.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/people/Lewis Del Mar @ 7th St Entry 050317 16.jpg"),
    src: require("../../images/people/Lewis Del Mar @ 7th St Entry 050317 16.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/people/rodney apc power box.jpg"),
    src: require("../../images/people/rodney apc power box.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/people/Silversun Pickups Meet & Greet 042517 10.jpg"),
    src: require("../../images/people/Silversun Pickups Meet & Greet 042517 10.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/people/sophia eris.png"),
    src: require("../../images/people/sophia eris.png"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/people/twins opening day 2017 049.jpg"),
    src: require("../../images/people/twins opening day 2017 049.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/people/twins vs white sox 041417 38.jpg"),
    src: require("../../images/people/twins vs white sox 041417 38.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/people/Twinsfest 2017 Day 1 Troy Dorman 41.jpg"),
    src: require("../../images/people/Twinsfest 2017 Day 1 Troy Dorman 41.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/people/Twinsfest 2017 Day 1 Troy Dorman 46.jpg"),
    src: require("../../images/people/Twinsfest 2017 Day 1 Troy Dorman 46.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/people/zeke filming.jpg"),
    src: require("../../images/people/zeke filming.jpg"),
    caption: "",
    category: "",
  }
);

const projectData = {
  imageArray: shuffle(imageArray),
  projectHeader: headerData,
};

export default projectData;
