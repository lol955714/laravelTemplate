export default class CustomHttpClient {
    static obtenerCliente = (instance) => {
      const httpClient = async (url, data = {}, method = 'get', headers = {}) => instance({
        method,
        url,
        data,
        headers,
      });
      return httpClient;
    };
  }
