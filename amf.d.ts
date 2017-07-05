declare namespace amf {
  const Client: Client;
  function registerClass(name: string, clazz: any): void;

  interface Client {
    new (name: string, url: string): this;
    addHeader(name: string, value: string): void;
    invoke(source: string, operation: string, parameters: any[]): Promise<any>;
  }
}
