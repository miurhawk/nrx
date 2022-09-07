IMAGE=naturereturns/nrx
BUILDVERSION=0.0.1

.PHONY: build test start push

all: build start
start:
	yarn install
	yarn parcel app/index.html

build:
	yarn install
	yarn run build
	docker build \
		-t "$(IMAGE):$(BUILDVERSION)" \
		--file Dockerfile .

push:
	docker push $(IMAGE):$(BUILDVERSION)

