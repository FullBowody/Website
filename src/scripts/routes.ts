import { METHOD, Route } from "./API";

export default {
    ADDONS: {
        GET: () => new Route(`https://store.apis.furwaz.fr/store/products?app=6`, METHOD.GET),
    },
    FURWAZ: {
        USER: {
            GET: (id: number) => new Route(`https://main.apis.furwaz.fr/users/${id}`, METHOD.GET)
        },
        APP: {
            GET: (id: number) => new Route(`https://main.apis.furwaz.fr/apps/${id}`, METHOD.GET)
        }
    },
};
