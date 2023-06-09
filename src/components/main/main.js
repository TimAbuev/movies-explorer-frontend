import AboutProject from "./aboutProject/AboutProject";
import Tech from "./techs/Tech";
import AboutMe from "./aboutMe/AboutMe";
import Portfolio from "./portfolio/Portfolio";
import Promo from "./promo/Promo";

function Main() {
  return (
    <main className="main">
      <Promo></Promo>
      <AboutProject></AboutProject>
      <Tech></Tech>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      
    </main>
  )
}
export default Main;