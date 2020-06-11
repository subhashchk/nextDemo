import React from "react";
import { mount, shallow } from "enzyme";
import CreateUser from "./../createUser";

describe("HI Home", () => {
  let wrapper;
  beforeEach(() => {
    const handleAdd = jest.fn();
    wrapper = mount(<CreateUser addUser={handleAdd} />);
  });
  test("successfull render of component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("successfull call setName function", () => {
    const setName = jest.fn();
    wrapper.find("#fname").simulate("change", { target: { value: "ssss" } });
    expect(setName.mock).not.toBeNull();
  });

  test("successfull call setEmail", () => {
    const setEmail = jest.fn();
    wrapper.find("#email").simulate("change", { target: { value: "ssss" } });
    expect(setEmail.mock).not.toBeNull();
  });

  test("successfull call setMobile", () => {
    const setMobile = jest.fn();
    wrapper.find("#mobile").simulate("change", { target: { value: "ssss" } });
    expect(setMobile.mock).not.toBeNull();
  });

  test("successfull call handleSubmit function", () => {
    const handleSubmit = jest.fn();
    wrapper.find("#submit").simulate("submit", { target: { value: "ssss" } });
    expect(handleSubmit.mock).not.toBeNull();
  });
});
