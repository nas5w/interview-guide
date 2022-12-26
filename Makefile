build-docs:
	npm run docs:build

build-blog:
	cd blog && yarn build

copy-blog:
	rm -rf ./docs/.vitepress/dist/images && \
	rm -rf ./docs/.vitepress/dist/blog && \
	cp -r ./blog/dist ./docs/.vitepress/dist/blog && \
	cp -r ./blog/dist/images ./docs/.vitepress/dist/images
