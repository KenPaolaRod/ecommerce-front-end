import {useState, createContext, useEffect} from 'react'
export const ProductsContext = createContext()


export const ProductsProvider = ({children}) => {
  const [products, setproducts] = useState('');
  const [selectedButton, setSelectedButton] = useState(null);


  // fetching Products
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


  // showing when a btn is selected
  useEffect(() => {
    const initialSelectedButtonIndex = 0;

    setSelectedButton(initialSelectedButtonIndex);
  }, []);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };
 

  const data = {
    selectedButton,
    handleButtonClick
  };
  return <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
}



