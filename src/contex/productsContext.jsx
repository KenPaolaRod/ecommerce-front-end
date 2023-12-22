import {useState, createContext, useEffect} from 'react'
export const ProductsContext = createContext()


export const ProductsProvider = ({children}) => {
  const [products, setproducts] = useState('');
  const [selectedButton, setSelectedButton] = useState(null);
  const [categories, setcategories] = useState([]);
  // const selectedCategory = categories[selectedButton];
  const [selectedCategory, setSelectedCategory] = useState(null)


  // fetching Products
    useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://apiecommerce-dxby.onrender.com/api/products');
        const data = await response.json();

        // getting only products categories 
        const categoriesSet = new Set(data.data.products.map(product => product.category));
        const categoriesArray = Array.from(categoriesSet);
        setcategories(categoriesArray);

        // Getting products
        setproducts(data.data.products);

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
    setSelectedCategory(categories[initialSelectedButtonIndex]);


  }, [categories]);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
    setSelectedCategory(categories[index]);

  };



  const data = {
    selectedButton,
    categories,
    handleButtonClick,
    selectedCategory,
    products
  };
  return <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
}



