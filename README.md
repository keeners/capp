# capp

[![CircleCI](https://circleci.com/gh/keeners/capp/tree/master.svg?style=svg)](https://circleci.com/gh/keeners/capp/tree/master)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/ambv/black)

Capp is a little project for organizing conference requests for proposals.
It's super basic right now and is meant as a playground for developing a Django app with React.


To get it up and running use the Makefile with docker shortcuts:
```
make up
```

To enter the containers:
```
make enter
make enter_frontend
```

To run the tests:
```
make test
```

To lint:
```
make lint
make lint_frontend
```
