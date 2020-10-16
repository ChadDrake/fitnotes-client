import config from '../config';
import { v4 as uuid } from 'uuid';
import tokenService from './token-service';

const progressPointService = {
  postProgressPoint(progressPoint) {
    progressPoint.id = uuid();
    console.log(progressPoint);
    return fetch(`${config.API_ENDPOINT}/progress-points`, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${tokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(progressPoint),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getProgressPoints(metricId) {
    return fetch(`${config.API_ENDPOINT}/progress-points/${metricId}`, {
      method: 'GET',
      headers: {
        Authorization: `bearer ${tokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default progressPointService;
