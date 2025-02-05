import { test as base, APIRequestContext } from '@playwright/test';
import { GetCrocodileAPI } from '../api/get-crocodile-requests';

type ApiFixtures = {
  getCrocodileApi: GetCrocodileAPI;
};

export const test = base.extend<ApiFixtures>({
    getCrocodileApi: async ({ request }, use) => {
    const getCrocodileApi = new GetCrocodileAPI(request);
    await use(getCrocodileApi);
  },
});

export const expect = test.expect;