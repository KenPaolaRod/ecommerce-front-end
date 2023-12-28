import {useState, createContext, useEffect} from 'react'
export const ProductsContext = createContext()


export const ProductsProvider = ({children}) => {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedButton, setSelectedButton] = useState(null);
  const [categories, setcategories] = useState([]);
  // const selectedCategory = categories[selectedButton];
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart)



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

        setLoading(false);


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

   // Función para agregar un producto al carrito
   const addToCart = (product) => {
    // setCart((prevCart) => (Array.isArray(prevCart) ? [...prevCart, product] : [product]));
    setCart((prevCart) => [...prevCart, product]);

  };

  // Función para quitar un producto del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product._id !== productId);
    setCart(updatedCart);
  };

    // Almacena el carrito en localStorage cada vez que cambia
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);



  const data = {
    selectedButton,
    categories,
    handleButtonClick,
    selectedCategory,
    products,
    cart,
    addToCart,
    removeFromCart,
  };

  if (loading) {
    return <p className='loading'>Loading...</p>;  // Puedes mostrar un mensaje de carga mientras los datos se están recuperando
  }
  return <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
}



