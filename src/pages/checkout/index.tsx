import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";
import Header from "../../components/Header";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { setCart } from "../../store/dummyjson/actions";

type CheckoutItem = {
    id: string;
    quantity: number;
    price: number;
    title: string;
}


const Checkout = () => {
    const state = useSelector( (store:any) => store.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        const cartJSON = localStorage.getItem("cart");
        const cart = cartJSON ? JSON.parse(cartJSON) : [];
        if(cart.length > 0 ) {
            dispatch(setCart(cart));
        }
    }, [dispatch]);

    let checkoutItems:CheckoutItem[] = [];

    state.cartItems.forEach( (item:any) => {
        const found = checkoutItems.findIndex( (checkoutItem:CheckoutItem) => checkoutItem.id === item.id)
        if(found >=0 ) {
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

    return <Container>
        <Header link={"/"} linkTitle={"Home"} showSearch={false} />
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
                checkoutItems.map( (item: CheckoutItem) => <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
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
                }}/>
        </PayPalScriptProvider>
    </Container>;
}

export default Checkout;

function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}
