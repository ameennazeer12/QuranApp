import React,{useState, useEffect} from 'react'


const Surah = ({surahNo,setSurahNo,handleSubmit}) => {
    const [url,setUrl] = useState(`http://api.alquran.cloud/v1/surah/${surahNo}`)
    const [ayah, setAyah] = useState([])
    const [surahName,setSurahName] = useState('')
    // const [surahNo,setSurahNo] = useState(114)
    const [surahEng,setSurahEng] = useState('')
    const [surahTotal,setSurahTotal] = useState('')

    useEffect(() => {
        getAyah()
        async function getAyah () {
            const resp = await fetch (url) //Here, you fetch the url
            const data = await resp.json() //The data is converted to json
            console.log(data.data.ayahs)
            setAyah(data.data.ayahs)
            setSurahName(data.data.name)
            setSurahEng(data.data.englishNameTranslation)
            setSurahTotal(data.data.numberOfAyahs)
        
        }
        window.scrollTo(0, 0)
    }, [url])
    
    const handleNext = ()=>{
        let srno = surahNo + 1
        
        if (srno <= 114){
            setSurahNo(srno)
            setUrl(`http://api.alquran.cloud/v1/surah/${srno}`)
        }
        else{
            return
        }
        
    }
    const handlePrevious = ()=>{
        let srno = surahNo - 1
        
        if (srno >0){
            setSurahNo(srno)
            setUrl(`http://api.alquran.cloud/v1/surah/${srno}`)
        }
        else{
            return
        }
    }


    return (
        <div className="container col-md-12 p-1 my-5 bg-dark text-white">
            <div className="text-center">
                <h1 className="h1">
                    {surahNo}  {surahName}   
                </h1>
                <h2 className="h2">
                    English Translation: {surahEng}
                </h2>
                <h2 className="h2">
                    Total Ayahs: {surahTotal}
                </h2>
            </div>

            <ol className="list-group list-group-numbered w-100 p-3 dir">
            {ayah.map((perayah) => {
                return (
                    <li className="list-group-item" key={perayah.number}>{perayah.text}</li>
                )
            })}
            </ol>
            <div className="col text-center">
                <button className="btn btn-space btn-secondary" type="submit" onClick={handlePrevious}>Previous</button>
                <button className="btn btn-space btn-primary" type="submit" onClick={handleSubmit}>Home</button>
                <button className="btn btn-space btn-secondary" type="submit" onClick={handleNext}>Next</button>
            </div>

        </div>
    )
}

export default Surah
