import PocketBase from "pocketbase";
import ls from "localstorage-slim";
import * as env from "../env.json";

let login = <boolean>false;
let services = <Array<object> | boolean>false;
let gallery = <Array<object> | boolean>false;
let slide = <Array<object> | boolean>false;
const pb = <PocketBase>new PocketBase(env.api.address);
pb.autoCancellation(false);

const myHeaders = new Headers();
myHeaders.append(env.api.header, env.api.key);
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

const doLogin = async () => {
  const auth = await pb
    .collection("users")
    .authWithPassword(env.pocketBase.username, env.pocketBase.password);
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
      .getFullList(800 /* batch size */, {
        sort: "-created",
      })
  );
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
  return <Array<object>>records;
};

export const getSlide = async () => {
  await handleLogin();
  if (slide) {
    return <Array<object>>slide;
  }
  const records = <Array<object>>(
    await pb.collection("joanigrave_slide").getFullList(200 /* batch size */, {
      sort: "-created",
    })
  );
  slide = <Array<object>>records;
  return <Array<object>>records;
};

export const sendEmail = async (
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<number> => {

  const urlencoded = new URLSearchParams();
  urlencoded.append("name", name);
  urlencoded.append("email", email);
  urlencoded.append("subject", subject);
  urlencoded.append("message", message);


request({
    url: "http://api.davdsm.pt/sendMail",
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      "davdsmKey": 'd41d8cd98f00b204e9800998ecf8427e'  // <--Very important!!!
    },
    body: JSON.stringify({
      sender: "website@joanigrave.pt",
      receiver: {
        email: "geral@davdsm.pt",
        name: "David"
      },
      subject: `✈️ ($ Nova Mensagem em JoaniGrave )`,
      message: 'isto é um teste'
})
  }, function (error, response, body) {
    console.log("✈️ Email Enviado? - ", response.body);
    console.log("---------------------------------------------------");
    console.log("");
  }).then((response) => response.text()).then(() => 200).catch(() => 403);
};
