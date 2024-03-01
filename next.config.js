// next.config.js
module.exports = {
    assetPrefix: '/gittan_homepage/',
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        // 추가적으로 더 많은 페이지가 있다면 여기에 라우트를 명시하세요.
      };
    },
  };
  