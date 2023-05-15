import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getAllItems = () => api.get("/items");
export const getItem = (id: number) => api.get(`/items/${id}`);
export const createItem = (data: any) => api.post("/items", data);
export const updateItem = (id: number, data: any) => api.put(`/items/${id}`, data);
export const deleteItem = (id: number) => api.delete(`/items/${id}`);

export default {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
