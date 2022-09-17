import api from 'src/app/factory/api';

const getAllProducts = async (page: number) => {
  try {
    const { data } = await api.get(`products/list?page=${page}`);

    return data;
  } catch (error) {
    return error;
  }
};

const getIdProducs = async (id: number) => {
  try {
    const { data } = await api.get(`products/list/${id}`);

    return data;
  } catch (error) {
    return error;
  }
};

const storeProduct = async (name: string, category_id: number) => {
  try {
    const { data: response } = await api.post('v1/products/create', {
      name,
      category_id,
    });

    return response;
  } catch (error) {
    return error;
  }
};

export { getAllProducts, getIdProducs, storeProduct };
