
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
function InputValues(){
  return(
    <input className='textInput' type="text" placeholder="Create a new todo…" />
  )
}

function InputValue(){
  return(
    <div className='inputValue'>
      <input className='checkboxInput' type="checkbox" />
      <InputValues/>
    </div>
  )
}

function Container(){
  return(
    <div className='container'>
      {/* <div className='inputValue'>
      <input className='checkboxInput' type="checkbox" />
      <p className='todoTargetText'>{InputValue.value}</p>
      </div>
      <hr/> */}
    </div>
  )
}

function FooterMobile(){
  return(
    <div className='itemsAndClearComplite'>
    <div className='itemsCounter'>
      <SpanCounter/>
      <ClearComplite/>
    </div>
    <div className='filterTodosDiv'>
      <div className='filterComponents'>
        <FilterAll/>
        <FilterActive/>
        <FilterCompleted/>
      </div>
    </div>
    <p className='lastText'>Drag and drop to reorder list</p>
    </div>
  )
}
function SpanCounter(){
  return(
    <p className='itesmLeft'><span>{Container.length}</span> items left</p>
  )
}
function FilterAll(){
  return(
  <p className='all'>All</p>
  )
}
function FilterActive(){
  return(
    <p className='active'>Active</p>
    )
}
function FilterCompleted(){
  return(
  <p className='completed'>Complited</p>
  )
}
function ClearComplite(){
  return(
    <p className='clearComplite'>Clear Completed</p>
  )
}
function FooterDesktop(){
  return(
    <div className='itemsAndClearCompliteDesktop'>
    <div className='itemsCounter'>
        <SpanCounter/>
        <div className='filterComponents'>
          <FilterAll/>
          <FilterActive/>
          <FilterCompleted/>
        </div>
        <ClearComplite/>
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

