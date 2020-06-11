import React from "react";
import { mount, shallow } from "enzyme";
import Home from "./../index";

describe("Home component", () => {
  test("successfull render of component", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBe(true);
  });

  test("handleDelete", () => {
    const props = {
      iniUsers: [
        {
          name: "subhash",
          email: "test111111@gmail.com",
          mobile: "9098999088",
        },
        { name: "chandra", email: "testing@gmail.com", mobile: "9090909012" },
        {
          name: "kushwaha",
          email: "test22222222@gmail.com",
          mobile: "9098992222",
        },
      ],
    };
    const wrapper = shallow(<Home {...props} />);
    expect(wrapper.find("UserList").props().deleteUser(0)).toBeCalled();
  });

  test("handleAdd", () => {
    const user = {
      name: "subhash",
      email: "test111111@gmail.com",
      mobile: "9098999088",
    };
    const wrapper = shallow(<Home />);
    expect(wrapper.find("CreateUser").props().addUser(user)).toBeCalled();
  });

  xtest("call handleSUBMIT", () => {
    const event = { targer: { value: "subhash" } };
    const handleSubmit = jest.fn();
    const wrapper = mount(<Home />);
    wrapper.find("#submit").simulate("click");
    expect(handleSubmit.mock.calls(event).length).toBe(1);
    // expect(handleSubmit).toBeCalledWith({ targer: { value: "subhash" } });
  });
});

// countercontainer.instance().handleDelete)tobecalled(1)
