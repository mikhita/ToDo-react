
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

function Container(){
  return(
    <div className='container'>
      {/* <div className='inputValue'>
      <input className='checkboxInput' type="checkbox" />
      <p className='todoTargetText'>alnfceds</p>
      </div> */}
    </div>
  )
}

function FooterMobile(){
  return(
    <div className='itemsAndClearComplite'>
    <div className='itemsCounter'>
        <p className='itesmLeft'><span>5</span>items left</p>
        <p className='clearComplite'>Clear Completed</p>
    </div>
    <div className='filterTodosDiv'>
      <div className='filterComponents'>
      <p className='all'>All</p>
      <p className='active'>Active</p>
      <p className='completed'>Complited</p>
      </div>
    </div>
    <p className='lastText'>Drag and drop to reorder list</p>
    </div>
  )
}

function FooterDesktop(){
  return(
    <div className='itemsAndClearCompliteDesktop'>
    <div className='itemsCounter'>
        <p className='itesmLeft'><span>5</span>items left</p>
        <div className='filterComponents'>
          <p className='all'>All</p>
          <p className='active'>Active</p>
          <p className='completed'>Complited</p>
        </div>
        <p className='clearComplite'>Clear Completed</p>
    </div>
    <p className='lastText'>Drag and drop to reorder list</p>
    </div>
    )
}
function App() {
  return (
    <>
      <ImageLight />
      <TodoAndThemes/>
      <InputValue/>
      <Container/>
      <FooterMobile/>
      <FooterDesktop/>
    </>
  )
}

export default App;

