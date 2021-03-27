import shuffle from "../configs/shuffle";

const headerData = {
  bgImage: require("../../images/concert/Bobby Raps/Bobby Raps @ Amsterdam Bar 042117 23.jpg"),
  title: "Concerts",
  date: "2017 - Present",
  desc: "Live Music in Action!",
  style: "featured-header-mobile",
};

const imageArray = [];

imageArray.push(
  {
    src: require("../../images/concert/50 Cent/170128_50 Cent Myth Troy Dorman_1704.jpg"),
    src: require("../../images/concert/50 Cent/170128_50 Cent Myth Troy Dorman_1704.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/50 Cent/170128_50 Cent Myth Troy Dorman_2547.jpg"),
    src: require("../../images/concert/50 Cent/170128_50 Cent Myth Troy Dorman_2547.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/50 Cent/170128_50 Cent Myth Troy Dorman_2841.jpg"),
    src: require("../../images/concert/50 Cent/170128_50 Cent Myth Troy Dorman_2841.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/50 Cent/170128_50 Cent Myth Troy Dorman_2847.jpg"),
    src: require("../../images/concert/50 Cent/170128_50 Cent Myth Troy Dorman_2847.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/50 Cent/170128_50 Cent Myth Troy Dorman_2942.jpg"),
    src: require("../../images/concert/50 Cent/170128_50 Cent Myth Troy Dorman_2942.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/50 Cent/170128_50 Cent Myth Troy Dorman_3017.jpg"),
    src: require("../../images/concert/50 Cent/170128_50 Cent Myth Troy Dorman_3017.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/A Boogie Wit Da Hoodie/A Boogie Wit Da Hoodie & Lexii Alijai025.jpg"),
    src: require("../../images/concert/A Boogie Wit Da Hoodie/A Boogie Wit Da Hoodie & Lexii Alijai025.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/AFI/AFI @ First Ave Troy Dorman 259.jpg"),
    src: require("../../images/concert/AFI/AFI @ First Ave Troy Dorman 259.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/AFI/AFI @ First Ave Troy Dorman 260.jpg"),
    src: require("../../images/concert/AFI/AFI @ First Ave Troy Dorman 260.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/AFI/AFI @ First Ave Troy Dorman 269.jpg"),
    src: require("../../images/concert/AFI/AFI @ First Ave Troy Dorman 269.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/AFI/AFI @ First Ave Troy Dorman 273.jpg"),
    src: require("../../images/concert/AFI/AFI @ First Ave Troy Dorman 273.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Bebe Rexha/Bebe Rexha @ Fine Line 012.jpg"),
    src: require("../../images/concert/Bebe Rexha/Bebe Rexha @ Fine Line 012.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Big Bang/Big Bang @ 7th St Entry 023.jpg"),
    src: require("../../images/concert/Big Bang/Big Bang @ 7th St Entry 023.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Bobby Raps/Bobby Raps @ Amsterdam Bar 042117 23.jpg"),
    src: require("../../images/concert/Bobby Raps/Bobby Raps @ Amsterdam Bar 042117 23.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Coin & ARIZONA/COIN & ARIZONA @ Triple Rock 042417 01.jpg"),
    src: require("../../images/concert/Coin & ARIZONA/COIN & ARIZONA @ Triple Rock 042417 01.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Cold War Kids/Cold War Kids @ First Ave 027.jpg"),
    src: require("../../images/concert/Cold War Kids/Cold War Kids @ First Ave 027.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Cold War Kids/Cold War Kids @ First Ave 028.jpg"),
    src: require("../../images/concert/Cold War Kids/Cold War Kids @ First Ave 028.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Cold War Kids/Cold War Kids @ First Ave 029.jpg"),
    src: require("../../images/concert/Cold War Kids/Cold War Kids @ First Ave 029.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Daya/Daya @ Fine Line 007.jpg"),
    src: require("../../images/concert/Daya/Daya @ Fine Line 007.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Daya/Daya @ Fine Line 003.jpg"),
    src: require("../../images/concert/Daya/Daya @ Fine Line 003.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Daya/Daya @ Fine Line 004.jpg"),
    src: require("../../images/concert/Daya/Daya @ Fine Line 004.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Goldlink/Go Show 5 Goldlink Troy Dorman 323.jpg"),
    src: require("../../images/concert/Goldlink/Go Show 5 Goldlink Troy Dorman 323.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Hippo Campus/Hippo Campus @ First Ave 03-11 021.jpg"),
    src: require("../../images/concert/Hippo Campus/Hippo Campus @ First Ave 03-11 021.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Hippo Campus/Hippo Campus @ First Ave 03-11 031.jpg"),
    src: require("../../images/concert/Hippo Campus/Hippo Campus @ First Ave 03-11 031.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Joey Fatts/Joey Fatts & D-Savage @ Lumber Xchange 004.jpg"),
    src: require("../../images/concert/Joey Fatts/Joey Fatts & D-Savage @ Lumber Xchange 004.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Kevin Garrett/Kevin Garett & A R I Z O N A 7th St Entry Troy Dorman 371.jpg"),
    src: require("../../images/concert/Kevin Garrett/Kevin Garett & A R I Z O N A 7th St Entry Troy Dorman 371.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Kevin Garrett/Kevin Garett & A R I Z O N A 7th St Entry Troy Dorman 372.jpg"),
    src: require("../../images/concert/Kevin Garrett/Kevin Garett & A R I Z O N A 7th St Entry Troy Dorman 372.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Khalid/Go Show 6 Khalid @ Fine Line 022.jpg"),
    src: require("../../images/concert/Khalid/Go Show 6 Khalid @ Fine Line 022.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Lewis Del Mar/Lewis Del Mar @ 7th St Entry 050317 14.jpg"),
    src: require("../../images/concert/Lewis Del Mar/Lewis Del Mar @ 7th St Entry 050317 14.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Lewis Del Mar/Lewis Del Mar @ 7th St Entry 050317 15.jpg"),
    src: require("../../images/concert/Lewis Del Mar/Lewis Del Mar @ 7th St Entry 050317 15.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Lewis Del Mar/Lewis Del Mar @ 7th St Entry 050317 19.jpg"),
    src: require("../../images/concert/Lewis Del Mar/Lewis Del Mar @ 7th St Entry 050317 19.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Lewis Del Mar/Lewis Del Mar @ 7th St Entry 050317 23.jpg"),
    src: require("../../images/concert/Lewis Del Mar/Lewis Del Mar @ 7th St Entry 050317 23.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Lewis Del Mar/Lewis Del Mar @ 7th St Entry 050317 25.jpg"),
    src: require("../../images/concert/Lewis Del Mar/Lewis Del Mar @ 7th St Entry 050317 25.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Lewis Del Mar/Lewis Del Mar @ 7th St Entry 050317 29.jpg"),
    src: require("../../images/concert/Lewis Del Mar/Lewis Del Mar @ 7th St Entry 050317 29.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Lewis Del Mar/Lewis Del Mar @ 7th St Entry 050317 33.jpg"),
    src: require("../../images/concert/Lewis Del Mar/Lewis Del Mar @ 7th St Entry 050317 33.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Marian Hill/Marian Hill & Opia @ First Ave 060117 019.jpg"),
    src: require("../../images/concert/Marian Hill/Marian Hill & Opia @ First Ave 060117 019.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Marian Hill/Marian Hill & Opia @ First Ave 060117 033.jpg"),
    src: require("../../images/concert/Marian Hill/Marian Hill & Opia @ First Ave 060117 033.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Marian Hill/Marian Hill & Opia @ First Ave 060117 039.jpg"),
    src: require("../../images/concert/Marian Hill/Marian Hill & Opia @ First Ave 060117 039.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/POS/POS @ First Ave 001.jpg"),
    src: require("../../images/concert/POS/POS @ First Ave 001.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/POS/POS @ First Ave 006.jpg"),
    src: require("../../images/concert/POS/POS @ First Ave 006.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Prof/Prof @ First Ave 100.jpg"),
    src: require("../../images/concert/Prof/Prof @ First Ave 100.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Riff Raff/Riff Raff @ Lumber Exchange Troy Dorman 003.jpg"),
    src: require("../../images/concert/Riff Raff/Riff Raff @ Lumber Exchange Troy Dorman 003.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/Riff Raff/Riff Raff @ Lumber Exchange Troy Dorman 017.jpg"),
    src: require("../../images/concert/Riff Raff/Riff Raff @ Lumber Exchange Troy Dorman 017.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/THEY/THEY. @ The Fine Line 021.jpg"),
    src: require("../../images/concert/THEY/THEY. @ The Fine Line 021.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/THEY/THEY. @ The Fine Line 023.jpg"),
    src: require("../../images/concert/THEY/THEY. @ The Fine Line 023.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/THEY/THEY. @ The Fine Line 026.jpg"),
    src: require("../../images/concert/THEY/THEY. @ The Fine Line 026.jpg"),
    caption: "",
    category: "",
  },
  {
    src: require("../../images/concert/THEY/THEY. @ The Fine Line 029.jpg"),
    src: require("../../images/concert/THEY/THEY. @ The Fine Line 029.jpg"),
    caption: "",
    category: "",
  }
);

const projectData = {
  imageArray: shuffle(imageArray),
  projectHeader: headerData
}

export default projectData;