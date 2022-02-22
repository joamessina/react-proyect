import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente'
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
        <section>
          <Componente msg="Hola soy un componente funcional desde una prop" />
          <hr/> 
          <Propiedades 
          cadena="Esto es una cadena de texto" 
          numero={19} 
          booleano={true} 
          array={[1, 2, 3]}
          objeto = {{nombre: "Joax", correo: "joax@gmail.com"}}
          funcion={num => num*num}
          elementoReact={<i>esto es un elemento react</i>}
          componenteReact={<Componente msg="soy un componente pasado como prop"/>}
          />
          <hr/>
          <Estado/>
          <hr/>
          <RenderizadoCondicional/>
          <hr/>
          <RenderizadoElementos/>
        </section>
      </header>
    </div>
  );
}

export default App;
