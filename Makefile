all: lint docs module

lint:
	@echo "----> Linting JS..."
	jslint --browser true --node true --white true js/algos.js
	uglifyjs --lint js/algos.js > /dev/null
	jslint --browser true --node true --white true test/*.js
	uglifyjs --lint test/*.js > /dev/null

docs:
	@echo "----> Making docs..."
	docco -c css/docco.css js/algos.js

module:
	@echo "----> Creating Module..."
	cat js/{head,algos,tail}.js | uglifyjs -c -m > algos.min.js
	cat js/{head,algos,tail}.js | uglifyjs -b > algos.js

clean:
	rm -rf docs algos.min.js

test: lint module
	@echo "----> Testing..."
	node test/sorts.js
	node test/levs.js

.PHONY: lint docs module clean test
