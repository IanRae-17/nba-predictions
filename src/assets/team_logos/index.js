const images = require.context("./", true);
const imageList = images.keys().map((image) => images(image));

console.log(imageList);

const teamImages = {
  "Atlanta Hawks": imageList[1],
  "Boston Celtics": imageList[2],
  "Brooklyn Nets": imageList[3],
  "Charlotte Hornets": imageList[4],
  "Chicago Bulls": imageList[5],
  "Cleveland Cavaliers": imageList[6],
  "Dallas Mavericks": imageList[7],
  "Denver Nuggets": imageList[8],
  "Detroit Pistons": imageList[9],
  "Golden State Warriors": imageList[10],
  "Houston Rockets": imageList[11],
  "Indiana Pacers": imageList[12],
  "Los Angeles Clippers": imageList[13],
  "Los Angeles Lakers": imageList[14],
  "Memphis Grizzlies": imageList[15],
  "Miami Heat": imageList[16],
  "Milwaukee Bucks": imageList[17],
  "Minnesota Timberwolves": imageList[18],
  "New Orleans Pelicans": imageList[19],
  "New York Knicks": imageList[20],
  "Oklahoma City Thunder": imageList[21],
  "Orlando Magic": imageList[22],
  "Philadelphia 76ers": imageList[23],
  "Phoenix Suns": imageList[24],
  "Portland Trail Blazers": imageList[25],
  "Sacramento Kings": imageList[26],
  "San Antonio Spurs": imageList[27],
  "Toronto Raptors": imageList[28],
  "Utah Jazz": imageList[29],
  "Washington Wizards": imageList[30],
};

console.log(teamImages);

export default teamImages;
