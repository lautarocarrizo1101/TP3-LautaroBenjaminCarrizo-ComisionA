const {useState} = React;

function App() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [mensaje, setMensaje] = useState('');
    const [clase, setClase] = useState('');

    const estilos = {
        nivel_bajo: { color: "#ffff00" },
        nivel_normal: { color: "#008000" },
        nivel_sobrepeso: { color: "#ff4500" },
        nivel_obesidad: { color: "#ff0000" },
    };

    function Kilogramos(event) {
        setPeso(event.target.value);
        setMensaje('');

    }

    const Centimetros = (event) => {
        setAltura(event.target.value);
        setMensaje('');
    };

    const CalculoIMC = (e) => {
        e.preventDefault();
        const kg = parseFloat(peso);
        const cm = parseFloat(altura);

        if(isNaN(kg) || isNaN(cm)){
            setMensaje("Por favor introduzca numeros en los inputs");
        }

        let IMC;

        IMC = kg / (cm * cm);

        if(IMC < 18.5){
            setMensaje('Este es un nivel es bajo');
            setClase('nivel_bajo');
        }else if(18.5 < IMC && 24.9 > IMC){
            setMensaje('Este es un nivel es normal');
            setClase('nivel_normal');
        }else if(25 < IMC && 29.9 > IMC){
            setMensaje('Este es un nivel de sobrepeso');
            setClase('nivel_sobrepeso');
        }else if(IMC >= 30){
            setMensaje('Esto es un nivel de obesidad');
            setClase('nivel_obesidad');
        }
    };

    return(
        <>
        <h1>Calculo del IMC</h1>
        <label htmlFor="peso">Peso(kg):</label>
        <input 
        id="peso"
        type="number"
        value={peso}
        onChange={Kilogramos}
        />
        <br />
        <label htmlFor="altura">Altura(cm):</label>
        <input 
        id="altura"
        type="number"
        step="0.01"
        value={altura}
        onChange={Centimetros}
        />
        <br />
        <button type="submit" onClick={CalculoIMC}>Calcular</button>
        <br />
        {mensaje && <p style={estilos[clase]}>{mensaje}</p>}
        </>
    );
}