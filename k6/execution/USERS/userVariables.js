export const BASE_URL = __ENV.BASE_URL || "https://jsonplaceholder.typicode.com";
export const RESOURCE_CODE = __ENV.RESOURCE_CODE || "users";

export const cloudConfig = {
    distribution: {
        distributionLabel: { loadZone: "amazon:br:sao paulo", percent: 100 },
    },
    dropMetrics: [
        "http_req_blocked",
        "http_req_connecting",
        "http_req_receiving",
        "http_req_sending",
        "http_req_tls_handshaking",
        "http_req_waiting",
    ],
    dropTags: {
        http_req_duration: ["instance_id"],
        http_reqs: ["instance_id"],
        http_req_failed: ["instance_id"],
        checks: ["instance_id"],
    },
};
