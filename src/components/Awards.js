import "../css/Award.css";
import AwardContent from "../components/AwardContent";

import JokicImage from "../assets/jokic_hs.png";
import GiannisImage from "../assets/antetokounmpo_hs.png";
import BookerImage from "../assets/booker_hs.png";
import TatumImage from "../assets/tatum_hs.png";

// GIANNIS
import JrueImage from "../assets/jrue_hs.png";
import JarenImage from "../assets/jaren_hs.png";
import DraymondImage from "../assets/draymond_hs.png";

import PaulImage from "../assets/paul_hs.png";
import CamImage from "../assets/cam_hs.png";
import WoodImage from "../assets/wood_hs.png";
import MannImage from "../assets/mann_hs.png";

import VictorImage from "../assets/victor_hs.png";
import HolmgrenImage from "../assets/holmgren_hs.png";
import AusarImage from "../assets/ausar_hs.png";
import HawkinsImage from "../assets/hawkins_hs.png";

import ObiImage from "../assets/obi_hs.png";
import AytonImage from "../assets/ayton_hs.png";
import BaneImage from "../assets/bane_hs.png";
// CAM THOMAS

import QuinnImage from "../assets/quinn_hs.png";
import MaloneImage from "../assets/malone_hs.png";
import DefaultImage from "../assets/default_hs.avif";
// Darvin Ham

function Awards() {
  return (
    <div className="awards-container">
      <AwardContent
        header={"Most Valuable Player"}
        mainImage={JokicImage}
        playerName="Nikola Jokic"
        honorableMentions={{
          "Devin Booker": BookerImage,
          "Giannis Antetokounmpo": GiannisImage,
          "Jayson Tatum": TatumImage,
        }}
      />
      <AwardContent
        header={"Defensive Player of the Year"}
        mainImage={GiannisImage}
        playerName="Giannis Antetokounmpo"
        honorableMentions={{
          "Jrue Holiday": JrueImage,
          "Jaren Jackson Jr": JarenImage,
          "Draymond Green": DraymondImage,
        }}
      />
      <AwardContent
        header={"Sixth Man of the Year"}
        mainImage={PaulImage}
        playerName="Chris Paul"
        honorableMentions={{
          "Cam Thomas": CamImage,
          "Christian Wood": WoodImage,
          "Terance Mann": MannImage,
        }}
      />
      <AwardContent
        header={"Rookie of the Year"}
        mainImage={VictorImage}
        playerName="Victor Wembanyama"
        honorableMentions={{
          "Chet Holmgren": HolmgrenImage,
          "Ausar Thompson": AusarImage,
          "Jordan Hawkins": HawkinsImage,
        }}
      />
      <AwardContent
        header={"Most Improved Player"}
        mainImage={ObiImage}
        playerName="Obi Toppin"
        honorableMentions={{
          "Deandre Ayton": AytonImage,
          "Desmond Bane": BaneImage,
          "Cam Thomas": CamImage,
        }}
      />
      <AwardContent
        header={"Coach of the Year"}
        mainImage={QuinnImage}
        playerName="Quinn Snyder"
        honorableMentions={{
          "Darvin Ham": DefaultImage,
          "Joe Mazzulla": DefaultImage,
          "Michael Malone": MaloneImage,
        }}
      />
    </div>
  );
}

export default Awards;
