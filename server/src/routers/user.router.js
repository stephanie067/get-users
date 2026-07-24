import { getAllUsers } from "../controllers/user.controller.js";

export default function routerUsers(request, response){
    if (request.method === 'GET') return getAllUsers(response);
}