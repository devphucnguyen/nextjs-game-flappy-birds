export enum LOCAL_STORAGE {
    SESSION = "SESSION",
}

class LocalStore {
    static getItem<T>(key: LOCAL_STORAGE) {
        if (typeof window === "undefined") return null;
        const json = localStorage.getItem(key);
        if (!json) return null;
        return JSON.parse(json) as T;
    }

    static setItem<T>(key: LOCAL_STORAGE, data: T) {
        if (typeof window === "undefined") return null;
        localStorage.setItem(key, JSON.stringify(data));
    }

    static removeItem(key: LOCAL_STORAGE) {
        localStorage.removeItem(key);
    }

    static clearStorage() {
        localStorage.clear();
    }
}

export default LocalStore;
