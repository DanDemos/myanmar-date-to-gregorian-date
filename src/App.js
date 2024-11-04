import logo from './logo.svg';
import './App.css';
const mcal = require('myanmar-calendar');


function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function App() {

  const Gregorian = "April 15, 1989"
  const toMyanmar = mcal.toMyanmar(new Date(Gregorian), "en");
  const toGregorian = mcal.toGregorian("10 Tagu, 1350");


  const Gregorian2 = "April 26, 1990"
  const toMyanmar2 = mcal.toMyanmar(new Date(Gregorian2), "en");
  const toGregorian2 = mcal.toGregorian("3 Kason, 1352");


  const Gregorian3 = "April 26, 1990"
  const toMyanmar3 = mcal.toMyanmar(new Date(Gregorian3), "en");
  const toGregorian3 = mcal.toGregorian("3 Kason, 1351");

  return (
    <div className="App">
      toMyanmar Function: {Gregorian} {"=>"} {toMyanmar}
      <br />
      toGregorian Function: {"10 Tagu, 1350"} {"=>"} {formatDate(toGregorian.toString())}
      <br />
      <br />
      <br />
      toMyanmar Function: {Gregorian2} {"=>"} {toMyanmar2}
      <br />
      toGregorian Function: {"3 Kason, 1352"} {"=>"} {formatDate(toGregorian2.toString())}
      <br />
      <br />
      <br />
      toMyanmar Function: {Gregorian3} {"=>"} {toMyanmar3}
      <br />
      toGregorian Function: {"3 Kason, 1351"} {"=>"} {formatDate(toGregorian3.toString())}

    </div>
  );
}

export default App;
