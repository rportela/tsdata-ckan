import CkanApi from "../src/services/CkanApi";

const ckan: CkanApi = new CkanApi("http://dados.cvm.gov.br");

describe("CKAN API Package Show", function () {
  it("Should intantiate a package class", async function () {
    const pkg = await ckan.getPackage("adm_cart-cad");
    console.log(pkg);
    expect(pkg).toBeDefined();
  });
});
