import { saveProfileSaga } from "./profileSaga";
import { handleProfileSubmit } from "../actions";
import { recordSaga } from "./recordSaga";

jest.mock("../api", () => ({
  serverProfile: jest.fn(() => ({
    cardNumber: "cardNumber",
    expiryDate: "expiryDate",
    cardName: "cardName",
    cvc: "cvc",
  })),
}));

describe("profileSaga", () => {
  describe("#HANDLE_PROFILE_SUBMIT", () => {
    it("loads profile through api", async () => {
      const dispatched = await recordSaga(
        saveProfileSaga,
        handleProfileSubmit("someToken")
      );
      expect(dispatched).toEqual([
        {
            type: "HANDLE_PROFILE_SUBMIT",
            payload: {
              number: "cardNumber",
              date: "expiryDate",
              name: "cardName",
              cvc: 'cvc',
              token: undefined,
            }
          },
      ]);
    });
  });
});