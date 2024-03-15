import axios from "axios";

export const requestImages = async () => {
  const { data } = await axios.get("https://api.unsplash.com/photos/?client_id=7crFlbGnrYkrIQtSUNvr_sdieq-SwJj44IEorVMeixg");
  return data;
};

export const requestImagesByBar = async (query) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=7crFlbGnrYkrIQtSUNvr_sdieq-SwJj44IEorVMeixg`
  );
  return data;
};