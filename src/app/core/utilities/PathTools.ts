import { environment } from './../../../environments/environment';

export const DomainName = environment.production ? 'https://api.mehdimst.com/' : 'https://localhost:7183/';
