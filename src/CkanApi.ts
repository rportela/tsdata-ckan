import fetch from "node-fetch";
import { ICkanPackage } from "./types";

/**
 * This is the common response interface for CKAN api.
 */
export interface ICkanResult<T> {
  help: string;
  success: boolean;
  result?: T;
  error?: {
    __type: string;
    message: string;
  };
}

/**
 *
 * https://docs.ckan.org/en/2.9/api/#module-ckan.logic.action.get
 *
 */
export class CkanApi {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase.endsWith("/")
      ? urlBase.substring(0, urlBase.length - 1)
      : urlBase;
  }

  /**
   * Executes the API call with the GET verb for a specific action.
   * @param action The action to execute.
   * @returns The expected result or an error is raised.
   */
  async getAction<T>(action: string): Promise<T> {
    const url = this.urlBase + action;
    const res = await fetch(url);
    const result: ICkanResult<T> = await res.json();
    if (result.success) return result.result;
    else throw new Error(result.error?.message ?? "Unknown Error");
  }

  /**
   * Helper to check if the API is up and running.
   *
   * @returns
   */
  siteRead(): Promise<boolean> {
    return this.getAction("/api/3/site_read");
  }

  /**
   * Return a list of the names of the site’s datasets (packages).
   *
   * @returns list of strings
   */
  async listPackages(): Promise<string[]> {
    return this.getAction("/api/3/action/package_list");
  }

  /**
   * Return a list of the site’s datasets (packages) and their resources.
   * The list is sorted most-recently-modified first.
   *
   * @returns list of dictionaries
   */
  currentPackagesAndResources(): Promise<any[]> {
    return this.getAction("/api/3/action/current_package_list_with_resources");
  }

  /**
   * Return the members of a group.
   * The user must have permission to ‘get’ the group.
   *
   * @param id (string) – the id or name of the group
   */
  listMembers(id: string): Promise<any[]> {
    return this.getAction(
      "/api/3/action/member_list?id=" + encodeURIComponent(id)
    );
  }

  /**
   *
   * @returns
   */
  listTags(): Promise<string[]> {
    return this.getAction("/api/3/action/tag_list");
  }

  listGroups(): Promise<string[]> {
    return this.getAction("/api/3/action/group_list");
  }

  getPackage(id: string): Promise<ICkanPackage> {
    return this.getAction(
      "/api/3/action/package_show?id=" + encodeURIComponent(id)
    );
  }
}
