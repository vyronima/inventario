// vue.config.js
module.exports = {
    devServer: {
        proxy: {
        '/productos': {
          target: 'http://localhost:3000',  // URL de tu servidor backend
          changeOrigin: true,              // Cambia el origen de la solicitud
          secure: false,                  // Deshabilitar el SSL si estás usando HTTP
        },
        },
    },
};
