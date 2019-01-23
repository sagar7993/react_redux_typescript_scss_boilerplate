export class Product {
    id: string;
    createdAt: string;
    name: string;
    cost: string;
}

export class Transaction {
    id: string;
    createdAt: string;
    product: string;
    value: string;
    quantity: string;
    vendor: string;
    channel: string;
}

export const updateObjectImmutably = (oldObject, newValuesObject) => {
    return {
        ...oldObject,
        ...newValuesObject
    };
};

export const SetInnerHtml = (htmlString: string) => {
    return {
        __html: htmlString
    };
};

export interface MyWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    M: any;
}

interface SessionStorage extends Storage {
    get: (key: string, parseJson: boolean) => any;
    save: (key: string, data: any) => void;
    deleteItem: (key: string) => void;
    deleteAll: () => void;
}

class SessionStorage implements SessionStorage {
    get = (key: string, parseJson: boolean): any => {
        let data: any = sessionStorage.getItem(key) || null;
        if (data && parseJson) {
            data = JSON.parse(data);
        }
        return data;
    }
    save = (key: string, data: any) => {
        sessionStorage.setItem(key, JSON.stringify(data));
    }
    deleteItem = (key: string) => {
        sessionStorage.removeItem(key);
    }
    deleteAll = () => {
        sessionStorage.clear();
    }
}

export const MySessionStorage: SessionStorage = new SessionStorage();

interface LocalStorage extends Storage {
    get: (key: string, parseJson: boolean) => any;
    save: (key: string, data: any) => void;
    deleteItem: (key: string) => void;
    deleteAll: () => void;
}

class LocalStorage implements LocalStorage {
    get = (key: string, parseJson: boolean): any => {
        let data: any = localStorage.getItem(key) || null;
        if (data && parseJson) {
            data = JSON.parse(data);
        }
        return data;
    }
    save = (key: string, data: any) => {
        localStorage.setItem(key, JSON.stringify(data));
    }
    deleteItem = (key: string) => {
        localStorage.removeItem(key);
    }
    deleteAll = () => {
        localStorage.clear();
    }

}

export const MyLocalStorage: LocalStorage = new LocalStorage();

export class MyHttpHeadersOptions {
    method: string;
    baseURL: string | undefined;
    url: string;
    headers?: any;
    data?: any;
    constructor(method: string, baseUrl: string | undefined, url: string) {
        this.method = method;
        this.baseURL = baseUrl;
        this.url = url;
    }
}