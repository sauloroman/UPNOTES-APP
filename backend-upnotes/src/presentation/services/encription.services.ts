interface EncripterOption {
  hash: ( value: string ) => string
  compare: ( candidate: string, hashValue: string ) => boolean
}

interface EncriptionServiceOptions {
  encripter: EncripterOption
}

export class EncriptionService {

  public readonly encripter: EncripterOption;

  constructor({encripter}: EncriptionServiceOptions){
    this.encripter = encripter;
  }

  public hashPassword( password: string ): string {
    return this.encripter.hash( password )
  }

  public comparePaassword( password: string, hashPassword: string ): boolean {
    return this.encripter.compare( password, hashPassword )
  }

}