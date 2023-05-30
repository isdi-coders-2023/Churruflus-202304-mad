import { ApiResponse } from "../models/simpson";

export class ApiRepository {
  url = "https://apisimpsons.fly.dev/api/personajes/";

  async getAll(): Promise<ApiResponse> {
    const response = await fetch(this.url);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }
    return response.json() as Promise<ApiResponse>;
  }
}
