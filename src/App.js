import React, {useState} from 'react'
import Surah from './Surah'
import './App.css'


function App() {
  const [surahno, setSurahno] = useState('')
  const [appear,setAppear] = useState(true)

  const handleChange = (e) => {
        let srno = e.target.value

        if (Number(srno) ) {
          setSurahno(parseInt(srno))
        }
        else if(srno === ''){
          setSurahno(srno)
        }
        else{
          return 
        }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(surahno>=1 && surahno<=114){
      setAppear((appear) => !appear)
    }
  }

  return (
    <div >
      {appear?
      <div className="container justify-content-center p-5 my-5 bg-dark text-white">
      <h1 className="h1">Quran App</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">
              Surah No:</label>
              <input className="form-control" type="tel" placeholder='Surah No (1-114)' value={surahno} onChange={handleChange} />
            
            
          </div>
          <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
        </form>
      </div>
      :
      <div>
        <Surah surahNo={surahno} setSurahNo={setSurahno} handleSubmit={handleSubmit}/>
      </div>
      }


      
    </div>
  );
}

export default App;
