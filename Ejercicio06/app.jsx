const {useState} = React;

function App() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [mensaje, setMensaje] = useState('');
    const [clase, setClase] = useState('');

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

        let IMC;

        IMC = kg / (cm * cm);

        if(IMC < 18.5){
            setMensaje('Esto es un nivel bajo');
            setClase('nivel_bajo');
        }else if(18.5 < IMC && 24.9 > IMC){
            setMensaje('Estos son niveles normal');
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
        {mensaje && <p className={clase}>{mensaje}</p>}
        </>
    );
}