"use client";
import { useState, createContext, useContext, useEffect } from "react";

const context = createContext();

export const StateContext = ({ children }) => {
  const [qty, setQty] = useState(() => (typeof window !== "undefined" ? 1 : 1));
  const [totalProdutPrice, setTotalProductPrice] = useState(() =>
    typeof window !== "undefined" ? 0 : 0
  );
  const [showCart, setShowCart] = useState(() =>
    typeof window !== "undefined" ? false : false
  );
  const [cartItems, setCartItems] = useState(() =>
    typeof window !== "undefined" ? [] : []
  );
  const [totalQuantities, setTotalQuantities] = useState(() =>
    typeof window !== "undefined" ? 0 : 0
  );
  const [isShown, setIsShown] = useState(() =>
    typeof window !== "undefined" ? false : false
  );
  const [filters, setFilters] = useState(() =>
    typeof window !== "undefined" ? [] : []
  );
  const [colFilters, setColFilters] = useState(() =>
    typeof window !== "undefined" ? [] : []
  );

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("cartItems")) {
      setCartItems(JSON.parse(localStorage.getItem("cartItems")));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const hadleShowCart = (data) => {
    setIsShown(data);
  };

  const handleScrollLeft = (scrollableDivRef) => {
    scrollableDivRef.current.scrollLeft -= 270;
  };

  const handleScrollRight = (scrollableDivRef) => {
    scrollableDivRef.current.scrollLeft += 270;
  };

  //// Ai
  const addToCart = (slugData, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === slugData._id
    );
    const addedItemPrice = slugData.price * quantity;

    if (checkProductInCart) {
      setTotalProductPrice(
        (totalProdutPrice) => totalProdutPrice + addedItemPrice
      );
      setTotalQuantities((totalQuantities) => totalQuantities + quantity);

      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === slugData._id) {
          // Return the updated product object
          return { ...cartProduct, quantity: cartProduct.quantity + quantity };
        }
        // 💡 FIX: Return the original product object for non-matching IDs
        return cartProduct;
      });

      setCartItems(updatedCartItems);
    } else {
      slugData.quantity = quantity;

      setTotalProductPrice(
        (totalProdutPrice) => totalProdutPrice + addedItemPrice
      );
      setTotalQuantities((totalQuantities) => totalQuantities + quantity);
      setCartItems([...cartItems, { ...slugData }]);
    }
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
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty < 2) return 1;
      return prevQty - 1;
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
