import { METHOD, Route } from "./API";

export default {
    ADDONS: {
        GET: () => new Route(`https://store.apis.furwaz.com/store/products?app=6`, METHOD.GET),
    },
    FURWAZ: {
        USER: {
            GET: (id: number) => new Route(`https://api.furwaz.com/users/${id}`, METHOD.GET)
        },
        APP: {
            GET: (id: number) => new Route(`https://api.furwaz.com/apps/${id}`, METHOD.GET)
        }
    },
};
