## num-finder
[![](https://img.shields.io/docker/cloud/build/grinat0/num-finder.svg?logo=docker)](https://hub.docker.com/r/grinat0/num-finder) 

Recognize numbers in file and sort by uses count

### Usage
#### With node
```
npm i
npm run show-numbers path-to-file
```

#### With docker
```
docker build -t num-finder .
docker run --rm --name num-finder num-finder -v /host/directory:/container path-to-file-in-mounted-to-container

# for fast check you can use public docker image and fixture file, which located into test/fixtures folder
docker run grinat0/num-finder test/fixtures/file.txt
```


### Development

#### Running tests

```
npm test
```

#### Building a container

```
docker build -t num-finder .
```
