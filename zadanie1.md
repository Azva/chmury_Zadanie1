Opracowanie zadania 1 - Magdalena Skrzypiec

3.
a) docker build -t zad1 .
#komenda wykonana w katalogu z kodem źródłowym
b) docker run -p 3000:80 -d --rm --name test1 zad1
#zmapowanie dowolnego portu na port 80 aplikacji
c) docker logs test1
d) docker inspect zad1

4.
docker run --rm --privileged multiarch/qemu-user-static --reset -p yes
docker buildx build -t mskrz/labs:zad1 --platform linux/arm/7,linux/arm64/v8,linux/amd64 --push .

