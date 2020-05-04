const { watch, src, series, dest } = require(`gulp`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;

let copyCSS = () => {
    return src(`css/*.css`)
        .pipe(dest(`prod/css/`));
};

let copyJS = () => {
    return src(`js/*.js`)
        .pipe(dest(`prod/js/`));
};

let dev = () => {
    browserSync({
        server: {
            baseDir: [
                `html`,
                `prod`
            ]
        }
    });
    watch([`html/**/*.html`, `css/*.css`, `js/*.js`]).on(`change`, reload);
};

exports.build = series(copyCSS, copyJS);
exports.dev = dev;
