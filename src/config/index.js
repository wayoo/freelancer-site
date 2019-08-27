const ENV = process.env.NODE_ENV || 'development';

const config = {
    routerPrefix: {
        pc: ENV === 'development' ? 'pc/' : '',
    },
};

export default config;
