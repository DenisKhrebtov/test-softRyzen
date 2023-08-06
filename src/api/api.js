import axios from 'axios';

axios.defaults.baseURL = 'https://64cd0b4abb31a268409a4d3e.mockapi.io';

export async function fetchEvents() {
  try {
    const response = await axios.get('/events');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function postEvent() {
  try {
    const response = await axios.post('/events');

    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getEventById(eventId) {
  try {
    const response = await axios.get(`/events/${eventId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteEvent(eventId) {
  try {
    const response = await axios.delete(`/events/${eventId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
