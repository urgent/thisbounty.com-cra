import { fetchQuery } from "./Environment"

const operation = {
    text: `query {
        bounty_by_pk(bounty_id:1) {
            bounty_id
        }
    }`
}

const result = {
    "data": {
        "bounty_by_pk": {
            "bounty_id": 1
        }
    }
};

test('Relay networking working', async (done) => {
    const response = await fetchQuery(operation, {});
    expect(response).toEqual(result)
    done();
})