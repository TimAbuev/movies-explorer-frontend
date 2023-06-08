import AboutProject from "./aboutProject/AboutProject";
import Tech from "./techs/Tech";
import AboutMe from "./aboutMe/AboutMe";
import Portfolio from "./portfolio/Portfolio";

function Main() {
  return (
    <main className="main">
      <AboutProject></AboutProject>
      <Tech></Tech>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
    </main>
  )
}
export default Main;