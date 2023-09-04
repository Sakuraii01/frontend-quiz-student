import { FieldErrors } from "react-hook-form";
import { type donater } from "./types";
import { faker } from "@faker-js/faker";

export function getErrMsg(errors: FieldErrors<donater>) {
  const err: {
    [key: string]: string;
  } = {
    firstName: errors.firstName?.message || "",
    lastName: errors.lastName?.message || "",
    email: errors.email?.message || "",
    amount: errors.amount?.message || "",
  };

  Object.keys(err).forEach((key) => {
    if (err[key] === "") {
      delete err[key];
    }
  });

  return err;
}

export function getInitData(blank = false): donater {
  if (blank) {
    return {
      firstName: "",
      lastName: "",
      email: "",
      amount: "",
    };
  }

  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    amount: faker.finance.amount(),
  };
}
