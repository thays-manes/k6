import { group } from "k6";
import http from "k6/http";
import { verificarStatus } from "../common/utils.js";
import { BASE_URL } from "../userVariables.js";

export function obterUsuarios(resourceCode) {
    group("[GET] - /users - Lista de usuarios", () => {
        const url = "/users";
        const params = {
            tags: { name: "[GET] - /users", resource_code: resourceCode },
        };

        const res = http.get(`${BASE_URL}${url}`, params);

        verificarStatus(res, url);
    });
}

export function obterUsuario(resourceCode) {
    group("[GET] - /users/1 - Detalhe de um usuario", () => {
        const url = "/users/1";
        const params = {
            tags: { name: "[GET] - /users/1", resource_code: resourceCode },
        };

        const res = http.get(`${BASE_URL}${url}`, params);

        verificarStatus(res, url);
    });
}
