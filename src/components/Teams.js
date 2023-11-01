import "../css/team.css";
import Team from "./Team";

function Teams() {
  return (
    <>
      <Team award={"firstTeam"} header={"All-NBA First Team"} filter={"ALL"} />
      <Team
        award={"secondTeam"}
        header={"All-NBA Second Team"}
        filter={"ALL"}
      />
      {/* <Team award={"thirdTeam"} header={"All-NBA Third Team"} filter={"ALL"} />
      <Team
        award={"firstTeamDef"}
        header={"All-Defensive First Team"}
        filter={"ALL"}
      />
      <Team
        award={"secondTeamDef"}
        header={"All-Defensive Second Team"}
        filter={"ALL"}
      />
      <Team
        award={"firstTeamRookie"}
        header={"All-Rookie First Team"}
        filter={"ROOKIE"}
      />

      <Team
        award={"secondTeamRookie"}
        header={"All-Rookie Second Team"}
        filter={"ROOKIE"}
      /> */}
    </>
  );
}

export default Teams;
