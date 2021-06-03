import React from 'react';
import '../css/Shortener.css';


function App(){
    return (
        <div className='input-container'>
            <div className='input-container-inner'>
                <form className='shortener-form'>
                    <label htmlFor='link' style={{ position: 'relative' }}>
                        <input id='link' placeholder='Shorten a link here...' className="entrada" />
                    </label>
                    <label htmlFor='submit'>
                        <button className='submit-button' id='submit'>
                            <div>
                             Shorten it!
                             </div>
                        </button>
                    </label>
                </form>
            </div>
        </div>
    )
}

export default App;