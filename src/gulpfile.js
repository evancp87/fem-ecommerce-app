/* eslint-disable indent */
/* eslint-disable no-undef */

const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");

// builds html to
function html() {
  return src("*.html").pipe(dest("dist"));
}

// compile scss to css

function generateCSS() {
  // where my scss files are generated
  return (
    src("./style/**/*.scss", { sourcemaps: true })
      //   pass file through sass compiler
      .pipe(sass().on("error", sass.logError))
      .pipe(postcss([cssnano()]))
      //   where do i save compiled sass
      .pipe(dest("dist", { sourcemaps: "." }))
    //   for stream changes for all browsers
    // .pipe(browserSync.stream())
  );
}

function generateJS() {
  return src("./scripts/*.js", { sourcemaps: true }).pipe(
    dest("dist", { sourcemaps: "." })
  );
}

function browserSyncServe(cb) {
  browserSync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}

function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

function watchTask() {
  // watch("*.html").on("change", browserSyncReload);
  watch("*.html", browserSyncReload);
  watch(
    ["./scripts/*.js", "./style/**/*.scss"],
    series(generateCSS, generateJS, browserSyncReload)
  );
}

exports.build = series(
  series(generateCSS, generateJS, html, () =>
    src(["*.html", "./assets/**/*"], { base: "/" }).pipe(dest("dist"))
  )
);

exports.default = series(
  html,
  generateCSS,
  generateJS,
  browserSyncServe,
  browserSyncReload,
  watchTask
);
