const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");


function copy(done) {
 

  gulp
    .src("./src/components/**/*.sass")
    .pipe(sourcemaps.init())
    .pipe(sass({ errorLogToConsole: true, outputStyle: "compressed" }))
    .on("error", console.error.bind(console))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./src/components"));
  //.pipe();

  
  done();
}
function print(done){
    console.log(":sa");
    done()
}
function wacchSass(){
  gulp.watch("./src/components/**/*.sass", copy);
}

exports.default = gulp.series(print, wacchSass);
