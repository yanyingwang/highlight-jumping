# highlight-jumping
highlight the text from jumping


# dev building to publish browser plugin
~~~shell
zip -r -FS ../highlight-jumping.zip * --exclude '*.git*' '.*' '*__MACOSX/*' 'images-back*'  'LICENSE' 'screenshot/*' '*.DS_Store'
cd .. && tar -czvf highlight-jumping.tar.gz highlight-jumping
~~~
