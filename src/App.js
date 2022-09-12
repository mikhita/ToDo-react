
import './App.css';

function ImageLight(){
  return(
    <div className='divforImageLightMobile'>
      <img className='imageLightMobile' src={require('./images/bg-mobile-light.jpg')} alt=""/>
      <img className='imageLightMobile displayNone' src={require('./images/bg-mobile-dark.jpg')} alt=""/>
      <img className='imageLightDesktop ' src={require('./images/bg-desktop-light.jpg')} alt=""/>
      <img className='imageLightDesktop displayNon' src={require('./images/bg-desktop-dark.jpg')} alt=""/>
    </div>
  )
}

function TodoAndThemes(){
  return(
    <div className='TodoAndThemes'>
      <img className='icons' src={require('./images/TODO.png')} alt=""/>
      <img className='icons' src={require('./images/iconMoon.png')} alt=""/>
      <img className='icons displayNone' src={require('./images/icon-sun.svg')} alt=""/>
    </div>
  )
}

function InputValue(){
  return(
    <div className='inputValue'>
      <input className='checkboxInput' type="checkbox" />
      <input className='textInput' type="text" placeholder="Create a new todo…" />
    </div>
  )
}
function App() {
  return (
    <>
      <ImageLight />
      <TodoAndThemes/>
      <InputValue/>
    </>
  )
}

export default App;

