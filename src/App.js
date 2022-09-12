import Header from './components/Header';
import Card from './components/Cards';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


import imagen1 from './assets/img/flor1.jpeg'
import imagen2 from './assets/img/flor2.jpeg'
import imagen3 from './assets/img/flor3.jpeg'



function App(){
  return(
    <div className='container'>
      <div className='card'>
        <Header title="Galeria De Imagenes"/>
        <Card title="Flor 1" text="Flor Blanca" imagen={imagen1}/>
        <Card title="Flor 2" text="Flor Azul" imagen={imagen2}/>
        <Card title="Flor 3" text="Flor Rosada" imagen={imagen3}/>
        <Footer title="©Todos Los Derechos Reservados"/>
      </div>
    </div>
  )
}
export default App;
