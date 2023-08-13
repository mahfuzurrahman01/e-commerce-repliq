 "use client"
import {useState,useEffect} from 'react';
import axios from 'axios';
const Table = () => {
    const [products, setProducts] = useState ([]);
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://replic-server.vercel.app/products?limit=10"
        );
        console.log(response);
        if (response?.data.length > 0) {
            console.log(response?.data)
          setProducts(response?.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      fetchProducts();
    }, []);
    return (
        <div className="container p-2 mx-auto sm:p-4 text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold text-red-900">Total items: </h2>
        <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
                
                <thead className="bg-gray-400">
                    <tr className="text-left">
                        <th className="p-3">Id wise data #</th>
                        
                    </tr>
                </thead>
                <div className='w-full'>
                  {
                    products.length > 0 && products?.map(item => (
                        <div key={item._id} className='flex justify-between items-center w-full'>
                            <tr className="w-full border-b border-opacity-20 border-gray-700 bg-red-900">
                        <td className="p-3 w-[15%]">
                            <p>{item?._id}</p>
                        </td>
                        <td className="p-3 w-[15%]">
                            <p>{item?.title}</p>
                        </td>
                        <td className="p-3">
                            <p>14 Jan 2022</p>
                            <p className="text-gray-400">Friday</p>
                        </td>
                        <td className="p-3">
                            <p>01 Feb 2022</p>
                            <p className="text-gray-400">Tuesday</p>
                        </td>
                        <td className="p-3 text-right">
                            <p>${item?.price}</p>
                        </td>
                        <td className="p-3 text-right">
                            <span className="px-3 py-1 font-semibold rounded-md bg-gray-300 text-gray-200">
                                <span>Pending</span>
                            </span>
                        </td>
                    </tr>
                        </div>
                    ) )
                    
                  }
                </div>
            </table>
        </div>
    </div>
    
    );
};

export default Table;