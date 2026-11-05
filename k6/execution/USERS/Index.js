import { sleep } from "k6";
import { SharedArray } from "k6/data";
import { carimboHora } from "./common/utils.js";
import { obterUsuarios, obterUsuario } from "./resources/jsonPlaceholder.js";
import { cloudConfig } from "./userVariables.js";

const K6_RAMP_UP_DURATION = __ENV.RAMP_UP_DURATION || "30s";
const K6_CONSTANT_DURATION = __ENV.CONSTANT_DURATION || "2m";
const K6_MAX_VUS = Number(__ENV.MAX_VUS || 5);

export const options = {
    scenarios: {
        jsonPlaceholderScenario: {
            executor: "ramping-vus",
            startVUs: 1,
            stages: [
                { duration: K6_RAMP_UP_DURATION, target: K6_MAX_VUS },
                { duration: K6_CONSTANT_DURATION, target: K6_MAX_VUS },
            ],
        },
    },
    cloud: cloudConfig,
};

const recursos = new SharedArray("recursos", function () {
    return open("./data/recursos.csv")
        .trim()
        .split(/\r?\n/)
        .slice(1)
        .map((resourceCode) => ({ resource_code: resourceCode.trim() }))
        .filter((item) => item.resource_code);
});

function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}

export function setup() {
    const timeStart = carimboHora();
    console.info(`START: [ ${timeStart} ]`);
    return { timeStart };
}

export default function () {
    const recurso = randomItem(recursos);
    obterUsuarios(recurso.resource_code);
    obterUsuario(recurso.resource_code);
    sleep(1);
}

export function teardown(data) {
    const timeEnd = carimboHora();
    console.info("===========================================");
    console.info(`START: [ ${data.timeStart} ]`);
    console.info(`  END: [ ${timeEnd} ]`);
}
