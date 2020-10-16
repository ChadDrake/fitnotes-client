import config from '../config';
import { v4 as uuid } from 'uuid';
import tokenService from './token-service';

const metricService = {
  postMetric(metric) {
    metric.id = uuid();
    return fetch(`${config.API_ENDPOINT}/metrics`, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${tokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(metric),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getUserMetrics() {
    return fetch(`${config.API_ENDPOINT}/metrics`, {
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

export default metricService;
