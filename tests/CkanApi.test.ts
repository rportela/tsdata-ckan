import CkanApi from "../src/CkanApi";

const ckan: CkanApi = new CkanApi("https://demo.ckan.org");

function expectValidArray(arr: any) {
  expect(arr).toBeDefined();
  expect(arr.length).toBeGreaterThan(0);
}

describe("CKAN API Tests", function () {
  it("Should list packages", async function () {
    expectValidArray(await ckan.listPackages());
  });
  it("Should list tags", async function () {
    expectValidArray(await ckan.listTags());
  });
  it("Should list groups", async function () {
    expectValidArray(await ckan.listGroups());
  });
});
