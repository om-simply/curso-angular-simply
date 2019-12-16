import { Observable } from "rxjs/Observable";
import { Response } from "@angular/http";

import 'core-js/es6/reflect';
import 'core-js/es7/reflect';

export class ErroHandler{

static handleError(error: Response | any){

let errorMessage: string;

if(error instanceof Response){
errorMessage = `Erro ${error.status} ao obter a URL ${error.url} - ${error.statusText}`;
}
else{
    errorMessage = error.toString();
}

console.log(errorMessage);
return Observable.throw(errorMessage);
}

}