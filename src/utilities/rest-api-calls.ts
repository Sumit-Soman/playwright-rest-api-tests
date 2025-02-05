// apiClient.ts
import { APIRequestContext } from "@playwright/test";

export class RestApiClient {
  constructor(protected request: APIRequestContext) {}

  async get(endpoint: string, params?: Record<string, any>) {
    return await this.request.get(endpoint, { params });
  }

  async post(endpoint: string, data: Record<string, any>) {
    const response = await this.request.post(endpoint, { data });
    return response.json();
  }
}
