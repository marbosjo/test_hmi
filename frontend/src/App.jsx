import { useEffect, useState } from 'react';

function App() {
  const [notas, setNotas] = useState([]);
  const [texto, setTexto] = useState("");

  useEffect(() => {
    fetch("https://test_hmi.onrender.com/api/notas")
      .then(res => res.json())
      .then(data => setNotas(data));
  }, []);

  const agregarNota = async () => {
    const res = await fetch("https://test_hmi.onrender.com/api/notas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texto })
    });
    const nueva = await res.json();
    setNotas([...notas, nueva]);
    setTexto("");
  };

  return (
    <div>
      <h1>Notas</h1>
      <ul>
        {notas.map(nota => <li key={nota.id}>{nota.texto}</li>)}
      </ul>
      <input value={texto} onChange={e => setTexto(e.target.value)} />
      <button onClick={agregarNota}>Agregar</button>
    </div>
  );
}

export default App;