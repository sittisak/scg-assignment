# Requirements
- git
- docker 18.09
- docker-compose 1.23
- node.js 10


### 1. Clone
```
$ git clone https://github.com/sittisak/scg-assignment.git && cd scg-assignment/dev
```

### 2. Install all dependencies
```
~scg-assignment/dev$ ./install_dependencies
```

### 3. Run server
```
~scg-assignment/dev$ docker-compose up -d                             // run background 
~scg-assignment/dev$ docker-compose up <back-end, web-console>        // run separate
```

### 4. Server
```
http://localhost:8201
```

### 5. Stop server
```
~scg-assignment/dev$ docker-compose stop
```
