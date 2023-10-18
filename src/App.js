import ContentNav from "./components/ContentNav";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <ContentNav headers={["EAST", "WEST"]} activePage={"WEST"} />

      <ContentNav
        headers={["MVP", "DPOY", "ROTY", "SMOTY", "MIP", "COTY"]}
        activePage={"MIP"}
      />

      <ContentNav
        headers={["ALL-NBA", "ALL-ROOKIE", "ALL-DEF"]}
        activePage={"ALL-DEF"}
      />
    </div>
  );
}

export default App;
