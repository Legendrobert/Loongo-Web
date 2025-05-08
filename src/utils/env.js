// 获取当前环境变量
const isDev = () => {
    return process.env.NODE_ENV === 'development';
};

const isProd = () => {
    return process.env.NODE_ENV === 'production';
};

export { isDev, isProd };