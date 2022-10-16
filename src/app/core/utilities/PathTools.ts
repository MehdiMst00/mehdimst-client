import { environment } from './../../../environments/environment';

export const DomainName = environment.production ? 'https://mehdimst.com/' : 'https://localhost:7183/';
