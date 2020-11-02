import { includes } from "..";
import { info } from "./data";

const includesResponse = {
  include: {
    account: {
      include:{
        locations: {
            include: {
              parking:true
            }
          }
        }
      }
    }
  }
test("Test includes", () => {
  expect(includes(info)).toEqual(includesResponse);
});
