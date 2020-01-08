// tslint:disable
/**
 * Plantacle REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface AccessTokenDto
 */
export interface AccessTokenDto {
    /**
     * Access token that can be used to authenticate against the api
     * @type {string}
     * @memberof AccessTokenDto
     */
    accessToken: string;
    /**
     * The expiry date of the access token
     * @type {string}
     * @memberof AccessTokenDto
     */
    expires: string;
}
/**
 * 
 * @export
 * @interface LoginDto
 */
export interface LoginDto {
    /**
     * email of the user you want to login as
     * @type {string}
     * @memberof LoginDto
     */
    email: string;
    /**
     * Password of the user you want to login as
     * @type {string}
     * @memberof LoginDto
     */
    password: string;
    /**
     * Makes the token have a longer expiry time
     * @type {boolean}
     * @memberof LoginDto
     */
    rememberMe?: boolean;
}
/**
 * 
 * @export
 * @interface MeasurementResult
 */
export interface MeasurementResult {
    /**
     * 
     * @type {number}
     * @memberof MeasurementResult
     */
    temperature: number;
    /**
     * 
     * @type {number}
     * @memberof MeasurementResult
     */
    humidity: number;
    /**
     * 
     * @type {string}
     * @memberof MeasurementResult
     */
    time: string;
}
/**
 * 
 * @export
 * @interface UpdateDeviceDto
 */
export interface UpdateDeviceDto {
    /**
     * 
     * @type {string}
     * @memberof UpdateDeviceDto
     */
    deviceId: string;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    password: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof User
     */
    roles: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    deviceId?: string;
}

/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create an access token
         * @param {LoginDto} loginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(loginDto: LoginDto, options: any = {}): RequestArgs {
            // verify required parameter 'loginDto' is not null or undefined
            if (loginDto === null || loginDto === undefined) {
                throw new RequiredError('loginDto','Required parameter loginDto was null or undefined when calling login.');
            }
            const localVarPath = `/api/auth`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof loginDto !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(loginDto !== undefined ? loginDto : {}) : (loginDto || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create an access token
         * @param {LoginDto} loginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(loginDto: LoginDto, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccessTokenDto> {
            const localVarAxiosArgs = AuthenticationApiAxiosParamCreator(configuration).login(loginDto, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Create an access token
         * @param {LoginDto} loginDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(loginDto: LoginDto, options?: any) {
            return AuthenticationApiFp(configuration).login(loginDto, options)(axios, basePath);
        },
    };
};

/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export class AuthenticationApi extends BaseAPI {
    /**
     * 
     * @summary Create an access token
     * @param {LoginDto} loginDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public login(loginDto: LoginDto, options?: any) {
        return AuthenticationApiFp(this.configuration).login(loginDto, options)(this.axios, this.basePath);
    }

}


/**
 * DeviceApi - axios parameter creator
 * @export
 */
export const DeviceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete associated device from user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDevice(options: any = {}): RequestArgs {
            const localVarPath = `/api/device`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken()
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update device id associated with user
         * @param {UpdateDeviceDto} updateDeviceDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postDevice(updateDeviceDto: UpdateDeviceDto, options: any = {}): RequestArgs {
            // verify required parameter 'updateDeviceDto' is not null or undefined
            if (updateDeviceDto === null || updateDeviceDto === undefined) {
                throw new RequiredError('updateDeviceDto','Required parameter updateDeviceDto was null or undefined when calling postDevice.');
            }
            const localVarPath = `/api/device`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken()
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof updateDeviceDto !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(updateDeviceDto !== undefined ? updateDeviceDto : {}) : (updateDeviceDto || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DeviceApi - functional programming interface
 * @export
 */
export const DeviceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete associated device from user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDevice(options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<User> {
            const localVarAxiosArgs = DeviceApiAxiosParamCreator(configuration).deleteDevice(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update device id associated with user
         * @param {UpdateDeviceDto} updateDeviceDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postDevice(updateDeviceDto: UpdateDeviceDto, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<User> {
            const localVarAxiosArgs = DeviceApiAxiosParamCreator(configuration).postDevice(updateDeviceDto, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DeviceApi - factory interface
 * @export
 */
export const DeviceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Delete associated device from user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDevice(options?: any) {
            return DeviceApiFp(configuration).deleteDevice(options)(axios, basePath);
        },
        /**
         * 
         * @summary Update device id associated with user
         * @param {UpdateDeviceDto} updateDeviceDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postDevice(updateDeviceDto: UpdateDeviceDto, options?: any) {
            return DeviceApiFp(configuration).postDevice(updateDeviceDto, options)(axios, basePath);
        },
    };
};

/**
 * DeviceApi - object-oriented interface
 * @export
 * @class DeviceApi
 * @extends {BaseAPI}
 */
export class DeviceApi extends BaseAPI {
    /**
     * 
     * @summary Delete associated device from user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeviceApi
     */
    public deleteDevice(options?: any) {
        return DeviceApiFp(this.configuration).deleteDevice(options)(this.axios, this.basePath);
    }

    /**
     * 
     * @summary Update device id associated with user
     * @param {UpdateDeviceDto} updateDeviceDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeviceApi
     */
    public postDevice(updateDeviceDto: UpdateDeviceDto, options?: any) {
        return DeviceApiFp(this.configuration).postDevice(updateDeviceDto, options)(this.axios, this.basePath);
    }

}


/**
 * MeasurementsApi - axios parameter creator
 * @export
 */
export const MeasurementsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get latest measurement
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLatest(options: any = {}): RequestArgs {
            const localVarPath = `/api/measurements/latest`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken()
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get measurements of the last x hours, grouped per minute
         * @param {number} [hours] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMeasurements(hours?: number, options: any = {}): RequestArgs {
            const localVarPath = `/api/measurements`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken()
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (hours !== undefined) {
                localVarQueryParameter['hours'] = hours;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MeasurementsApi - functional programming interface
 * @export
 */
export const MeasurementsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get latest measurement
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLatest(options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<MeasurementResult> {
            const localVarAxiosArgs = MeasurementsApiAxiosParamCreator(configuration).getLatest(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get measurements of the last x hours, grouped per minute
         * @param {number} [hours] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMeasurements(hours?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<MeasurementResult>> {
            const localVarAxiosArgs = MeasurementsApiAxiosParamCreator(configuration).getMeasurements(hours, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MeasurementsApi - factory interface
 * @export
 */
export const MeasurementsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Get latest measurement
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLatest(options?: any) {
            return MeasurementsApiFp(configuration).getLatest(options)(axios, basePath);
        },
        /**
         * 
         * @summary Get measurements of the last x hours, grouped per minute
         * @param {number} [hours] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMeasurements(hours?: number, options?: any) {
            return MeasurementsApiFp(configuration).getMeasurements(hours, options)(axios, basePath);
        },
    };
};

/**
 * MeasurementsApi - object-oriented interface
 * @export
 * @class MeasurementsApi
 * @extends {BaseAPI}
 */
export class MeasurementsApi extends BaseAPI {
    /**
     * 
     * @summary Get latest measurement
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MeasurementsApi
     */
    public getLatest(options?: any) {
        return MeasurementsApiFp(this.configuration).getLatest(options)(this.axios, this.basePath);
    }

    /**
     * 
     * @summary Get measurements of the last x hours, grouped per minute
     * @param {number} [hours] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MeasurementsApi
     */
    public getMeasurements(hours?: number, options?: any) {
        return MeasurementsApiFp(this.configuration).getMeasurements(hours, options)(this.axios, this.basePath);
    }

}


/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Register a new user
         * @param {User} user 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addUser(user: User, options: any = {}): RequestArgs {
            // verify required parameter 'user' is not null or undefined
            if (user === null || user === undefined) {
                throw new RequiredError('user','Required parameter user was null or undefined when calling addUser.');
            }
            const localVarPath = `/api/users`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof user !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(user !== undefined ? user : {}) : (user || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get info of authenticated user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(options: any = {}): RequestArgs {
            const localVarPath = `/api/users/me`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken()
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Register a new user
         * @param {User} user 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addUser(user: User, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<User> {
            const localVarAxiosArgs = UsersApiAxiosParamCreator(configuration).addUser(user, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get info of authenticated user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<User> {
            const localVarAxiosArgs = UsersApiAxiosParamCreator(configuration).getUser(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Register a new user
         * @param {User} user 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addUser(user: User, options?: any) {
            return UsersApiFp(configuration).addUser(user, options)(axios, basePath);
        },
        /**
         * 
         * @summary Get info of authenticated user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(options?: any) {
            return UsersApiFp(configuration).getUser(options)(axios, basePath);
        },
    };
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * 
     * @summary Register a new user
     * @param {User} user 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public addUser(user: User, options?: any) {
        return UsersApiFp(this.configuration).addUser(user, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @summary Get info of authenticated user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public getUser(options?: any) {
        return UsersApiFp(this.configuration).getUser(options)(this.axios, this.basePath);
    }

}

