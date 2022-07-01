# tsdata-ckan

A CKAN API wrapper in typescript for consuming data.


## Basic Usage

Just instantiate a CkanApi class with a proper URL not including anything else.

For example, in their test environment, the url is:

```javascript
const ckan: CkanApi = new CkanApi("https://demo.ckan.org");
```

With that instance at hand, you can simply call: 

```javascript
await ckan.siteRead();
```

and it yields
```javascript
true
```
you can also list the packages by calling:
```javascript
await ckan.listPackages();
```
and it yields
```javascript
["sample-dataset-1", "test_dataset", ...]
```

## Nested Objects

The most used and powerful request is for a package. The response includes everything needed for data ingestion:

```javascript
await ckan.getPackage("sample-dataset-1");
```
and it yields
```json
{
    "author":"Test Author",
    "author_email":"test@email.com",
    "creator_user_id":"47c7f1b1-0ef5-4d7b-b43c-811c51c9e349",
    "id":"c322307a-b871-44fe-a602-32ee8437ff04",
    "isopen":true,
    "license_id":"cc-by",
    "license_title":"Creative Commons Attribution",
    "license_url":"http://www.opendefinition.org/licenses/cc-by",
    "maintainer":"Test Maintainer",
    "maintainer_email":"test@email.com",
    "metadata_created":"2021-04-09T11:39:37.657233",
    "metadata_modified":"2022-05-20T09:20:43.998956",
    "name":"sample-dataset-1",
    "notes":"A CKAN Dataset is a collection of data resources (such as files), together with a description and other information (what is known as metadata), at a fixed URL. \r\n\r\n",
    "num_resources":9,
    "num_tags":8,
    "organization":{
        "id":"1fa89238-ee96-4439-a885-22d15244d070",
        "name":"sample-organization",
        "title":"Sample Organization",
        "type":"organization",
        "description":"This is a sample organization.",
        "image_url":"2022-05-20-084702.929838siurana.jpg",
        "created":"2021-04-09T14:27:17.753798",
        "is_organization":true,
        "approval_status":"approved",
        "state":"active"
    },
    "owner_org":"1fa89238-ee96-4439-a885-22d15244d070",
    "private":false,
    "state":"active",
    "title":"Sample Dataset",
    "type":"dataset",
    "url":"",
    "version":"1.0",
    "groups":[
        {
        "description":"",
        "display_name":"Test Group",
        "id":"5d423f6b-137e-4d15-a156-868763fa7a64",
        "image_display_url":"https://demo.ckan.org/uploads/group/2021-04-21-153504.571229064c7c.png",
        "name":"test-group",
        "title":"Test Group"
        }
    ],
    "resources":[
        {
        "cache_last_updated":null,
        "cache_url":null,
        "created":"2021-04-09T14:31:09.032858",
        "datastore_active":true,
        "description":"This is a sample resource added via url.",
        "format":"CSV",
        "hash":"",
        "id":"e687245d-7835-44b0-8ed3-0827de123895",
        "last_modified":null,
        "metadata_modified":"2021-04-09T14:31:09.021596",
        "mimetype":"text/csv",
        "mimetype_inner":null,
        "name":"sample-linked.csv",
        "package_id":"c322307a-b871-44fe-a602-32ee8437ff04",
        "position":0,
        "resource_type":null,
        "size":null,
        "state":"active",
        "url":"https://raw.githubusercontent.com/datopian/CKAN_Demo_Datasets/main/resources/org1_sample.csv",
        "url_type":null
        },
        {
        "cache_last_updated":null,
        "cache_url":null,
        "created":"2021-04-09T14:31:45.092631",
        "datastore_active":true,
        "description":"Sample csv (uploaded).",
        "format":"CSV",
        "hash":"",
        "id":"b53c9e72-6b59-4cda-8c0c-7d6a51dad12a",
        "last_modified":"2021-04-09T16:13:57.353205",
        "metadata_modified":"2021-04-09T16:13:57.367140",
        "mimetype":"application/csv",
        "mimetype_inner":null,
        "name":"sample.csv",
        "package_id":"c322307a-b871-44fe-a602-32ee8437ff04",
        "position":1,
        "resource_type":null,
        "size":6731,
        "state":"active",
        "url":"https://demo.ckan.org/dataset/c322307a-b871-44fe-a602-32ee8437ff04/resource/b53c9e72-6b59-4cda-8c0c-7d6a51dad12a/download/sample.csv",
        "url_type":"upload"
        },
        {
        "cache_last_updated":null,
        "cache_url":null,
        "created":"2021-04-09T16:21:17.140402",
        "datastore_active":true,
        "description":"Sample views for csv.",
        "format":"CSV",
        "hash":"",
        "id":"9ce6650b-6ff0-4a52-9b10-09cfc29bbd7e",
        "last_modified":"2021-04-09T16:21:17.106693",
        "metadata_modified":"2021-04-13T12:41:06.751746",
        "mimetype":null,
        "mimetype_inner":null,
        "name":"views.csv",
        "package_id":"c322307a-b871-44fe-a602-32ee8437ff04",
        "position":2,
        "resource_type":null,
        "size":32773,
        "state":"active",
        "url":"https://demo.ckan.org/dataset/c322307a-b871-44fe-a602-32ee8437ff04/resource/9ce6650b-6ff0-4a52-9b10-09cfc29bbd7e/download/co2-mm-mlo_csv.csv",
        "url_type":"upload"
        },
        {
        "cache_last_updated":null,
        "cache_url":null,
        "created":"2021-04-09T14:49:24.711541",
        "datastore_active":false,
        "description":"Sample pdf file.",
        "format":"PDF",
        "hash":"",
        "id":"8aa53505-3b7f-4b9c-9b54-cf674eadc3f1",
        "last_modified":"2021-04-09T16:11:46.261373",
        "metadata_modified":"2021-04-13T12:39:41.141419",
        "mimetype":null,
        "mimetype_inner":null,
        "name":"sample.pdf",
        "package_id":"c322307a-b871-44fe-a602-32ee8437ff04",
        "position":3,
        "resource_type":null,
        "size":712352,
        "state":"active",
        "url":"https://demo.ckan.org/dataset/c322307a-b871-44fe-a602-32ee8437ff04/resource/8aa53505-3b7f-4b9c-9b54-cf674eadc3f1/download/sample.pdf",
        "url_type":"upload"
        },
        {
        "cache_last_updated":null,
        "cache_url":null,
        "created":"2021-04-09T16:17:05.189302",
        "datastore_active":false,
        "description":"Sample txt file.",
        "format":"TXT",
        "hash":"",
        "id":"0185907b-2812-437f-9c64-eae24771ef5f",
        "last_modified":"2021-04-09T16:17:05.136426",
        "metadata_modified":"2021-04-13T12:39:24.524530",
        "mimetype":null,
        "mimetype_inner":null,
        "name":"sample.txt",
        "package_id":"c322307a-b871-44fe-a602-32ee8437ff04",
        "position":4,
        "resource_type":null,
        "size":85,
        "state":"active",
        "url":"https://demo.ckan.org/dataset/c322307a-b871-44fe-a602-32ee8437ff04/resource/0185907b-2812-437f-9c64-eae24771ef5f/download/sample.txt",
        "url_type":"upload"
        },
        {
        "cache_last_updated":null,
        "cache_url":null,
        "created":"2021-04-13T12:19:02.178513",
        "datastore_active":false,
        "description":"Sample GeoJSON resource for the list of countries.\r\n\r\nResource taken from https://openlayers.org/  \r\nLicensed under the 2-Clause BSD (https://www.tldrlegal.com/l/freebsd)",
        "format":"GeoJSON",
        "hash":"",
        "id":"ecd4a62d-998b-46e4-8a64-cadac2125c64",
        "last_modified":"2021-04-13T12:19:01.921374",
        "metadata_modified":"2021-04-13T12:29:29.067536",
        "mimetype":null,
        "mimetype_inner":null,
        "name":"sample.geojson",
        "package_id":"c322307a-b871-44fe-a602-32ee8437ff04",
        "position":5,
        "resource_type":null,
        "size":255943,
        "state":"active",
        "url":"https://demo.ckan.org/dataset/c322307a-b871-44fe-a602-32ee8437ff04/resource/ecd4a62d-998b-46e4-8a64-cadac2125c64/download/countries.geojson",
        "url_type":"upload"
        },
        {
        "cache_last_updated":null,
        "cache_url":null,
        "created":"2021-04-13T12:32:17.823512",
        "datastore_active":false,
        "description":"Sample kml file for Earthquakes of magnitude 5 in 2012.\r\n\r\nResource taken from https://openlayers.org/  \r\nLicensed under the 2-Clause BSD (https://www.tldrlegal.com/l/freebsd)\r\n",
        "format":"KML",
        "hash":"",
        "id":"048333ab-9608-42dc-901b-a7dd9fca3dda",
        "last_modified":"2021-04-13T12:32:17.769578",
        "metadata_modified":"2021-04-13T12:40:09.731123",
        "mimetype":null,
        "mimetype_inner":null,
        "name":"sample.kml",
        "package_id":"c322307a-b871-44fe-a602-32ee8437ff04",
        "position":6,
        "resource_type":null,
        "size":474000,
        "state":"active",
        "url":"https://demo.ckan.org/dataset/c322307a-b871-44fe-a602-32ee8437ff04/resource/048333ab-9608-42dc-901b-a7dd9fca3dda/download/2012_earthquakes_mag5.kml",
        "url_type":"upload"
        },
        {
        "cache_last_updated":null,
        "cache_url":null,
        "created":"2022-04-11T18:35:24.435997",
        "datastore_active":false,
        "description":"",
        "format":"JPEG",
        "hash":"",
        "id":"b6c22c1d-e789-490d-b935-989093bbb173",
        "last_modified":"2022-04-11T18:35:24.381740",
        "metadata_modified":"2022-05-20T09:03:31.574365",
        "mimetype":"image/png",
        "mimetype_inner":null,
        "name":"avoid-crowds-when-buying-materials-social-media-post.jpeg",
        "package_id":"c322307a-b871-44fe-a602-32ee8437ff04",
        "position":7,
        "resource_type":null,
        "size":444695,
        "state":"active",
        "url":"https://demo.ckan.org/dataset/c322307a-b871-44fe-a602-32ee8437ff04/resource/b6c22c1d-e789-490d-b935-989093bbb173/download/avoid-crowds-when-buying-materials-social-media-post.jpeg",
        "url_type":"upload"
        },
        {
        "cache_last_updated":null,
        "cache_url":null,
        "created":"2022-05-20T09:03:31.617635",
        "datastore_active":false,
        "description":"",
        "format":"WMS",
        "hash":"",
        "id":"664e5e2c-bd7d-4972-a245-a747f7d61cc9",
        "last_modified":null,
        "metadata_modified":"2022-05-20T09:03:42.450846",
        "mimetype":null,
        "mimetype_inner":null,
        "name":"Sample WMS",
        "package_id":"c322307a-b871-44fe-a602-32ee8437ff04",
        "position":8,
        "resource_type":null,
        "size":null,
        "state":"active",
        "url":"https://geoserveis.icgc.cat/icc_mapesbase/wms/service?",
        "url_type":null
        }
    ],
    "tags":[
        {
        "display_name":"csv",
        "id":"b5e651dd-8f42-445c-b9c4-2f09a3268427",
        "name":"csv",
        "state":"active",
        "vocabulary_id":null
        },
        {
        "display_name":"economy",
        "id":"0c4f9ad5-a372-4bda-a59b-e560cf264b0f",
        "name":"economy",
        "state":"active",
        "vocabulary_id":null
        },
        {
        "display_name":"geojson",
        "id":"a91d1c52-bd37-40fc-a1f2-6610ac7f39f3",
        "name":"geojson",
        "state":"active",
        "vocabulary_id":null
        },
        {
        "display_name":"kml",
        "id":"f29e8c38-be23-430b-bae0-7898f59d0089",
        "name":"kml",
        "state":"active",
        "vocabulary_id":null
        },
        {
        "display_name":"pdf",
        "id":"a4ba9601-bfa5-4322-8a62-38a83f2348c1",
        "name":"pdf",
        "state":"active",
        "vocabulary_id":null
        },
        {
        "display_name":"sample",
        "id":"1e6aa0c9-0dfc-448a-8c13-b5fd8ab2fefd",
        "name":"sample",
        "state":"active",
        "vocabulary_id":null
        },
        {
        "display_name":"txt",
        "id":"19e5f926-d769-49cf-a82c-80870baa3528",
        "name":"txt",
        "state":"active",
        "vocabulary_id":null
        },
        {
        "display_name":"wms",
        "id":"1279dad1-9397-48e1-94b8-0999bac75aee",
        "name":"wms",
        "state":"active",
        "vocabulary_id":null
        }
    ],
    "extras":[
        
    ],
    "relationships_as_subject":[
        
    ],
    "relationships_as_object":[
        
    ]
}

```



