import {useState, createContext, useEffect} from 'react'
export const ProductsContext = createContext()


export const ProductsProvider = ({children}) => {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedButton, setSelectedButton] = useState(null);
  const [categories, setcategories] = useState([]);
  // const selectedCategory = categories[selectedButton];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [productQuantities, setProductQuantities] = useState({});

  const [selectedQuantity, setSelectedQuantity] = useState(1);

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

const addToCart = (productId, selectedColor, selectedSize, selectedQuantity) => {
  const existingProductIndex = cart.findIndex(
    (item) =>
      item._id === productId &&
      item.selectedColor === selectedColor &&
      item.selectedSize === selectedSize
  );

  if (existingProductIndex !== -1) {
    // The product is already in the cart, update the quantity
    const updatedCart = [...cart];
    updatedCart[existingProductIndex].quantity += selectedQuantity;
    setCart(updatedCart);
  } else {
    // The product is not in the cart with the same size and color, add it as a new item
    const productToAdd = products.find((product) => product._id === productId);
    if (productToAdd) {
      setCart([
        ...cart,
        {
          ...productToAdd,
          selectedColor,
          selectedSize,
          quantity: selectedQuantity,
        },
      ]);
    }
  }
};

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product._id !== productId);
    setCart(updatedCart);
  };


  const updateCartItemQuantity = (productId, selectedColor, selectedSize, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };  
  

    // Storing the cart in localStorage every time it changes
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
    updateCartItemQuantity
  };

  if (loading) {
    return <p className='loading'>Loading...</p>; //while waiting for the data, this p tag is gonna be shown
  }
  return <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
}



