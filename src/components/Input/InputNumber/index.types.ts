export type InputNumberProps = {
    action?: string;
    dispatch?: Function;
    id: string;
    label: string;
    placeholder: string;
    max?: number;
    required?: boolean;
}

export type InRangeProps = {
    value: number | string;
    max: number;
}
