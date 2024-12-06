interface EncriptionServiceOptions {
  encripter: any
}

export class EncriptionService {

  public readonly encripter: any;

  constructor({encripter}: EncriptionServiceOptions){
    this.encripter = encripter;
  }

  public hashPassword( password: string ): string {
    return this.encripter.hash( password )
  }

}