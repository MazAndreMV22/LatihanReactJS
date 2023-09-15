import 'flowbite';

function Tugas9() {
  return ( 
    <>
      <div className="flex justify-center">
      <div className="rounded-xl overflow-hidden shadow-xl shadow-grey">
          <table className="p-12 text-center">
              <thead className="bg-purple-500 text-white margin-top: 100px;">
                  <tr>
                  <th scope="col" className="px-6 py-3">
                      NO
                  </th>
                  <th scope="col" className="px-6 py-3">
                      NAMA
                  </th>
                  <th scope="col" className="px-6 py-3">
                      MATA KULIAH
                  </th>
                  <th scope="col" className="px-6 py-3">
                      NILAI
                  </th>
                  <th scope="col" className="px-6 py-3">
                      INDEX NILAI
                  </th>
                  <th scope="col" className="px-6 py-3">
                      ACTION
                  </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white border-b-2 dark:border-black">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                      1
                  </th>
                  <td className="px-6 py-4">
                      John
                  </td>
                  <td className="px-6 py-4">
                      Algoritma
                  </td>
                  <td className="px-6 py-4">
                      80
                  </td>
                  <td className="px-6 py-4">
                      A
                  </td>
                  <td className="px-6 py-4 flex">
                      <button type="button" class="text-black bg-white hover:bg-grey focus:ring-4 focus:ring-grey font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:hover:bg-white focus:outline-none dark:focus:ring-white border-2">Edit</button>
                      <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                  </td>
                  </tr>
                  <tr className="bg-white border-b-2 dark:border-black">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                      2
                  </th>
                  <td className="px-6 py-4">
                      Doe
                  </td>
                  <td className="px-6 py-4">
                      Matematika
                  </td>
                  <td className="px-6 py-4">
                      70
                  </td>
                  <td className="px-6 py-4">
                      B
                  </td>
                  <td className="px-6 py-4 flex">
                      <button type="button" class="text-black bg-white hover:bg-grey focus:ring-4 focus:ring-grey font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:hover:bg-white focus:outline-none dark:focus:ring-white border-2">Edit</button>
                      <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                  </td>
                  </tr>
                  <tr className="bg-white border-b-2 dark:border-black">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                      3
                  </th>
                  <td className="px-6 py-4">
                      Frank
                  </td>
                  <td className="px-6 py-4">
                      Kalkulus
                  </td>
                  <td className="px-6 py-4">
                      60
                  </td>
                  <td className="px-6 py-4">
                      C
                  </td>
                  <td className="px-6 py-4 flex">
                      <button type="button" class="text-black bg-white hover:bg-grey focus:ring-4 focus:ring-grey font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:hover:bg-white focus:outline-none dark:focus:ring-white border-2">Edit</button>
                      <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                  </td>
                  </tr>
                  <tr className="bg-white border-b-2 dark:border-black">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                      4
                  </th>
                  <td className="px-6 py-4">
                      Jason
                  </td>
                  <td className="px-6 py-4">
                      Basis Data
                  </td>
                  <td className="px-6 py-4">
                      90
                  </td>
                  <td className="px-6 py-4">
                      A
                  </td>
                  <td className="px-6 py-4 flex">
                      <button type="button" class="text-black bg-white hover:bg-grey focus:ring-4 focus:ring-grey font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:hover:bg-white focus:outline-none dark:focus:ring-white border-2">Edit</button>
                      <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                  </td>
                  </tr>
              </tbody>
          </table>
      </div>
      </div>
      </>
  );
}

export default Tugas9;