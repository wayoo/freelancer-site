const ENV = process.env.NODE_ENV || 'development';


const config = {
    routerPrefix: {
        pc: ENV === 'development' ? 'pc/' : '',
        mobile: ENV === 'development' ? 'mobile/' : '',
    },
};

export default config;
