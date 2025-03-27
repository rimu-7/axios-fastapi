import axios from 'axios'
import { useEffect, useState } from 'react'

function Prac() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    useEffect(() => {
        const controller = new AbortController()
            ; (async () => {
                try {
                    setLoading(true)
                    setError(false)
                    const response = await axios.get('http://localhost:8000/api/products?search=' + search)
                    console.log(response.data);
                    setProducts(response.data);
                    setLoading(false)
                    setSearch
                } catch (error) {
                    setError(true)
                    setLoading(false)

                }
                return () => {
                    controller.abort()
                }
            })()

    }, [search])




    return (
        <div className='min-h-screen flex flex-col p-5'>
            <h1 className='text-5xl text-center'>Welcome to React+API</h1>
            <input type="text" placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='p-3 my-3 border-2 rounded'
            />
            {error ? (
                <h2 className='text-xl text-center text-red-500'>
                    Error fetching products{error.message}
                </h2>
            ) : (
                <h2 className='text-xl text-center text-green-400'>
                    Total products are: {loading ? "loading..." : products.length}
                </h2>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 my-3">
                {products.map((product) => (
                    <div key={product.id} className="border p-3 rounded flex flex-col justify-center items-center">
                        <img src={product.image} alt="image" className='w-60 h-40 rounded' />
                        <h1>{product.name}</h1>
                        <h1 className='text-gray-400'>{product.price}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Prac;