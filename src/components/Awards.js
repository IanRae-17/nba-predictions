import "../css/Award.css";
import AwardContent from "../components/AwardContent";
import JokicImage from "../assets/jokic_hs.png";
import GiannisImage from "../assets/antetokounmpo_hs.png";
import BookerImage from "../assets/booker_hs.png";
import TatumImage from "../assets/tatum_hs.png";

function Awards() {
  return (
    <div className="awards-container">
      <AwardContent
        header={"MVP"}
        mainImage={JokicImage}
        playerName="Nikola Jokic"
        honorableMentions={{
          "Devin Booker": BookerImage,
          "Giannis Antetokounmpo": GiannisImage,
          "Jayson Tatum": TatumImage,
        }}
      />
      <AwardContent header={"DPOY"} />
      <AwardContent header={"6MOTY"} />
      <AwardContent header={"ROTY"} />
      <AwardContent header={"MIP"} />
      <AwardContent header={"COTY"} />
    </div>
  );
}

export default Awards;
