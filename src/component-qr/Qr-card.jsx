import "./qr-card-style.css";
import image from "./assets/image-qr-code.png";

function QrCode() {
  return (
    <>
      <div>
        <img src={image} alt="qr-code" />
      </div>
    </>
  );
}

export default QrCode;
