import { API } from './API';
import ROUTES from './routes';

class User {
    /** @type {User} */
    static #currentUser: User | null = null;
    static get CurrentUser() {
        return User.#currentUser || User.FromLocalStorage();
    }

    public static FromLocalStorage() {
        const data = localStorage.getItem('user');
        if (!data) return null;
        return new User(JSON.parse(data));
    }

    public static Forget() {
        localStorage.removeItem('user');
        User.#currentUser = null;
        window.location.reload();
    }

    public id: number;
    public furwazId: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public phone: string;
    public address: string;
    public city: string;
    public postalCode: string;
    public country: string;
    public token: string;
    public pseudo: string;

    constructor(data: any) {
        this.id = data.id;
        this.furwazId = data.furwazId;
        this.token = data.token;
        this.pseudo = data.pseudo;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.phone = data.phone;
        this.address = data.address;
        this.city = data.city;
        this.postalCode = data.postalCode;
        this.country = data.country
    }

    public save() {
        localStorage.setItem(
            'user',
            JSON.stringify({
                id: this.id,
                furwazId: this.furwazId,
                token: this.token,
                pseudo: this.pseudo,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                phone: this.phone,
                address: this.address,
                city: this.city,
                postalCode: this.postalCode,
                country: this.country
            })
        );
    }

    public update(data: any) {
        this.id = data.id ?? this.id;
        this.furwazId = data.furwazId ?? this.furwazId;
        this.token = data.token ?? this.token;
        this.pseudo = data.pseudo ?? this.pseudo;
        this.firstName = data.firstName ?? this.firstName;
        this.lastName = data.lastName ?? this.lastName;
        this.email = data.email ?? this.email;
        this.phone = data.phone ?? this.phone;
        this.address = data.address ?? this.address;
        this.city = data.city ?? this.city;
        this.postalCode = data.postalCode ?? this.postalCode;
        this.country = data.country ?? this.country;
        this.save();
    }

    public async fetch() {
        const res = await API.Request(ROUTES.FURWAZ.USER.GET(this.furwazId));
        if (res.error) {
            console.error('User fetch error', res.message);
            return;
        }
        this.update(res.data);
    }
}

export default User;
