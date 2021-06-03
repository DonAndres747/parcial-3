import '../css/Body.css'
import imgW from '../../Recursos/illustration-working.svg';

function App(){
    return (
        <div className='cuerpo'>
            <div className='cuerpoText'>
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className='get-started'>Get Started</button>
            </div>

            <div className='imagenW'>
                <img src={imgW} alt='illustration' />
            </div>
        </div>
    )
}
export default App();