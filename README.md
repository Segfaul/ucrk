
# `UCRK`

FullStack web application for a training center of excellence using React / Django for development and Nginx / Gunicorn for deployment.
___

## *Project Status*

***Completed &#10003;***
___
## Functionality
- React dynamic generation of [child routes](https://github.com/Segfaul/ucrk/blob/23fea9183114f39c20e3f50a783b75f79fda9059/frontend/src/App.js#L31-L52)
- Django [mailer API](https://github.com/Segfaul/ucrk/blob/23fea9183114f39c20e3f50a783b75f79fda9059/backend/api/views.py#L11-L30) using component [hash](https://github.com/Segfaul/ucrk/blob/23fea9183114f39c20e3f50a783b75f79fda9059/frontend/src/components/Uchebni_center.js#L1771-L1799)
- [CI/CD pipeline](https://github.com/Segfaul/ucrk/blob/23fea9183114f39c20e3f50a783b75f79fda9059/.github/workflows/prod.yml#L11-L74) using Github Actions

## Technologies and Frameworks
- Python 3.11
- Django 4.2
- DRF 3.14
- ReactJS 6.0
- PostgreSQL
- CI/CD
- Nginx / Gunicorn
___

## Installation

1. Clone the repository to the local machine

    ```shell
    git clone https://github.com/Segfaul/ucrk.git
    ```

2. Go to the repository directory

    ```shell
    cd ucrk/
    ```

3. Create and activate a virtual environment

    ```shell
    python -m venv env
    source env/bin/activate
    ```

4. Set project dependencies

    ```shell
    pip install -r requirements.txt
    ```


5. Go to /backend directory and configure .env file (similar to .env-ex)

    ```shell
    cd backend/
    nano .env
    ```

6. Go to /frontend directory, install depencies, build project

    ```shell
    cd ../frontend
    npm install
    npm run build
    ```

7. Move back to /backend directory, make migrations & run the application

    ``` python
    cd ../backend
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
    ```

___

## Production

1. Configure mailer platform & api keys in [settings](https://github.com/Segfaul/ucrk/blob/23fea9183114f39c20e3f50a783b75f79fda9059/backend/config/settings.py#L26-L30)

    ```python
    EMAIL_HOST = 'smtp.gmail.com' # mail / yahoo / hotmail / etc...
    EMAIL_USE_TLS = True
    EMAIL_PORT = 587
    EMAIL_HOST_USER = env('EMAIL_HOST_USER')
    EMAIL_HOST_PASSWORD = env('EMAIL_HOST_PASSWORD')
    ```

2. Configure API host & port for [axios client](https://github.com/Segfaul/ucrk/blob/23fea9183114f39c20e3f50a783b75f79fda9059/frontend/src/components/config/client.js#L7-L10)

    ```JS
    const client = axios.create({
        baseURL: 'http://127.0.0.1:8000',
        withCredentials: true,
    });
    ```

3. Configure Gunicorn Socket & Service

    ```shell
    # sudo nano /etc/systemd/system/gunicorn-project.socket

    [Unit]
    Description=gunicorn project socket

    [Socket]
    ListenStream=/run/gunicorn-project.sock

    [Install]
    WantedBy=sockets.target
    ```

    ```shell
    # sudo nano /etc/systemd/system/gunicorn-project.service

    [Unit]
    Description=gunicorn project daemon
    After=network.target

    [Service]
    User=root
    Group=root
    WorkingDirectory=/home/user/path/to/django/
    ExecStart=/home/user/path/to/venv/bin/gunicorn \
        --access-logfile - \
        --workers 3 \
        --bind unix:/run/gunicorn-project.sock \
        config.wsgi:application

    [Install]
    WantedBy=multi-user.target
    ```
    ```shell
    # Start & Enable socket

    sudo systemctl start gunicorn-project.socket
    sudo systemctl enable gunicorn-project.socket
    ```

4. Configure Nginx 

    ```shell
    # sudo nano /etc/nginx/sites-available/project
    server {
        server_name domain_or_ip;
        
        location = /favicon { access_log off; log_not_found off; }

        location / {
            include proxy_params;
            proxy_pass http://unix:/run/gunicorn-project.sock;
        }

        location /static/ {
            root /home/user/path/to/django;
        }

        location /media/ {
            root /home/user/path/to/django;
        }
    }
    ```

    ```shell
    # Copy link on project & Start Nginx
    sudo ln -s /etc/nginx/sites-available/project /etc/nginx/sites-enabled
    sudo systemctl restart nginx
    sudo ufw allow 'Nginx Full'
    ```
___