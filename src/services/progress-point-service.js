import config from "../config";
import { uuid } from "uuidv4";
import tokenService from "./token-service";

const progressPointService = {
  postProgressPoint(progressPoint) {
    progressPoint.id = uuid();
    return fetch(`${config.API_ENDPOINT}/progress-points`, {
      method: "POST",
      headers: {
        Authorization: `bearer ${tokenService.getAuthToken()}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(progressPoint),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default progressPointService;