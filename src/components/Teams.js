import "../css/team.css";
import Team from "./Team";

// NBA First Team
import JokicImage from "../assets/jokic_hs.png";
import GiannisImage from "../assets/antetokounmpo_hs.png";
import BookerImage from "../assets/booker_hs.png";
import TatumImage from "../assets/tatum_hs.png";
import EmbiidImage from "../assets/embiid_hs.png";

// NBA Second Team
import CurryImage from "../assets/curry_hs.png";
import MitchellImage from "../assets/mitchell_hs.png";
import ShaiImage from "../assets/shai_hs.png";
import DoncicImage from "../assets/doncic_hs.png";
import DavisImage from "../assets/davis_hs.png";

// NBA Third Team
import TyreseImage from "../assets/tyrese_hs.png";
import DurantImage from "../assets/durant_hs.png";
import LillardImage from "../assets/lillard_hs.png";
import JamesImage from "../assets/james_hs.png";
import YoungImage from "../assets/young_hs.png";

// DEF First Team
import JarenImage from "../assets/jaren_hs.png";
import JrueImage from "../assets/jrue_hs.png";
import ClaxtonImage from "../assets/claxton_hs.png";

//DEF Second Team
import VictorImage from "../assets/victor_hs.png";
import DejounteImage from "../assets/dejounte_hs.png";
import MobleyImage from "../assets/mobley_hs.png";
import AdebayoImage from "../assets/adebayo_hs.png";
import GreenImage from "../assets/green_hs.png";

// Rookie First Team
import HolmgrenImage from "../assets/holmgren_hs.png";
import AusarImage from "../assets/ausar_hs.png";
import ScootImage from "../assets/scoot_hs.png";
import HawkinsImage from "../assets/hawkins_hs.png";

// Rookie Second Team
import AmenImage from "../assets/amen_hs.png";
import JaquezImage from "../assets/jaquez_hs.png";
import WallaceImage from "../assets/wallace_hs.png";
import MillerImage from "../assets/miller_hs.png";
import CoulibalyImage from "../assets/coulibaly_hs.png";

function Teams() {
  return (
    <>
      <Team
        header={"All-NBA First Team"}
        players={{
          "Nikola Jokic": JokicImage,
          "Giannis Antetokounmpo": GiannisImage,
          "Devin Booker": BookerImage,
          "Jayson Tatum": TatumImage,
          "Joel Embiid": EmbiidImage,
        }}
      />
      <Team
        header={"All-NBA Second Team"}
        players={{
          "Stephen Curry": CurryImage,
          "Donovan Mitchell": MitchellImage,
          "Shai Gilgeous-Alexander": ShaiImage,
          "Luka Doncic": DoncicImage,
          "Anthony Davis": DavisImage,
        }}
      />
      <Team
        header={"All-NBA Third Team"}
        players={{
          "Tyrese Haliburton": TyreseImage,
          "Kevin Durant": DurantImage,
          "Damian Lillard": LillardImage,
          "Lebron James": JamesImage,
          "Trae Young": YoungImage,
        }}
      />
      <Team
        header={"All-Defensive First Team"}
        players={{
          "Giannis Antetokounmpo": GiannisImage,
          "Jaren Jackson Jr": JarenImage,
          "Jrue Holiday": JrueImage,
          "Anthony Davis": DavisImage,
          "Nic Claxton": ClaxtonImage,
        }}
      />
      <Team
        header={"All-Defensive Second Team"}
        players={{
          "Dejounte Murray": DejounteImage,
          "Evan Mobley": MobleyImage,
          "Bam Adebayo": AdebayoImage,
          "Draymond Green": GreenImage,
          "Victor Wembanyama": VictorImage,
        }}
      />
      <Team
        header={"All-Defensive Second Team"}
        players={{
          "Victor Wembanyama": VictorImage,
          "Chet Holmgren": HolmgrenImage,
          "Ausar Thompson": AusarImage,
          "Jordan Hawkins": HawkinsImage,
          "Scoot Henderson": ScootImage,
        }}
      />

      <Team
        header={"All-Defensive Second Team"}
        players={{
          "Amen Thompson": AmenImage,
          "Jaime Jaquez Jr": JaquezImage,
          "Cason Wallace": WallaceImage,
          "Bilal Coulibaly": CoulibalyImage,
          "Brandon Miller": MillerImage,
        }}
      />
    </>
  );
}

export default Teams;
