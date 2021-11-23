import { Role } from './role';

export interface User{
apellido: string;
blocked: null;
codigo: string;
confirmed: boolean;
// eslint-disable-next-line @typescript-eslint/naming-convention
created_at: string;
email: string;
id: number;
provider: string;
role: Role;
// eslint-disable-next-line @typescript-eslint/naming-convention
updated_at: string;
username: string;
}
