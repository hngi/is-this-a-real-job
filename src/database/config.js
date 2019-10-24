import {
    DEV_DATABASE_URL,
    TEST_DATABASE_URL,
    PROD_DATABASE_URL,
} from '../config/constants';

module.exports = {
    development: {
        use_env_variable: true,
        url: DEV_DATABASE_URL,
        dialect: 'mysql',
    },
    test: {
        use_env_variable: true,
        url: TEST_DATABASE_URL,
        dialect: 'mysql',
    },
    production: {
        use_env_variable: true,
        url: PROD_DATABASE_URL,
        dialect: 'mysql',
    },
};
