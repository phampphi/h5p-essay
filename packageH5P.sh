dirname='./_h5p/H5P.Essay-1.5/'
cp -rf ./scripts/* "./${dirname}/scripts/"
cp -rf ./styles/* "./${dirname}/styles/"
cp -f ./library.json "${dirname}"
cp -f ./semantics.json "${dirname}"
cd _h5p 
zip -vrDX '../essay.h5p' * -x '*.DS_Store'