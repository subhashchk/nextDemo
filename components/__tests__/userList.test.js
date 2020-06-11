import React from "react";
import { mount, shallow } from "enzyme";
import UserList from "./../userList";
import { UserContext } from "../../context/userContext";

describe("HI Home", () => {
  let wrapper;
  beforeEach(() => {
    const props = { deleteUser: jest.fn() };
    const users = [
      { name: "subhash", email: "test111111@gmail.com", mobile: "9098999088" },
      { name: "chandra", email: "testing@gmail.com", mobile: "9090909012" },
      {
        name: "kushwaha",
        email: "test22222222@gmail.com",
        mobile: "9098992222",
      },
    ];
    wrapper = mount(
      <UserContext.Provider value={users}>
        <UserList {...props} />
      </UserContext.Provider>
    );
  });
  test("successfull render of component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("handleDelete", () => {
    const deleteUser = jest.fn();
    wrapper.find("#user_0").simulate("click", 0);
    expect(deleteUser.mock).not.toBeNull();
  });
});
