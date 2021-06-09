import axios from 'axios';

const BaseUrl = "https://localhost:44311/api";

class MyApi  {
    static getAllRobots() {
        return axios.get(BaseUrl+ "/robots");
    }

    static createRobot(robot) {
        return axios.post(BaseUrl+ "/robots", robot );
    }

    static updateRobot(robot) {
        return axios.put(BaseUrl + "/robots/" + robot.robotID, robot);
    }

    static deleteRobot(robotID) {
        return axios.delete(BaseUrl + "/robots/" + robotID);
    }

    static getAllManufacturers() {
        return axios.get(BaseUrl+ "/manufacturers");
    }

    static createManufacturer(manufacturer) {
        return axios.post(BaseUrl+ "/manufacturers", manufacturer );
    }

    static updateManufacturer(manufacturer) {
        return axios.put(BaseUrl + "/manufacturers/" + manufacturer.manufacturerID, manufacturer);
    }

    static deleteManufacturer(manufacturerID) {
        return axios.delete(BaseUrl + "/manufacturers/" + manufacturerID);
    }

    static getAllCategories() {
        return axios.get(BaseUrl+ "/categories");
    }

    static createCategory(category) {
        return axios.post(BaseUrl+ "/categories", category );
    }

    static updateCategory(category) {
        return axios.put(BaseUrl + "/categories/" + category.categoryID, category);
    }

    static deleteCategory(categoryID) {
        return axios.delete(BaseUrl + "/categories/" + categoryID);
    }
}

export default MyApi;

