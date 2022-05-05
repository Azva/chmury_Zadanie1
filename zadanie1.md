# Opracowanie zadania 1

## 3.

a) ```docker build -t zad1 .```
 komenda wykonana w katalogu z kodem źródłowym

b) ```docker run -p 3000:80 -d --rm --name test1 zad1```
 zmapowanie portu 3000 na port 80 aplikacji

c) ```docker logs test1```

d) ```docker inspect zad1```

## 4.

```
docker run --rm --privileged multiarch/qemu-user-static --reset -p yes
docker buildx build -t mskrz/labs:zad1 --platform linux/arm/7,linux/arm64/v8,linux/amd64 --push .
```

## Dodatek 1.

W pliku .github/workflows/actions.yml do tworzenia obrazu na Dockerhub wykorzystywany jest cache. Poprawność metody jest widoczna w zakładce actions
(Dodatek1 #7, Build and push):

+ #11 importing cache manifest from \*\*\*/labs:zad1dod1_cache
+ #11 ...
+ #27 exporting cache
+ #27 preparing build cache for export

Przesłanie danych na repozytorium Github wymaga stworzenia tokenu dla konta Github. Wpis w pliku actions.yml różni się tylko inną nazwą 
tagowanego obrazu oraz dodatkowym polem "registry".

## Dodatek 2.

```docker run -d -p 6677:5000 --restart always --name registry registry:2```
 uruchomienie registry jako demona, zmapowanie portu 6677

```docker pull ubuntu```
 najnowszy obraz ubuntu

```docker tag ubuntu localhost:6677/ubuntu_new```
 zmiana nazwy obrazu

```docker push localhost:6677/ubuntu_new```
 wgranie do lokalnego rejestru


