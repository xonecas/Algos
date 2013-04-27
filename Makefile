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
	uglifyjs src/js/*.js -c -m --wrap algos > algos.min.js
	uglifyjs src/js/*.js -b --wrap algos > algos.js

clean:
	rm -rf docs algos*

test: lint module
	@echo "----> Testing..."
	node test/quicksort.js
	node test/mergesort.js
	node test/insertionsort.js

.PHONY: docs module
