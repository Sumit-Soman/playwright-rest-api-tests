// import { test, expect } from "@playwright/test";
import { test, expect } from '../src/fixtures/api-fixtures'
import { CrocodileUsers } from "../src/model/response/crocodile-user";

test.describe.parallel("API example tests", async () => {
  test("GET Crocodile API - vanilla ", async ({ request }) => {
    const response = await request.get("/public/crocodiles/");
    const responseBody: CrocodileUsers = JSON.parse(await response.body());

    expect(response).toBeOK();
    const user = responseBody.find((c) => (c.name = "Bert"));

    expect(user).not.toBeNull();
    expect(user).toStrictEqual({
      id: 1,
      age: 14,
      name: "Bert",
      sex: "M",
      date_of_birth: "2010-06-27",
    });
  });

  test("GET Crocodile API - Using Fixtures", async ({getCrocodileApi}) => {
    const response = await getCrocodileApi.getCrocodile();
    expect(response).toBeTruthy();

    const respJson: CrocodileUsers = await getCrocodileApi.getCrocodileUsers();
    const user = respJson.find((c) => (c.name = "Bert"));

    expect(user).not.toBeNull();
    expect(user).toStrictEqual({
      id: 1,
      age: 14,
      name: "Bert",
      sex: "M",
      date_of_birth: "2010-06-27",
    });
  });
});
