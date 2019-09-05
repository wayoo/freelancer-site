const ENV = process.env.NODE_ENV || 'development';


const config = {
    routerPrefix: {
        pc: ENV === 'development' ? 'pc/' : 'pc/',
        mobile: ENV === 'development' ? 'mobile/' : 'mobile/',
    },
};

export default config;
