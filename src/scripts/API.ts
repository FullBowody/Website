export enum METHOD {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

export enum TYPE {
    TEXT = 'text/plain',
    JSON = 'application/json',
    FORM = 'application/x-www-form-urlencoded',
    FILE = 'multipart/form-data',
    ERROR = 'error'
}

export enum STATUS {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYEMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    NOT_ACCEPTABLE = 406,
    CONFLICT = 409,
    EXPECTATION_FAILED = 417,
    TEAPOT = 418,
    ENHANCE_YOUR_CALM = 420,
    TOO_MANY_REQUESTS = 429,
    TOKEN_EXPIRED = 498,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501
}

export class Route {
    private static SanatizePath(path: string) {
        if (path.startsWith('/'))
            path = path.substring(1);
        if (path.endsWith('/'))
            path = path.substring(0, path.length - 1);
        return path;
    }

    public path: string;
    public method: METHOD = METHOD.GET;
    public query: object|undefined;
    public body: any;
    public type: TYPE;

    constructor(path: string, method: METHOD = METHOD.GET, query: object|undefined = undefined, body: any = undefined, type: TYPE = TYPE.JSON) {
        this.path = Route.SanatizePath(path);
        this.query = query;
        this.method = method;
        this.body = body;
        this.type = type;
    }

    buildPath(): string {
        let url = this.path;
        if (this.query !== undefined && Object.keys(this.query).length > 0) {
            url += '?';
            for (const key in this.query) {
                url += `${key}=${(this.query as any)[key]}&`;
            }
            url = url.substring(0, url.length - 1);
        }
        return url;
    }

    buildBody(): any {
        return this.body
            ? (typeof(this.body) === 'object' ? JSON.stringify(this.body) : this.body)
            : undefined;
    }
}
export type RouteBuilder = ((...args: any[]) => Promise<Route>)|((...args: any[]) => Route);

export class Response {
    public static async FromFetchResponse(res: any): Promise<Response> {
        const text = await res.text();
        let json = undefined;
        try { json = JSON.parse(text) }
        catch (err) { ; }

        if (!res.ok) {
            return new Response(
                res.status,
                json?.error ?? res.statusText,
                undefined,
                TYPE.ERROR,
                json?.field
            );
        }

        return new Response(
            res.status,
            json?.message ?? res.statusText,
            json?.data,
            json !== undefined ? TYPE.JSON : TYPE.TEXT
        );
    }

    public status: number;
    public message: any;
    public data: any;
    public type: TYPE;
    public field: any;

    constructor(status: number, message: string, data: any = undefined, type: TYPE = TYPE.JSON, field: any = undefined) {
        this.status = status;
        this.data = data;
        this.type = type;
        this.field = field;
        this.message = message;
    }

    get error(): boolean {
        return this.type === TYPE.ERROR;
    }
}

export class API {
    private static host: string = window.location.hostname === 'localhost' ? 'localhost:8080' : 'fullbowody.apis.furwaz.fr';
    private static protocol: string = window.location.protocol === 'http:' ? 'http' : 'https';

    public static CheckSetup() {
        if (!API.host)
            throw new Error('API::CheckSetup : Host not set');
        if (!API.protocol)
            throw new Error('API::CheckSetup : Protocol not set');
    }

    public static async Request(route: Route|RouteBuilder, headers: object|undefined = undefined): Promise<Response> {
        await API.CheckSetup();
        
        if (typeof(route) === 'function') {
            route = await route();
        }

        const path = route.buildPath();
        const body = route.buildBody();

        const res = await fetch(
            `${API.protocol}://${API.host}/${path}`,
            {
                method: route.method,
                body: body,
                headers: {
                    'Content-Type': route.type,
                    ...headers
                }
            }
        );
        return await Response.FromFetchResponse(res);
    }
}
