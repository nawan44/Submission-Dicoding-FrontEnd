import axios from 'axios';
import { config } from '../Config/config';

const CategoryService = {
    getAll: () => {
        const result = axios.get(config.apiUrl + '/allDataCategory')
            .then(respons => {
                return {
                    success: respons.data.success,
                    result: respons.data.result
                }
            })
            .catch(error => {
                return {
                    success: false,
                    result: error
                }
            });
        return result;
    },

    getById: (id) => {
        const result = axios.get(config.apiUrl + '/DataCategoryById/' + id)
            .then(respons => {
                return {
                    success: respons.data.success,
                    result: respons.data.result
                }
            })
            .catch(error => {
                return {
                    success: false,
                    result: error
                }
            });
        return result;
    },

    Create: (item) => {
        const result = axios.post(config.apiUrl + '/CreateDataCategory', item)
            .then(respons => {
                return {
                    success: respons.data.success,
                    result: respons.data.result
                }
            })
            .catch(error => {
                return {
                    success: false,
                    result: error
                }
            });
        return result;
    },
    Update: (item) => {
        const result = axios.put(config.apiUrl + '/UpdateDataCategory/' + item.id, item)
            .then(respons => {
                return {
                    success: respons.data.success,
                    result: respons.data.result
                }
            })
            .catch(error => {
                return {
                    success: false,
                    result: error
                }
            });
        return result;
    },

    Delete: (item) => {
        const result = axios.put(config.apiUrl + '/DeleteDataCategory/' + item.id, item)
            .then(respons => {
                return {
                    success: respons.data.success,
                    result: respons.data.result
                }
            })
            .catch(error => {
                return {
                    success: false,
                    result: error
                }
            });
        return result;
    }


}

export default CategoryService;