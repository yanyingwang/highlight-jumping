# highlight-jumping
Highlight target text when clicking a hash link and jumping, this is especially useful for a [Racket doc website](https://docs.racket-lang.org/).


## install
for using within Firefox go to <https://addons.mozilla.org/zh-CN/firefox/addon/highlight-jumping/>.


## dev building to publish browser plugin
~~~shell
zip -r -FS ../highlight-jumping.zip * --exclude '*.git*' '.*' '*__MACOSX/*' 'images-back*'  'LICENSE' 'screenshot/*' '*.DS_Store'
cd .. && tar -czvf highlight-jumping.tar.gz highlight-jumping
~~~
