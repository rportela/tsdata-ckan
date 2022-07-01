export interface ICkanGroup {
  approval_status?: string; //Example:	"approved"
  created?: string; //Example:	"2021-04-19T07:46:38.079447"
  description?: string; //Example:	""
  display_name?: string; //Example:	"Test Group"
  id?: string; //Example:	"5d423f6b-137e-4d15-a156-868763fa7a64"
  image_display_url?: string; //Example:	"https://demo.ckan.org/uploads/group/2021-04-21-153504.571229064c7c.png"
  image_url?: string; //Example:	"2021-04-21-153504.571229064c7c.png"
  is_organization?: boolean; //Example:	false
  name?: string; //Example:	"test-group"
  num_followers?: number; //Example:	0
  package_count?: number; //Example:	1
  state?: string; //Example:	"active"
  title?: string; //Example:	"Test Group"
  type: string; //Example:	"group"
}

export interface ICkanOrganization {
  id: string;
  name: string;
  title: string;
  type: string;
  description: string;
  image_url: string;
  created: string;
  is_organization: boolean;
  approval_status: string;
  state: string;
}

export interface ICkanTag {
  display_name: string;
  id: string;
  name: string;
  state: string;
  vocabulary_id: string;
}

export interface ICkanResource {
  cache_last_updated: string;
  cache_url: string;
  created: string;
  datastore_active: boolean;
  description: string;
  format: string;
  hash: string;
  id: string;
  last_modified: string;
  metadata_modified: string;
  mimetype: string;
  mimetype_inner: string;
  name: string;
  package_id: string;
  position: number;
  resource_type: string;
  size: number;
  state: string;
  url: string;
  url_type: string;
}

export interface ICkanPackage {
  author: string;
  author_email: string;
  creator_user_id: string;
  id: string;
  isopen: boolean;
  license_id?: string;
  license_title?: string;
  license_url?: string;
  maintainer?: string;
  maintainer_email?: string;
  metadata_created: string;
  metadata_modified?: string;
  name: string;
  notes?: string;
  num_resources?: number;
  num_tags?: number;
  organization?: ICkanOrganization;
  owner_org?: string;
  private?: boolean;
  state?: string;
  title: string;
  type?: string;
  url?: string;
  version?: string;
  groups?: ICkanGroup[];
  resources?: ICkanResource[];
  tags?: ICkanTag[];
  extras?: any[];
  relationships_as_subject?: any[];
  relationships_as_object?: any[];
}
