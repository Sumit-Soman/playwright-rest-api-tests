import { expect } from "@playwright/test";
import { CrocodileUsers } from "../model/response/crocodile-user";
import { RestApiClient } from "../utilities/rest-api-calls"; // Adjust the path as necessary

export class GetCrocodileAPI extends RestApiClient {
    readonly resourceUrl = '/public/crocodiles/';
    
    async getCrocodile() {
        return await this.get(this.resourceUrl,
            { headers: { 'accept': 'application/json' } });
    }

    async getCrocodileUsers() {
        const response = await this.getCrocodile();
        expect(response.status()).toBe(200);

        return await response.json();
    }
}