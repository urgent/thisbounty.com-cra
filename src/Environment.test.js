import { fetchQuery } from "./Environment"

const operation = {
    text: `query {
        bounty_by_pk(id:1) {
            id
        }
    }`
}

const result = {
    "data": {
        "bounty_by_pk": {
            "id": 1
        }
    }
};

test('Relay networking working', async (done) => {
    const response = await fetchQuery(operation, {});
    expect(response).toEqual(result)
    done();
})