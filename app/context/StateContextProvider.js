"use client";
import { useState, createContext, useContext } from "react";

const context = createContext();

export const StateContext = ({ children }) => {
  const [qty, setQty] = useState(1);
  const [totalProdutPrice, setTotalProductPrice] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [filters, setFilters] = useState([]);
  const [colFilters, setColFilters] = useState([]);
  // const { filtered, setFiltered } = useState([]);

  const hadleShowCart = (data) => {
    // setShowCart(data);
    setIsShown(data);
  };

  const handleScrollLeft = (scrollableDivRef) => {
    scrollableDivRef.current.scrollLeft -= 270;
  };

  const handleScrollRight = (scrollableDivRef) => {
    scrollableDivRef.current.scrollLeft += 270;
  };

  /////
  const addToCart = (slugData, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === slugData._id
    );
    const addedItemPrice = slugData.price * quantity;

    if (checkProductInCart) {
      setTotalQuantities((totalQuantities) => totalQuantities + quantity);

      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === slugData._id)
          return { ...cartProduct, quantity: cartProduct.quantity + quantity };
      });
      // console.log(cartProduct);
      setCartItems(updatedCartItems);
    } else {
      slugData.quantity = quantity;

      setTotalProductPrice(
        (totalProdutPrice) => totalProdutPrice + addedItemPrice
      );
      setTotalQuantities((totalQuantities) => totalQuantities + quantity);
      setCartItems([...cartItems, { ...slugData }]);
    }
    // console.log(cartItems[0]);
    // alert();
  };

  /////
  const remFromCart = (clicked) => {
    const itemToDelete = cartItems.find((item) => item._id === clicked._id);
    const newCartItem = cartItems.filter((item) => item._id !== clicked._id);
    const remProductPrice = itemToDelete.price * itemToDelete.quantity;

    setTotalQuantities(
      (totalQuantities) => totalQuantities - itemToDelete.quantity
    );

    setTotalProductPrice(
      (totalProdutPrice) =>
        totalProdutPrice - itemToDelete.price * itemToDelete.quantity
    );
    setCartItems([...newCartItem]);
  };

  const remfilter = (clicked) => {
    const newfilters = filters.filter((item) => item.option !== clicked);
    setFilters([...newfilters]);
    console.log(clicked);
  };

  ////

  const toggleCartItemQuanitity = (id, value) => {
    const foundProduct = cartItems.find((item) => item._id === id);
    const index = cartItems.findIndex((product) => product._id === id);
    // const newCartItems = cartItems.filter((item) => item._id !== id);
    const foundProductInc = {
      ...foundProduct,
      quantity: foundProduct.quantity + 1,
    };
    const foundProductDec = {
      ...foundProduct,
      quantity: foundProduct.quantity - 1,
    };

    if (value === "inc") {
      const myArrayInc = cartItems.splice(index, 1, foundProductInc);
      setCartItems([...cartItems]);

      // console.log(...cartItems);
      setTotalProductPrice(
        (prevTotalPrice) => prevTotalPrice + foundProduct.price
      );
      setTotalQuantities((totalQuantities) => totalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        const myArrayDec = cartItems.splice(index, 1, foundProductDec);
        setCartItems([...cartItems]);

        setTotalProductPrice((totalPrice) => totalPrice - foundProduct.price);
        setTotalQuantities((totalQuantities) => totalQuantities - 1);
      }
    }
  };

  ///

  const incQty = () => {
    setQty(qty + 1);
  };

  const decQty = () => {
    setQty((qty) => {
      if (qty < 2) return 1;
      return qty - 1;
    });
  };

  return (
    <context.Provider
      value={{
        showCart,
        setShowCart,
        qty,
        incQty,
        decQty,
        totalProdutPrice,
        cartItems,
        totalQuantities,
        addToCart,
        setCartItems,
        remFromCart,
        toggleCartItemQuanitity,
        handleScrollLeft,
        handleScrollRight,
        hadleShowCart,
        isShown,
        setIsShown,
        filters,
        setFilters,
        remfilter,
        colFilters,
        setColFilters,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useStateContext = () => useContext(context);
