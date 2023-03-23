## 이슈

-   요청시 content-type 형식의 문제 때문에 401 UnAuthorized 문제가 발생했던 것

### nginx 기본 설정

- `sudo nano /etc/nginx/sites-available/default`에서 설정 코드를 보다가 문득 궁금해졌다.
- What is `try_files $uri $uri/ =404;`?

```
When a request is made, Nginx will first try to serve the requested file.
If it cannot find the file, it will try to serve the directory index file.
If it still cannot find a file, it will return a 404 error.
```

- 해당 부분을 지우고 nginx을 재시작하니 app.get('/oauth') 라우팅이 먹는다.
- express가 요청을 받기 전에, nginx 단에서 404를 날리니 생기는 문제였다.

```
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www/html;
    index index.html index.htm index.nginx-debian.html;

    location / {
        # Proxy all requests to the Node.js application
        proxy_pass http://localhost:3001;

        # Set HTTP headers to support WebSocket and prevent caching
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
