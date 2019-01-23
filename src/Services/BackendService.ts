import { MyHttpHeadersOptions } from '../Contracts';

const baseApiUrl: string | undefined = process.env.REACT_APP_BASE_APP_URL;

const setHeaders = (urlEncodedForm: boolean) => {
    const additionalHeaders = {};
    if (urlEncodedForm) {
        additionalHeaders['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8';
    } else {
        additionalHeaders['Content-Type'] = 'application/json';
        additionalHeaders['Accept'] = 'application/json';
    }
    additionalHeaders['Cache-Control'] = 'no-cache';
    additionalHeaders['Pragma'] = 'no-cache';
    return additionalHeaders;
};

export const getDataOptions = (url: string, data: any = null, urlEncoded = false): MyHttpHeadersOptions => {
    const options: MyHttpHeadersOptions = new MyHttpHeadersOptions('get', baseApiUrl, url);
    if (data) {
        options.data = data;
    }
    options.headers = setHeaders(urlEncoded);
    return options;
};

export const postDataOptions = (url: string, data: any = null, urlEncoded = false): MyHttpHeadersOptions => {
    const options: MyHttpHeadersOptions = new MyHttpHeadersOptions('post', baseApiUrl, url);
    if (data) {
        options.data = data;
    }
    options.headers = setHeaders(urlEncoded);
    return options;
};

export const removeEscapeSlashes = (stringWithEscapedCharacters: string): string => {
    return stringWithEscapedCharacters.replace(/\\"/g, '').replace(/"/g, '');
};