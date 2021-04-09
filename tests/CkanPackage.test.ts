import CkanApi from "../src/CkanApi";

const ckan: CkanApi = new CkanApi("https://dados.gov.br");

describe("CKAN API Package Show", function () {
  it("Should intantiate a package class", async function () {
    const pkg = await ckan.getPackage("10821-ajuste-patrimonial-saldos-rs");
    console.log(pkg);
    expect(pkg).toBeDefined();
  });
});
