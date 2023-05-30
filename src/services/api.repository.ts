export class ApiRepository<T> {
  url = "https://apisimpsons.fly.dev/api/personajes";

  async getAll(query: string): Promise<T[]> {
    const response = await fetch(this.url + query);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }
    return response.json() as Promise<T[]>;
  }
}
