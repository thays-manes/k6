import { check, sleep } from "k6";

function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function chance(percent, callback) {
    const params = __ENV.VALIDACAO === "true" ? 100 : percent;
    const sorteio = Math.floor(Math.random() * 10000) / 100;

    return sorteio <= params ? callback() : null;
}

export function verificarStatus(res, endpoint) {
    const status = res.status.toString().startsWith("2") ? "2xx" : "NOK";

    if (status === "NOK") {
        console.error(`Status=[${res.status}] - ${endpoint} - ${res.body}`);
    }

    check(status, {
        [endpoint]: (currentStatus) => currentStatus === "2xx",
    });

    sleep(randomIntBetween(1, 2));
}

export function carimboHora() {
    return new Date().toISOString();
}
