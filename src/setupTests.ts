const localStorageMock = new class {
    store = {};
    setItem = (key, val) => (this.store[key] = val);
    getItem = key => this.store[key];
    removeItem = key => { delete this.store[key]; };
    clear = () => (this.store = {});
}();
global['localStorage'] = localStorageMock;

const sessionStorageMock = new class {
    store = {};
    setItem = (key, val) => (this.store[key] = val);
    getItem = key => this.store[key];
    removeItem = key => { delete this.store[key]; };
    clear = () => (this.store = {});
}();
global['sessionStorage'] = sessionStorageMock;

const windowLocationMock = new class {
    protocol = 'http:';
    hostname = 'localhost';
    port = '3000';
    assign = (url: string) => jest.fn();
}();
global['location'] = windowLocationMock;

export const updatePropsImmutably = (wrapper, newProps) => {
    wrapper.setProps({
        ...wrapper.props(),
        ...newProps
    });
    return wrapper;
};