import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function App () {
    const [data, setData] = useState(null);

    useEffect(() => {
  axios
    .get( "https://backendexample.sanbercloud.com/api/student-scores" )
    .then( (res) => {
      setData([...res.data]);
      console.log(res.data);
    } )
    .catch((error) => {
      console.log(error);
    });

    },[]);

    console.log(data);

    const handleIndexScore = (param) => {
      if (param < 50 ) {
        return "E";
      }else if (param >= 50 && param < 60 ){ 
          return "D";
      }else if (param >= 50 && param < 70 ){ 
        return "C";
    }else if (param >= 50 && param < 80 ){ 
      return "B";
    } else {
      return "A";
    }
    };
    const [fetchStatus, setFetchStatus] = useState(true)

    const handleDelete = (event) => {

      let id = parseInt(event.target.value)
  
      axios.delete (`https://backendexample.sanbercloud.com/api/student-scores/${id}`)
      .then((res) => {
        setFetchStatus(true)
      })
      .catch((error) => {
        alert(error);
      })
  
    }

    return(
      <>
      <div className="flex justify-center mt-20">
        <div className="rounded-xl overflow-hidden shadow-xl shadow-grey">
            <table className="p-12 text-center">
                <thead className="bg-black text-white margin-top: 100px;">
                    <tr>
                    <th scope="col" className="px-6 py-3">
                        No.
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Nama
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Course
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Nilai
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Index Nilai
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                    </tr>
                </thead>
                <tbody>
                { data !== null &&
                    data.map ((res, index) => {
                      return (
                          <>
                          <tr key={index} className='bg-white border-b'>
                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                              {index+1}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                              {res.id}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900'>
                            {res.name}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900'>
                            {res.course}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900'>
                            {res.score}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900'>
                            {handleIndexScore(res.score)}
                            </td>
                            <td className="px-6 py-4 flex">
                      <button type="button" class="text-white bg-green-900 hover:bg-grey focus:ring-4 focus:ring-grey font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-900 dark:hover:bg-green-900 focus:outline-none dark:focus:ring-green-900 border-2">Display</button>
                      <button type="button" class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-red-900">Update</button>
                      <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={handleDelete} value={res.id}>Delete</button>
                  </td>
                          </tr>
                                                    </>
                        );
                      })}
                </tbody>
            </table>
        </div>
        </div>
        
        
  </>
    );
}
