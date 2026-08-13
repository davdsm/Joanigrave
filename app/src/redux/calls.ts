import PocketBase from "pocketbase";
import ls from "localstorage-slim";

const pbUrl = import.meta.env.VITE_PB_URL;
const pbUser = import.meta.env.VITE_PB_USER;
const pbPassword = import.meta.env.VITE_PB_PW;
const apiHeader = import.meta.env.VITE_API_HEADER;
const apiKey = import.meta.env.VITE_API_KEY;

let login = <boolean>false;
let services = <Array<object> | boolean>false;
let gallery = <Array<object> | boolean>false;
let slide = <Array<object> | boolean>false;
const pb = <PocketBase>new PocketBase(pbUrl);
pb.autoCancellation(false);

const myHeaders = new Headers();
myHeaders.append(apiHeader, apiKey);
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

const doLogin = async () => {
  const auth = await pb
    .collection("users")
    .authWithPassword(pbUser, pbPassword);
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
  try {
    const response = await fetch("https://api.davdsm.pt/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        [apiHeader]: apiKey,
      },
      body: JSON.stringify({
        sender: "JoaniGrave",
        receiver: {
          email: "geral@joanigrave.pt",
          name: "JoaniGrave",
        },
        subject: `Nova mensagem de ${name} — ${subject}`,
        message: `${message}\n\nDe: ${name} <${email}>`,
      }),
    });

    return response.ok ? 200 : 403;
  } catch {
    return 403;
  }
};
