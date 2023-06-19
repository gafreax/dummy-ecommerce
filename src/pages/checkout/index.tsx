import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Trash as TrashIcon, XCircle as RemoveIcon, PlusCircleFill as AddIcon } from "react-bootstrap-icons";

import "./style.scss";
import Header from "../../components/Header";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { addToCart, removeFromCart, setCart } from "../../store/dummyjson/actions";
import useCartStorage from "../../hooks/useCartStorage";

type CheckoutItem = {
    id: string;
    quantity: number;
    price: number;
    title: string;
}

const Checkout = () => {
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
        const newCartItem = {id: item.id, title: item.title, price: item.price};
        const cart = window.localStorage.getItem("cart") || "";
        const cartJSON = JSON.parse(cart);
        if(cartJSON) {
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
            } else if( cartJSON[i].id === item.id) {
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

    return <Container>
        <Header  />
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Prodotto</th>
                    <th>Prezzo</th>
                    <th>Quantità</th>
                </tr>
            </thead>
            <tbody>
                {
                    checkoutItems.map((item: CheckoutItem) => <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity} 
                            <AddIcon className="icon" onClick={() => handleAddItem(item)} />
                            <RemoveIcon className="icon" onClick={() => handleRemoveItem(item)}/>
                            <TrashIcon className="icon" onClick={() => handleRemoveAllItems(item)} />
                        </td>
                    </tr>)
                }
            </tbody>
            <tfoot>
                <tr>
                    <td>Totale</td>
                    <td>{state.totalPrice}</td>
                    <td>{state.cartItems.length}</td>
                </tr>
            </tfoot>
        </Table>
        <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: state.totalPrice.toString(),
                            },
                        },
                    ],
                });
            }} />
        </PayPalScriptProvider>
    </Container>;
}

export default Checkout;