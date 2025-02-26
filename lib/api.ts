import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export const fetchProjects = async () => {
  const response = await api.get("/projects");
  return response.data;
};

export const createProject = async (projectData) => {
  const formData = new FormData();
  Object.keys(projectData).forEach((key) => {
    if (key === "images") {
      projectData[key].forEach((file) => {
        formData.append("images", file);
      });
    } else {
      formData.append(key, projectData[key]);
    }
  });

  const response = await api.post("/projects", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const updateProject = async (id, projectData) => {
  const formData = new FormData();
  Object.keys(projectData).forEach((key) => {
    if (key === "images") {
      projectData[key].forEach((file) => {
        formData.append("images", file);
      });
    } else {
      formData.append(key, projectData[key]);
    }
  });

  const response = await api.put(`/projects/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const deleteProject = async (id) => {
  const response = await api.delete(`/projects/${id}`);
  return response.data;
};
