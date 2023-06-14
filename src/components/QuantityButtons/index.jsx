import React from "react"
import { ButtonGroup, Button } from "react-bootstrap";

import { Trash as TrashIcon, DashCircle as RemoveIcon, PlusCircleFill as AddIcon } from "react-bootstrap-icons";


const QuantityButtons = ({ handleItemsQuantity, item }) => {
    return <>

        <ButtonGroup>
            <Button variant="secondary" size="sm" onClick={() => handleItemsQuantity({ item, action: "add" })} >
                <AddIcon className="icon" />
            </Button>
            <Button variant="secondary" disabled>{item.quantity}</Button>
            <Button variant="secondary" size="sm" onClick={() => handleItemsQuantity({ item, action: "remove" })}>
                <RemoveIcon className="icon" />
            </Button>
            <Button variant="danger" size="sm" onClick={() => handleItemsQuantity({ item, action: "removeAll" })} >
                <TrashIcon className="icon" />
            </Button>
        </ButtonGroup>
    </>
}

export default QuantityButtons;