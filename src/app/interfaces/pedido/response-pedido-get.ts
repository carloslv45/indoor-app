export interface ResponsePedidoGet {
    id:           number;
    user:         User;
    cedula:       string;
    talla:       string;
    estado:       string;
    proceso1: number;
    proceso2: number;
    proceso3: number;
    proceso4: number;
    proceso5: number;
    proceso6: number;
    proceso7: number;
    proceso8: number;
    proceso9: number;
    proceso10: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    detalles_pedido:       string;
    numero:       number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_programacion: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_programacion: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_trazo: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_trazo: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_corte: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_corte: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_edicion: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_edicion: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_impresion: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_impresion: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_estampacion: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_estampacion: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_confeccion: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_confeccion: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_empaque: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_empaque: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_envio: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_envio: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_alistamiento: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_alistamiento: string;
    prenda:       Prenda;
    referencia:   string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    nombre_prenda:   string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    OP:           string;
    observaciones:           string;
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
    alternativeText:   string;
    caption:           string;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        string;
    provider:          string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    provider_metadata: string;
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
    path:   string;
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
    blocked:    string;
    role:       number;
    codigo:     string;
    apellido:   string;
    admin:      boolean;
    cedula:     string;
    celular:    string;
    direccion:  string;
    ciudad:     string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    created_at: Date;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    updated_at: Date;
}
