export interface ResponseEspecifiacion {
    id:             number;
    pedido:         Pedido;
    especificacion: Especificacion[];
    // eslint-disable-next-line @typescript-eslint/naming-convention
    published_at:   Date;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    created_at:     Date;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    updated_at:     Date;
}

export interface Especificacion {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    numero: number;
    talla:         string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    nombre_prenda: string;
    observaciones: string;
}

export interface Pedido {
    id:                        number;
    user:                      number;
    cedula:                    string;
    prenda:                    number;
    referencia:                string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    OP:                        string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    detalles_pedido:           null;
    numero:                    null;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    nombre_prenda:             null;
    observaciones:             null;
    talla:                     null;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_programacion: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_programacion:    string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_trazo:        string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_trazo:           string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_corte:        string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_corte:           string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_edicion:      string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_edicion:         string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_impresion:    string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_impresion:       string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_estampacion:  string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_estampacion:     string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_confeccion:   string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_confeccion:      string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_empaque:      string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_empaque:         string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_envio:        string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_envio:           string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_inicio_alistamiento: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    fecha_fin_alistamiento:    string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    estado:                    string;
    proceso1:                  number;
    proceso2:                  number;
    proceso3:                  number;
    proceso4:                  number;
    proceso5:                  number;
    proceso6:                  number;
    proceso7:                  number;
    proceso8:                  number;
    proceso9:                  number;
    proceso10:                 number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    published_at:              Date;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    created_at:                Date;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    updated_at:                Date;
    imagen:                    Imagen;
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
    thumbnail: Thumbnail;
}

export interface Thumbnail {
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
