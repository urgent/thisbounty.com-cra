/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type BountyQueryVariables = {};
export type BountyQueryResponse = {
    readonly bounty: ReadonlyArray<{
        readonly id: number;
        readonly title: string;
        readonly image: string;
        readonly imageAlt: string;
        readonly life: number;
        readonly lifeMax: number;
        readonly money: number;
        readonly moneyMax: number;
        readonly users: number;
        readonly usersMax: number;
        readonly programmers: number;
        readonly servers: number;
        readonly scripts: number;
        readonly libraries: number;
        readonly tags: unknown;
        readonly tagLinks: unknown;
        readonly hurtLog: unknown;
    }>;
};
export type BountyQuery = {
    readonly response: BountyQueryResponse;
    readonly variables: BountyQueryVariables;
};



/*
query BountyQuery {
  bounty {
    id
    title
    image
    imageAlt
    life
    lifeMax
    money
    moneyMax
    users
    usersMax
    programmers
    servers
    scripts
    libraries
    tags
    tagLinks
    hurtLog
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "bounty",
    "kind": "LinkedField",
    "name": "bounty",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "image",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "imageAlt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "life",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lifeMax",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "money",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "moneyMax",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "users",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "usersMax",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "programmers",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "servers",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "scripts",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "libraries",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "tags",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "tagLinks",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hurtLog",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BountyQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BountyQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "04d1df2b261f34709f7c07a848551aad",
    "id": null,
    "metadata": {},
    "name": "BountyQuery",
    "operationKind": "query",
    "text": "query BountyQuery {\n  bounty {\n    id\n    title\n    image\n    imageAlt\n    life\n    lifeMax\n    money\n    moneyMax\n    users\n    usersMax\n    programmers\n    servers\n    scripts\n    libraries\n    tags\n    tagLinks\n    hurtLog\n  }\n}\n"
  }
};
})();
(node as any).hash = '0f39d9c309adecd16bcd47250b10a285';
export default node;
