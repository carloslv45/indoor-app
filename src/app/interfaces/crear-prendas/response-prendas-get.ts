export interface ResponsePrendasGet {
    id:            number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    nombre_prenda: string;
    lessons:       Lesson[];
    pedido:        number | null;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    published_at:  Date;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    created_at:    Date;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    updated_at:    Date;
}

export interface Lesson {
    referencia: string;
}
