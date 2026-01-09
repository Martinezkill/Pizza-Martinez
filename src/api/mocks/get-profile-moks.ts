import { http, HttpResponse } from "msw";
import { GetProfileResponse } from "../get-profile";

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  "/me",
  () => {
    return HttpResponse.json({
      id: "custom-uses-id",
      name: "john doe",
      email: "johndoe@exemple.com",
      phone: "99988-2134",
      role: "manager",
      createdAt: new Date(),
      updatedAt: null,
    });
  },
);
