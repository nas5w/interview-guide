build-docs:
	npm run docs:build

build-blog:
	cd blog && yarn build

copy-blog:
	cp -r ./blog/dist ./docs/.vitepress/dist/blog