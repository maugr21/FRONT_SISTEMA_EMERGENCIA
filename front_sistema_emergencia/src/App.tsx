import { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './App.css';

function App() {
  const [message, setMessage] = useState("no message");
  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error al conectar con FastAPI:", error));
  }, []);

  // Configuración del contenedor del mapa
  const containerStyle = {
    width: '100%', // Ancho del mapa
    height: '100%', // Altura del mapa
  };

  // Coordenadas iniciales del mapa (puedes ajustarlas según tu ubicación deseada)
  const center = {
    lat: 19.432608, // Latitud (ejemplo: Ciudad de México)
    lng: -99.133209, // Longitud
  };

  return (
    <>
      <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
        <div style={{ backgroundColor: 'white', width: '50%', padding: '10px', textAlign: 'center', color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          {/* Mapa de Google */}
          <LoadScript googleMapsApiKey="AIzaSyCVsRlR5VTqqjgKXxla8Hi7qODLSp5JFbo">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
              {/* Puedes agregar marcadores u otros elementos aquí */}
            </GoogleMap>
          </LoadScript>
        </div>
        <div style={{ backgroundColor: 'orange', width: '50%', height: '30%', padding: '10px', textAlign: 'center', color: 'white', fontWeight: 'bold', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <button style={{ position: 'absolute',  fontSize: '16px', cursor: 'pointer', backgroundColor: 'white', color: 'orange', border: 'none', borderRadius: '5px' }}>
            Historial
          </button>
        </div>
      </div>
      <div style={{ backgroundColor: 'black', width: '100%', height: '70%', padding: '10px', textAlign: 'center', color: 'white', fontWeight: 'bold', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <p style={{color:'white'}}>{message}</p></div>
    </>
  );
}

export default App;
