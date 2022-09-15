import { GetAllCategoriesService } from '@modules/services/CategoriesService/GetAllCategories.service';

const getAllCategoriesService = new GetAllCategoriesService();

const GetAllCategoriesFacades = () =>
    getAllCategoriesService.execute();

export { GetAllCategoriesFacades };
