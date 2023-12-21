import {useState, createContext, useEffect} from 'react'
export const ProductsContext = createContext()


export const ProductsProvider = ({children}) => {
  const [user, setUser] = useState({ username: null, email: null });
  const [products, setproducts] = useState('');

    useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://apiecommerce-dxby.onrender.com/api/products');
        const data = await response.json();

        setproducts(data.data.products)

      } catch (error) {
        console.log('Error fetching products', error);
      }
    }

    fetchCategories()

  }, []);


  const data = {
    user,
    products
  };
  return <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
}



