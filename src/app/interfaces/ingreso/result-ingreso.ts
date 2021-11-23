export interface ResultIngreso {
    jwt:  string;
    user: User;
}

export interface User {
    id:         number;
    username:   string;
    email:      string;
    provider:   string;
    confirmed:  boolean;
    blocked:    null;
    role:       Role;
    codigo:     string;
    apellido:   string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    created_at: Date;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    updated_at: Date;
}

export interface Role {
    id:          number;
    name:        string;
    description: string;
    type:        string;
}
