/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppQueryVariables = {};
export type AppQueryResponse = {
    readonly bounty: ReadonlyArray<{
        readonly bounty_id: number;
        readonly title: string;
        readonly image: string;
        readonly imageAlt: string;
        readonly life: number;
        readonly lifeMax: number;
        readonly lifeEnhance: unknown;
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
export type AppQuery = {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
};



/*
query AppQuery {
  bounty(order_by: {bounty_id: asc}) {
    bounty_id
    title
    image
    imageAlt
    life
    lifeMax
    lifeEnhance
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
    "args": [
      {
        "kind": "Literal",
        "name": "order_by",
        "value": {
          "bounty_id": "asc"
        }
      }
    ],
    "concreteType": "bounty",
    "kind": "LinkedField",
    "name": "bounty",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "bounty_id",
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
        "name": "lifeEnhance",
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
    "storageKey": "bounty(order_by:{\"bounty_id\":\"asc\"})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b2621875843124fa37833a35cf3fea07",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  bounty(order_by: {bounty_id: asc}) {\n    bounty_id\n    title\n    image\n    imageAlt\n    life\n    lifeMax\n    lifeEnhance\n    money\n    moneyMax\n    users\n    usersMax\n    programmers\n    servers\n    scripts\n    libraries\n    tags\n    tagLinks\n    hurtLog\n  }\n}\n"
  }
};
})();
(node as any).hash = '9087a7ff17e2a6e8827f9918248147e2';
export default node;
