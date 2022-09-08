import React from "react";
import Formula from "./Formula";

function App() {

  const [spalanie, setSpalanie] = React.useState();
  const [cena, setCena] = React.useState();
  const [odleglosc, setOdleglosc] = React.useState();
  const [wynik, setWynik] = React.useState();
  const [theme, setTheme] = React.useState(false);

  var r = document.querySelector(":root");

  React.useEffect(() => {
    if (spalanie !== null && cena !== null && odleglosc !== null) {
      setWynik(Math.floor((odleglosc/100) * spalanie * cena * 100)/100);
    }
  }, [spalanie, cena, odleglosc]);

  React.useEffect(() => {
    if (theme === false) {
      r.style.setProperty("--black", "#000");
      r.style.setProperty("--white", "#FFF");
    } else {
      r.style.setProperty("--black", "#FFF");
      r.style.setProperty("--white", "#000");
    }
  }, [theme]);

  return (
    <div className="App">

      <h1 className="Title">KALKULATOR<br />PALIWA</h1>

      <div className="InputBox">
        <p>Odległość</p>
        <input className="App--Input" type="number" min={0} placeholder="KM" value={odleglosc} onChange={(e) => {
          if (e.target.value > 0) setOdleglosc(e.target.value * 1);
          if (e.target.value < 0) setOdleglosc(e.target.value * -1);
          if (e.target.value === "") setOdleglosc();
        }} />
      </div>

      <div className="InputBox">
        <p>Średnie spalanie</p>
        <input className="App--Input" type="number" min={0} placeholder="L / 100KM" value={spalanie} onChange={(e) => {
          if (e.target.value > 0) setSpalanie(e.target.value * 1);
          if (e.target.value < 0) setSpalanie(e.target.value * -1);
          if (e.target.value === "") setSpalanie();
        }} />
      </div>

      <div className="InputBox">
        <p>Cena za litr</p>
        <input className="App--Input" type="number" min={0} placeholder="PLN" value={cena} onChange={(e) => {
          if (e.target.value > 0) setCena(e.target.value * 1);
          if (e.target.value < 0) setCena(e.target.value * -1);
          if (e.target.value === "") setCena();
        }} />
      </div>

      <Formula spalanie={spalanie} cena={cena} odleglosc={odleglosc} wynik={wynik} />
      <i class={`fa-solid ${theme === false ? "fa-lightbulb" : "fa-moon"} ThemeButton`} onClick={() => setTheme(prev => !prev)}></i>
      <a href="https://github.com/wojnet" className="Autor">autor</a>

    </div>
  );
}

export default App;