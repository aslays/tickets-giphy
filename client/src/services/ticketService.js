import axios from 'axios';

const API_URL = 'http://localhost:3010/api/tickets';

// Obtener todos los tickets, con filtros opcionales
export const getTickets = (filters = {}) => {
    const queryString = new URLSearchParams(filters).toString();  // Convertimos los filtros en query params
    return axios.get(`${API_URL}?${queryString}`);
};

// Crear un nuevo ticket
export const createTicket = (ticketData) => {
  return axios.post(API_URL, ticketData);
};

// Editar un ticket
export const updateTicket = (id, ticketData) => {
  return axios.put(`${API_URL}/${id}`, ticketData);
};

// Eliminar un ticket
export const deleteTicket = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

// Actualizar el estado de un ticket
export const updateTicketStatus = (id, status) => {
  return axios.patch(`${API_URL}/${id}/status`, status);  // Envía la actualización de estado al backend
};
