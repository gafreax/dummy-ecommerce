export type StringField = { value: string; valid: boolean };

export type NumberField = { value: number; valid: boolean };

export type Product = {
    title: StringField | undefined;
    description: StringField | undefined;
    price: NumberField | undefined;
    discountPercentage: NumberField | undefined;
    rating: NumberField | undefined;
    stock: NumberField | undefined;
    brand: StringField | undefined;
    category: StringField | undefined;
};

export interface FormState {
    product: Product;
    changed: boolean;
    valid: boolean;
}

export type FormAction = {
    type: string;
    payload: {
        value: string;
        valid: boolean;
    };
};
