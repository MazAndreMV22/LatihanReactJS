import React, { useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {

  //materi fetching data
  const [data, setData] = useState(null)

  //materi create data
  const [input, setInput] = useState(
    {
      id:"", 
      name: "", 
      course:"" , 
      score :""
    }
  )

  //indikator
  const [fetchStatus, setFetchStatus] = useState(true)

  useEffect(() => {
    //fetch data dengan kondisi
    if (fetchStatus === true) {
      axios.get("https://backendexample.sanbercloud.com/api/student-scores")
        .then((res) => {
          setData([...res.data])
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        })
      setFetchStatus(false)
    }

  }, [fetchStatus, setFetchStatus])

  //handling input
  const handleInput = (event) => {
    const {name, value} = event.target;
    setInput({...input,[name]:value});

  };

  //handling submit
  const handleSubmit = (event) => {
    event.preventDefault()

   
    let {
      id , name, course , score
    } = input;
    
    //create data
    axios.post('https://backendexample.sanbercloud.com/api/student-scores',
      {id, name ,course, score} )
      .then((res) => {
        console.log(res);
        setFetchStatus(true);
      })
      .catch((error) => {
        alert(error);
      })

      
    

    //clear input setelah create data
    setInput(
      {
        id:"", 
        name: "", 
        course:"" , 
        score :""
      }
    )
    
  }
  
  return (

    <>
    <div className="flex justify-center mt-10">
      <div className="rounded-xl overflow-hidden shadow-xl shadow-grey ">
        <div className='px-10 py-3'>
<form onSubmit={handleSubmit}>
  <div className="mb-6">
    <label htmlFor="id" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">Masukkan ID</label>
    <input onChange={handleInput} value={input.id} name='id' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan ID" required />
  </div>
  <div className="mb-6">
    <label htmlFor="nama" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">Masukkan Nama</label>
    <input onChange={handleInput} value={input.name} name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Nama" required />
  </div>
  <div className="mb-6">
    <label htmlFor="course" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">Masukkan Course</label>
    <input onChange={handleInput} value={input.course} name='course' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Course" required />
  </div>
  <div className="mb-6">
    <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">Masukkan Nilai</label>
    <input type="text" onChange={handleInput} value={input.score} name='score'
    className="
    bg-gray-50 border
     border-gray-300
      text-gray-900 
         text-sm rounded-lg
         focus:ring-blue-500
          focus:border-blue-500
           block w-full p-2.5
            dark:bg-gray-700
             dark:border-gray-600
              dark:placeholder-gray-400
               dark:text-white
                dark:focus:ring-blue-500
                 dark:focus:border-blue-500"
                  placeholder="Masukkan Nilai" required />
  </div>
  <button type={'submit'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</div>
</div>
</div>

    </>

  )
}

export default App