self.__uv$config = {
    prefix: '/service/',
    bare: 'https://ensuremath.com/api/bare/',
    encodeUrl: Ultraviolet.codec.base64.encode,
    decodeUrl: Ultraviolet.codec.base64.decode,
    handler: 'https://cdn.jsdelivr.net/gh/DoxrGitHub/uvhost/uv/uv.handler.js',
    bundle: 'https://cdn.jsdelivr.net/gh/DoxrGitHub/uvhost/uv/uv.bundle.js',
    config: 'https://cdn.jsdelivr.net/gh/DoxrGitHub/uvhost/uv/uv.config.js',
    sw: 'https://cdn.jsdelivr.net/gh/DoxrGitHub/uvhost/uv/uv.sw.js',
};
