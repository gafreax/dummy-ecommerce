import React, { useEffect } from 'react';
import { CheckoutItem, ItemReducerInterface } from '../index.types'
import QuantityButtons from '../../QuantityButtons';
import { useDispatch, useSelector } from 'react-redux';
import useCartStorage from '../../../hooks/useCartStorage';
import { addToCart, removeFromCart, setCart } from '../../../store/dummyjson/actions';
import { Table } from 'react-bootstrap';
import { Cash } from 'react-bootstrap-icons';

const ShowCartItems = () => {
  const msg:any =<div>Il carrello e vuoto</div> ;
  const state = useSelector((store: any) => store.cart);
  const dispatch = useDispatch();
  const [, setCartStorage] = useCartStorage(undefined);

  useEffect(() => {
    const cartJSON = localStorage.getItem("cart");
    const cart = cartJSON ? JSON.parse(cartJSON) : [];
    if (cart?.length > 0) {
        dispatch(setCart(cart));
    }
}, [dispatch]);

let checkoutItems: CheckoutItem[] = [];

state.cartItems.forEach((item: any) => {
    const found = checkoutItems.findIndex((checkoutItem: CheckoutItem) => checkoutItem.id === item.id)
    if (found >= 0) {
        checkoutItems[found].quantity++;
    } else {
        checkoutItems.push({
            id: item.id,
            quantity: 1,
            price: item.price,
            title: item.title
        });
    }
});

const handleAddItem = (item: CheckoutItem) => {
    const newCartItem = { id: item.id, title: item.title, price: item.price };
    const cart = window.localStorage.getItem("cart") || "";
    const cartJSON = JSON.parse(cart);
    if (cartJSON) {
        setCartStorage([...cartJSON, newCartItem]);
    } else {
        setCartStorage([newCartItem]);
    }
    dispatch(addToCart(newCartItem));
}

const handleRemoveItem = (item: CheckoutItem) => {
    const cart = window.localStorage.getItem("cart") || "";
    const cartJSON = JSON.parse(cart);
    dispatch(removeFromCart(item.id));
    let removed = false;
    let updatedCart = [];
    for (let i = 0; i < cartJSON.length; i++) {
        if (cartJSON[i].id !== item.id || removed) {
            updatedCart.push(cartJSON[i]);
        } else if (cartJSON[i].id === item.id) {
            removed = true;
        }
    }
    setCartStorage(updatedCart);
}

const handleRemoveAllItems = (item: CheckoutItem) => {
    const cart = window.localStorage.getItem("cart") || "";
    const cartJSON = JSON.parse(cart);
    const updatedCart = cartJSON.filter((cartItem: any) => {
        return cartItem.id !== item.id;
    });
    setCartStorage(updatedCart);
    dispatch(setCart(updatedCart));
}

const handleItemReducer = ({ item, action }: ItemReducerInterface) => {
    switch (action) {
        case "add":
            return handleAddItem(item);
        case "remove":
            return handleRemoveItem(item);
        case "removeAll":
            return handleRemoveAllItems(item);
    }
}

  return (checkoutItems.length>0)? <Table responsive={'true'} className={"body"}>
    <tbody>
      
        {checkoutItems.map((item: CheckoutItem) =>
          <tr key={item.id}>
            <td>{item.title}</td>
            <td className="badge bg-success  m-1 mt-3 p-1 d-flex justify-content-between align-content-center  "><Cash className=''></Cash>{item.price}</td>
            <td>
              <QuantityButtons
                handleItemsQuantity={handleItemReducer}
                item={item}
              />
            </td>
          </tr>)}
     
    </tbody>
  </Table>:msg

}

export default ShowCartItems


