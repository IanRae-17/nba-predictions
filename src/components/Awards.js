import "../css/Award.css";
import AwardContent from "../components/AwardContent";

function Awards() {
  return (
    <div className="awards-container">
      <AwardContent
        header={"Most Valuable Player"}
        award={"MVP"}
        filter={"ALL"}
      />
      <AwardContent
        header={"Defensive Player of the Year"}
        award={"DPOY"}
        filter={"ALL"}
      />
      <AwardContent
        header={"Sixth Man of the Year"}
        award={"SMOY"}
        filter={"ALL"}
      />
      <AwardContent
        header={"Rookie of the Year"}
        award={"ROY"}
        filter={"ROOKIE"}
      />
      <AwardContent
        header={"Most Improved Player"}
        award={"MIP"}
        filter={"ALL"}
      />
      <AwardContent
        header={"Coach of the Year"}
        award={"COY"}
        filter={"COACH"}
      />
    </div>
  );
}

export default Awards;
