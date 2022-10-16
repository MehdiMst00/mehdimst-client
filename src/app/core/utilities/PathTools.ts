import { environment } from './../../../environments/environment.prod';

export const DomainName = environment.production ? 'https://mehdimst.com/' : 'https://localhost:5000';
