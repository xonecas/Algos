all: lint docs module

lint:
	@echo "----> Linting JS..."
	jslint --browser true --node true --white true {src/js,test}/*.js
	uglifyjs --lint {src/js,test}/*.js > /dev/null

docs:
	@echo "----> Making docs..."
	docco -c css/docco.css src/js/*.js

module:
	@echo "----> Creating Module..."
	uglifyjs -c -m --wrap 'algos' src/js/*.js > algos.min.js
	uglifyjs -b --wrap 'algos' src/js/*.js > algos.js

clean:
	rm -rf docs algos*

test: lint module
	@echo "----> Testing..."
	node test/quicksort.js
	node test/mergesort.js

.PHONY: docs module
