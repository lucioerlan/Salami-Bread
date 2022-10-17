import api from 'src/factory/api';

const getAllCategories = async () => {
  try {
    const { data } = await api.get('categories/list');

    return data;
  } catch (error) {
    return error;
  }
};


const storeCategories = async (name: string) => {
  try {
    const data = await api.post('categories/create', {
      name,
    });

    return data;
  } catch (error) {
    return error;
  }
};

export { getAllCategories, storeCategories };
