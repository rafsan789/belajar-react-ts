
import { useState} from "react";
import "./App.css";

function App() {
  const [jumlah, setJumlah] = useState<number>(0);

  return (
    <main className="container">
    <h1>Belajar React + typescript</h1>
    <p>Selamat datang di website pertama!</p>

    <div className="counter">
      <h2>Jumlah klik: {jumlah}</h2>

      <button onClick={() => setJumlah(jumlah + 1)}>
        Tambah
      </button>

      <button onClick={() => setJumlah(0)}>
        Reset
      </button>
    </div>
</main>
  );
}

export default App;