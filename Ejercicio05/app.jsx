const {useState} = React;

function App() {
    const [numero1, setNum1] = useState(0);
    const [numero2, setNum2] = useState(0);
    const [operacion, setOperacion] = useState('suma');
    const [respuesta, setRespuesta] = useState(null);
    const [errorDivision, setErrorDivision] = useState('');

    const PrimerNumero = (event) => {
        setNum1(event.target.value);
        setErrorDivision('');
    };

    const SegundoNumero = (event) => {
        setNum2(event.target.value);
        setErrorDivision('');
    }; 

    const manejarOperacion = (event) => {
        setOperacion(event.target.value);
        setErrorDivision('');
    }

    const Calcular = (e) => {
        e.preventDefault();
        const num1 = parseFloat(numero1);
        const num2 = parseFloat(numero2);

        if (isNaN(num1) || isNaN(num2)) {
            setRespuesta('Por favor, ingresa numeros validos.');
            return;
        }

        let res;
        setErrorDivision('');

        switch(operacion){
            case 'suma':
                res = num1 + num2;
                break;
            case 'resta':
                res = num1 - num2;
                break;
            case 'multi':
                res = num1 * num2;
                break;
            case 'division':
                if (num2 === 0) {
                    setErrorDivision('No se puede dividir por cero!');
                    setRespuesta(null);
                    return;
                }
                res = num1 / num2;
                break;
            default:
                res = 'Operacion no valida';
        }
        setRespuesta(res);
    };

    const deshabilitarBoton = false;

    return (
        <>
        <h1>Calculadora</h1>
        <form onSubmit={Calcular}>
            <label htmlFor="numero1">1er Numero:</label>
            <input 
                id="numero1" 
                type="number" 
                value={numero1}
                onChange={PrimerNumero}
            />
            <br />
            <label htmlFor="numero2">2do Numero:</label>
            <input 
                id="numero2" 
                type="number" 
                value={numero2}
                onChange={SegundoNumero}
            />
            <br />
            <select id="operaciones" value={operacion} onChange={manejarOperacion}>
                <option value="suma">Sumar</option>
                <option value="resta">Restar</option>
                <option value="multi">Multiplicar</option>
                <option value="division">Dividir</option>
            </select>
            <button type="submit" disabled={deshabilitarBoton}>Calcular</button>
            <br />
            {respuesta !== null && (<p>{respuesta}</p>)}
            {errorDivision && (<p>{errorDivision}</p>)}
        </form>
        </>
    );
}