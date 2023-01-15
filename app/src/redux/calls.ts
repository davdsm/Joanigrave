import PocketBase from "pocketbase";
import ls from "localstorage-slim";

let login = <boolean>false;
let services = <Array<object> | boolean>false;
let gallery = <Array<object> | boolean>false;
let slide = <Array<object> | boolean>false;
const pb = <PocketBase>new PocketBase("http://0.0.0.0:8090");

const doLogin = async () => {
  const auth = await pb
    .collection("users")
    .authWithPassword("joanigrave", "PcoetbaS#2k23_#!");
  ls.set("joanigrave-token", auth.record.email, { encrypt: true });
  return true;
};

const checkLogin = async (token: string) => {
  await pb.collection("users").requestVerification(token);
};

const handleLogin = async () => {
  if (login) {
    return true;
  } else {
    const token = <string>ls.get("joanigrave-token", { decrypt: true });
    if (token) {
      await checkLogin(token);
    } else {
      await doLogin();
    }
    login = true;
    return true;
  }
};

export const getServices = async () => {
  await handleLogin();
  if (services) {
    return <Array<object>>services;
  }
  const records = <Array<object>>(
    await pb
      .collection("joanigrave_services")
      .getFullList(200 /* batch size */, {
        sort: "-created",
      })
  );
  console.log(records)
  services = <Array<object>>records;
  pb.authStore.clear();
  return <Array<object>>records;
};

export const getGallery = async () => {
  await handleLogin();
  if (gallery) {
    return <Array<object>>gallery;
  }
  const records = <Array<object>>(
    await pb
      .collection("joanigrave_gallery")
      .getFullList(200 /* batch size */, {
        sort: "-created",
      })
  );
  gallery = <Array<object>>records;
  pb.authStore.clear();
  return <Array<object>>records;
};

export const getSlide = async () => {
  await handleLogin();
  if (slide) {
    return <Array<object>>slide;
  }
  const records = <Array<object>>(
    await pb
      .collection("joanigrave_gallery")
      .getFullList(200 /* batch size */, {
        sort: "-created",
      })
  );
  slide = <Array<object>>records;
  pb.authStore.clear();
  return <Array<object>>records;
};
