import logo from './logo.svg';
import './App.css';


const Header =({Children, size="100px"}) =>
<header className="App-header">
  
<img style={{minHeight:size}} src={logo} className="App-logo" alt="logo" />
{Children}                
      </header>
 const Add=({a,b}) =>
 <div> 
    a+b={a}+{b}={a+b}
 </div>
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <p>
        Edit <code>src/App.js</code>and save to reload.
       </p>
       <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'>
          Learn React
        </a>
       {/* {2+2}<br/>
       2+2<br/>
       {name}              */}
      </header> 
  <Header>Hello world</Header>
  <Header size="200px">Hell</Header>
  <Add a={5} b={3}/>
  <Add a={6} b={4}/>
  <Add a="Hel" b="loo"/>
  

{/*  <Main/>
  <Footer/> */}
</div>
  );
}
export default App;
