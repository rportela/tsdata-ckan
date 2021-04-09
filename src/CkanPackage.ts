export default class CkanPackage {
  constructor(props: any) {
    for (let key in props) {
      this[key] = props[key];
    }
  }
  author: string;
  author_email: string;
  creator_user_id: string;
  id: string;
  isopen: boolean;
  license_id: string;
  license_title: string;
  license_url: string;
  maintainer: string;
  maintainer_email: string;
  metadata_created: string;
  metadata_modified: string;
  name: string;
  notes: string;
  num_resources: number;
  num_tags: number;
  owner_org: string;
  state: string;
  title: string;
  type: string;
  url: string;
  version: string;
  extras: any[];
  groups: any[];
  relationships_as_subject: any[];
  relationships_as_object: any[];
}
