import {ACTOR_EVENT_NAMES} from 'apify-shared/consts';
export * from 'apify-shared/consts';

export const DEFAULT_USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36'; // eslint-disable-line max-len

/**
 * Exit codes for the act process.
 * The error codes must be in range 1-128, to avoid collision with signal exits
 * and to ensure Docker will handle them correctly!
 */
export const EXIT_CODES = {
    SUCCESS: 0,
    ERROR_USER_FUNCTION_THREW: 91,
    ERROR_UNKNOWN: 92,
};

/**
 * These events are just internal for Apify package so we don't need them
 * in apify-shared package.
 */
ACTOR_EVENT_NAMES.PERSIST_STATE = 'persistState';

export declare const ENV_VARS: {
    [key: string]: string
};

export declare const LOCAL_EMULATION_SUBDIRS: {
    datasets: string,
    keyValueStores: string,
    requestQueues: string
};
