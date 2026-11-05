import { group } from "k6";
import http from "k6/http";
import { verificarStatus } from "../common/utils.js";
import { BASE_URL } from "../userVariables.js";

export function obterTarefas(resourceCode) {
    group("[GET] - /todos - Lista de tarefas", () => {
        const url = "/todos";
        const params = {
            tags: { name: "[GET] - /todos", resource_code: resourceCode },
        };

        const res = http.get(`${BASE_URL}${url}`, params);

        verificarStatus(res, url);
    });
}

export function obterTarefa(resourceCode) {
    group("[GET] - /todos/1 - Detalhe de uma tarefa", () => {
        const url = "/todos/1";
        const params = {
            tags: { name: "[GET] - /todos/1", resource_code: resourceCode },
        };

        const res = http.get(`${BASE_URL}${url}`, params);

        verificarStatus(res, url);
    });
}
