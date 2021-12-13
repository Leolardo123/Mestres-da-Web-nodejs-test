export class Usuario {
   
    public readonly id: string;
  
    public nome: string;
    public email: string;
    public senha: string;
  
    constructor(props: Omit<Usuario, 'id'>, id?: string) {
      Object.assign(this, props);
  
      if (!id) {
        this.id = uuid();
      }
    }
  }