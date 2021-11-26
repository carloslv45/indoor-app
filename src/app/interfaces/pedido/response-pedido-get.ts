export interface ResponsePedidoGet {
    id:           number;
    user:         User;
    cedula:       string;
    prenda:       Prenda;
    referencia:   string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    OP:           string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    published_at: Date;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    created_at:   Date;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    updated_at:   Date;
    imagen:       Imagen;
}

export interface Imagen {
    id:                number;
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    provider_metadata: null;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    created_at:        Date;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    updated_at:        Date;
}

export interface Formats {
    thumbnail: Small;
    small:     Small;
}

export interface Small {
    name:   string;
    hash:   string;
    ext:    string;
    mime:   string;
    width:  number;
    height: number;
    size:   number;
    path:   null;
    url:    string;
}

export interface Prenda {
    id:            number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    nombre_prenda: string;
    lessons:       Lesson[];
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

export interface User {
    id:         number;
    username:   string;
    email:      string;
    provider:   string;
    confirmed:  boolean;
    blocked:    null;
    role:       number;
    codigo:     null;
    apellido:   string;
    admin:      boolean;
    cedula:     string;
    celular:    null;
    direccion:  null;
    ciudad:     null;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    created_at: Date;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    updated_at: Date;
}
