import './App.css';
import Testimonio  from './components/Testimonio';
function App() {
  return (
    <div className="App">
      <div className='principal-container'>
        <h1> Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
        <Testimonio
        name= 'Emma Bostian'
        country=' Sweden'
        image='emma'
        charge='Software Engineer'
        business='Spotify'
        experience='Ive always struggled with learning JavaScript. Ive taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.'/>
        <Testimonio
        name= 'Sarah Chima'
        country=' Nigeria'
        image='Sarah'
        charge='Software Engineer'
        business='ChatDesk'
        experience='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'/>
        <Testimonio
        name= 'Shawn Wang'
        country=' Singapore'
        image='Shawn'
        charge='Software Engineer'
        business='Amazon'
        experience='Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.'/>
      </div>
    </div>
  );
}

export default App;
