import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function Home() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const controller = new AbortController()
       ;(async () => {
        try {
          setLoading(true)
          setError(false)
          const response = await axios.get("http://localhost:8000/api/products?search=" + search, {
            signal: controller.signal
          })
          console.log(response.data);
          setProducts(response.data)
          setLoading(false)
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log("Requset is cancelled", error.message)
            return
          }
          setError(true)
          setLoading(false)
        }

        //clean up code
        return () => {
          controller.abort()
        }

      })()
  }, [search])


  if (error) {
    return <h1 className='min-h-screen flex flex-col justify-center items-center text-5xl'>Something is wrong</h1>
  }


  return (
    <div className='min-h-screen flex flex-col justify-center items-center py-5'>
      <h1 className='text-5xl text-center'>Welcome to React+API</h1>
      <input type="text" placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='p-3 my-3 border-2 rounded'
      />
      <h2 className='text-xl text-center'>
        Total products are : {loading ? "Loading..." : products.length}
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 my-3 ">
        {products.map((product) => (
          <div key={product.id} className='flex justify-center items-center text-center '>
            <div className='border-2 p-4 rounded hover:border-red-500'>
              <img src={product.image} alt="" className='w-60 h-40 rounded object-cover' />
              <h3 className='text-lg font-medium'>{product.name}</h3>
              <p className='text-gray-400'>Price: {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Home

