import { createAction } from "redux-actions";
import api from "../services/api";

export const handleApiError = createAction('handleApiError');

export const getCountriesSuccess = createAction('getCountriesSuccess');
export const getCountries = () => async (dispatch) => {
    try {
        const response = await api.countries.getAll();
        dispatch(getCountriesSuccess(response.data));
    } catch (error) {
        dispatch(handleApiError(error));
    }
};
