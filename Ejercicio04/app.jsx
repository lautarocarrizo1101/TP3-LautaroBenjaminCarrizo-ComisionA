function App() {
    const [izquierda, setIzquierda] = React.useState(true);
    const [derecha, setDerecha] = React.useState;

    const botonIzquierdo = () => {
        setIzquierda(true);
    };

    const botonDerecho = () => {
        setIzquierda(false);
    };

    return (
        <div>
            <button onClick={botonIzquierdo} disabled={izquierda}>Izquierda</button>
            <button onClick={botonDerecho} disabled={!derecha}>Derecha</button>
        </div>
    );
}