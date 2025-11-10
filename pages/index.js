import Foto from "./img/motivacao.jpg"

function Home() {
    return (
    <div>
      <h1>O motivo da minha dedicação, é você!</h1>
      <img
        src={Foto}
        alt="Motivo da dedicação"
        width="300"
      />
    </div>
  );
}


export default Home;
