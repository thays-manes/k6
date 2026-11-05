import { group } from "k6";
import http from "k6/http";
import { verificarStatus } from "../common/utils.js";
import { BASE_URL } from "../userVariables.js";

export function obterPosts(resourceCode) {
    group("[GET] - /posts - Lista de posts", () => {
        const url = "/posts";
        const params = {
            tags: { name: "[GET] - /posts", resource_code: resourceCode },
        };

        const res = http.get(`${BASE_URL}${url}`, params);

        verificarStatus(res, url);
    });
}

export function obterPost(resourceCode) {
    group("[GET] - /posts/1 - Detalhe de um post", () => {
        const url = "/posts/1";
        const params = {
            tags: { name: "[GET] - /posts/1", resource_code: resourceCode },
        };

        const res = http.get(`${BASE_URL}${url}`, params);

        verificarStatus(res, url);
    });
}
