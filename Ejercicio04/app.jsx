const {useState} = React;

function App() {
    const [izquierda, setIzquierda] = useState(true);
    const [derecha, setDerecha] = useState(false);

    const botonIzquierdo = () => {
        setIzquierda(true);
    };

    const botonDerecho = () => {
        setIzquierda(false);
    };

    return (
        <>
        <div>
            <button onClick={botonIzquierdo} disabled={izquierda}>Izquierda</button>
            <button onClick={botonDerecho} disabled={!derecha}>Derecha</button>
        </div>
        </>
    );
}