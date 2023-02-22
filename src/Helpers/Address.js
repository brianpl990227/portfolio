import Provinces from "./Provinces.json";

export const GetProvinces = () => {

    const result = []

    Provinces.Provincias.forEach(element => {
        result.push(element.nombre)
    });

    return result;

}