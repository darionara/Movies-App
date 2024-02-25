/* tslint:disable */
/* eslint-disable */
/**
 * Movies API
 * The movies API description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface Genre
 */
export interface Genre {
    /**
     * Genre id
     * @type {number}
     * @memberof Genre
     */
    'id': number;
    /**
     * Genre name
     * @type {string}
     * @memberof Genre
     */
    'name': string;
}
/**
 * 
 * @export
 * @interface GenresList
 */
export interface GenresList {
    /**
     * List of genres
     * @type {Array<Genre>}
     * @memberof GenresList
     */
    'genres': Array<Genre>;
}
/**
 * 
 * @export
 * @interface Keyword
 */
export interface Keyword {
    /**
     * Keyword id
     * @type {number}
     * @memberof Keyword
     */
    'id': number;
    /**
     * Keyword name
     * @type {string}
     * @memberof Keyword
     */
    'name': string;
}
/**
 * 
 * @export
 * @interface KeywordsList
 */
export interface KeywordsList {
    /**
     * List of keywords
     * @type {Array<Keyword>}
     * @memberof KeywordsList
     */
    'genres': Array<Keyword>;
}
/**
 * 
 * @export
 * @interface ListMovie
 */
export interface ListMovie {
    /**
     * Url to poster image
     * @type {string}
     * @memberof ListMovie
     */
    'poster_image': string;
    /**
     * 
     * @type {number}
     * @memberof ListMovie
     */
    'id': number;
    /**
     * Average rate of the movie
     * @type {number}
     * @memberof ListMovie
     */
    'rate': number;
    /**
     * Date of release in format: YYYY-MM-DD
     * @type {string}
     * @memberof ListMovie
     */
    'release_date': string;
    /**
     * Title of the movie
     * @type {string}
     * @memberof ListMovie
     */
    'title': string;
}
/**
 * 
 * @export
 * @interface TopRated
 */
export interface TopRated {
    /**
     * The list of movies
     * @type {Array<ListMovie>}
     * @memberof TopRated
     */
    'data': Array<ListMovie>;
    /**
     * 
     * @type {TopRatedMeta}
     * @memberof TopRated
     */
    'meta': TopRatedMeta;
}
/**
 * List meta data
 * @export
 * @interface TopRatedMeta
 */
export interface TopRatedMeta {
    /**
     * 
     * @type {number}
     * @memberof TopRatedMeta
     */
    'page'?: number;
    /**
     * 
     * @type {number}
     * @memberof TopRatedMeta
     */
    'total_pages'?: number;
    /**
     * 
     * @type {number}
     * @memberof TopRatedMeta
     */
    'total_results'?: number;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get list of genres
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        genreControllerFindAll: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/genre`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get list of keywords
         * @param {string} query Query
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        keywordControllerFindAll: async (query: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'query' is not null or undefined
            assertParamExists('keywordControllerFindAll', 'query', query)
            const localVarPath = `/keyword`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (query !== undefined) {
                localVarQueryParameter['query'] = query;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get list of favorite movies
         * @param {number} [page] Current page
         * @param {string} [keywords] List of keywords IDs to filter with - IDs separated with \&quot;|\&quot; symbol
         * @param {number} [minUserVotes] Minimum count of user\&#39;s votes
         * @param {string} [averageVotes] The range of minimum and maximum votes
         * @param {string} [genres] List of genres IDs to filter with. Ids separated with \&quot;|\&quot; symbol
         * @param {string} [sort] Sorting options
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        topRatedControllerFindAll: async (page?: number, keywords?: string, minUserVotes?: number, averageVotes?: string, genres?: string, sort?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/top-rated`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (keywords !== undefined) {
                localVarQueryParameter['keywords'] = keywords;
            }

            if (minUserVotes !== undefined) {
                localVarQueryParameter['min_user_votes'] = minUserVotes;
            }

            if (averageVotes !== undefined) {
                localVarQueryParameter['average_votes'] = averageVotes;
            }

            if (genres !== undefined) {
                localVarQueryParameter['genres'] = genres;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get list of genres
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async genreControllerFindAll(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GenresList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.genreControllerFindAll(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.genreControllerFindAll']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Get list of keywords
         * @param {string} query Query
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async keywordControllerFindAll(query: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<KeywordsList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.keywordControllerFindAll(query, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.keywordControllerFindAll']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Get list of favorite movies
         * @param {number} [page] Current page
         * @param {string} [keywords] List of keywords IDs to filter with - IDs separated with \&quot;|\&quot; symbol
         * @param {number} [minUserVotes] Minimum count of user\&#39;s votes
         * @param {string} [averageVotes] The range of minimum and maximum votes
         * @param {string} [genres] List of genres IDs to filter with. Ids separated with \&quot;|\&quot; symbol
         * @param {string} [sort] Sorting options
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async topRatedControllerFindAll(page?: number, keywords?: string, minUserVotes?: number, averageVotes?: string, genres?: string, sort?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TopRated>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.topRatedControllerFindAll(page, keywords, minUserVotes, averageVotes, genres, sort, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['DefaultApi.topRatedControllerFindAll']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Get list of genres
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        genreControllerFindAll(options?: RawAxiosRequestConfig): AxiosPromise<GenresList> {
            return localVarFp.genreControllerFindAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get list of keywords
         * @param {DefaultApiKeywordControllerFindAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        keywordControllerFindAll(requestParameters: DefaultApiKeywordControllerFindAllRequest, options?: RawAxiosRequestConfig): AxiosPromise<KeywordsList> {
            return localVarFp.keywordControllerFindAll(requestParameters.query, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get list of favorite movies
         * @param {DefaultApiTopRatedControllerFindAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        topRatedControllerFindAll(requestParameters: DefaultApiTopRatedControllerFindAllRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<TopRated> {
            return localVarFp.topRatedControllerFindAll(requestParameters.page, requestParameters.keywords, requestParameters.minUserVotes, requestParameters.averageVotes, requestParameters.genres, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for keywordControllerFindAll operation in DefaultApi.
 * @export
 * @interface DefaultApiKeywordControllerFindAllRequest
 */
export interface DefaultApiKeywordControllerFindAllRequest {
    /**
     * Query
     * @type {string}
     * @memberof DefaultApiKeywordControllerFindAll
     */
    readonly query: string
}

/**
 * Request parameters for topRatedControllerFindAll operation in DefaultApi.
 * @export
 * @interface DefaultApiTopRatedControllerFindAllRequest
 */
export interface DefaultApiTopRatedControllerFindAllRequest {
    /**
     * Current page
     * @type {number}
     * @memberof DefaultApiTopRatedControllerFindAll
     */
    readonly page?: number

    /**
     * List of keywords IDs to filter with - IDs separated with \&quot;|\&quot; symbol
     * @type {string}
     * @memberof DefaultApiTopRatedControllerFindAll
     */
    readonly keywords?: string

    /**
     * Minimum count of user\&#39;s votes
     * @type {number}
     * @memberof DefaultApiTopRatedControllerFindAll
     */
    readonly minUserVotes?: number

    /**
     * The range of minimum and maximum votes
     * @type {string}
     * @memberof DefaultApiTopRatedControllerFindAll
     */
    readonly averageVotes?: string

    /**
     * List of genres IDs to filter with. Ids separated with \&quot;|\&quot; symbol
     * @type {string}
     * @memberof DefaultApiTopRatedControllerFindAll
     */
    readonly genres?: string

    /**
     * Sorting options
     * @type {string}
     * @memberof DefaultApiTopRatedControllerFindAll
     */
    readonly sort?: string
}

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Get list of genres
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public genreControllerFindAll(options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).genreControllerFindAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get list of keywords
     * @param {DefaultApiKeywordControllerFindAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public keywordControllerFindAll(requestParameters: DefaultApiKeywordControllerFindAllRequest, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).keywordControllerFindAll(requestParameters.query, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get list of favorite movies
     * @param {DefaultApiTopRatedControllerFindAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public topRatedControllerFindAll(requestParameters: DefaultApiTopRatedControllerFindAllRequest = {}, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).topRatedControllerFindAll(requestParameters.page, requestParameters.keywords, requestParameters.minUserVotes, requestParameters.averageVotes, requestParameters.genres, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }
}



