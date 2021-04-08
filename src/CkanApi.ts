import fetch from "node-fetch";

export default class CkanApi {
  url: string;
  constructor(urlBase: string) {
    if (!urlBase.endsWith("/")) urlBase += "/";
    this.url = urlBase + "api/3/action/";
  }

  get<T>(action: string): Promise<T> {
    return fetch(this.url + action)
      .then((res) => res.json())
      .then((json) => json.result);
  }

  listPackages(): Promise<string[]> {
    return this.get("package_list");
  }

  listTags(): Promise<string[]> {
    return this.get("tag_list");
  }

  listGroups(): Promise<string[]> {
    return this.get("group_list");
  }
}
