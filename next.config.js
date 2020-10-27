const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
module.exports = withCSS(withSass({
   webpack (config, options) {
       config.module.rules.push({
           test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
           use: {
               loader: 'url-loader',
               options: {
                   limit: 100000
               }
           }
       });

       return config;
   },
    env: {
        NEWS_API_KEY:'65df09505a70bbe41605c6b4a4e38ce2'
    },
}
));