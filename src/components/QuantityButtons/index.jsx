import React from "react"
import { ButtonGroup, Button } from "react-bootstrap";

import { Trash as TrashIcon, DashLg as RemoveIcon, PlusLg as AddIcon } from "react-bootstrap-icons";


const QuantityButtons = ({ handleItemsQuantity, item }) => {
    return <>

        <ButtonGroup >
            <Button variant="outline-primary"  size="sm" onClick={() => handleItemsQuantity({ item, action: "add" })} >
                <AddIcon/>
            </Button>
            <Button variant="outlined-secondary"  disabled>{item.quantity}</Button>
            <Button variant="outline-primary"  size="sm" onClick={() => handleItemsQuantity({ item, action: "remove" })}>
                <RemoveIcon  />
            </Button>
            <Button variant="danger" size="sm" onClick={() => handleItemsQuantity({ item, action: "removeAll" })} >
                <TrashIcon  />
            </Button>
        </ButtonGroup>
    </>
}

export default QuantityButtons;