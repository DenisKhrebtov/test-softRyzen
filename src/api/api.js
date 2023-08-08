import axios from 'axios';

import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://64cd0b4abb31a268409a4d3e.mockapi.io';

export async function fetchEvents() {
  try {
    const response = await axios.get('/events');
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error('Something went wrong!');
  }
}

export async function postEvent(newEvent) {
  try {
    const response = await axios.post('/events', newEvent);
    toast.success('The event was added successfully!');
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error('Something went wrong!');
  }
}

export async function getEventById(eventId) {
  try {
    const response = await axios.get(`/events/${eventId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error('Something went wrong!');
  }
}

export async function deleteEvent(eventId) {
  try {
    const response = await axios.delete(`/events/${eventId}`);
    toast.info('The event was successfully deleted!');
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error('Something went wrong!');
  }
}

export async function editEvent(eventId, updatedEvent) {
  try {
    const response = await axios.put(`/events/${eventId}`, updatedEvent);
    toast.info('The event was successfully edited!');
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error('Something went wrong!');
  }
}
