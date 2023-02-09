import { Cookies } from "react-cookie";

const cookies = new Cookies();
export const Cookie = {
  set: (name, value, option) => {
    return cookies.set(name, value, { ...option });
  },
  get: (name) => {
    console.log(cookies.get(name));
    return cookies.get(name);
  },
  remove: (name) => {
    cookies.remove(name);
    return window.location.replace("/");
  },
};
