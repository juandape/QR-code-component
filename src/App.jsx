import "./App.css";
import QrCode from "./component-qr/Qr-card";
import Text from "./component-text/Text-card";

function App() {
  return (
    <>
      <div className="container">
        <div className="container__card">
          <QrCode />
          <Text />
        </div>
      </div>
    </>
  );
}

export default App;
