import { includes } from "..";
import { info } from "./mockData";

const expectedResponse = {
  include: {
    account: {
      include: {
        locations: {
          include: {
            parking: true,
          },
        },
      },
    },
  },
};
test("Test includes", () => {
  expect(includes(info)).toEqual(expectedResponse);
});
