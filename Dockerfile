FROM php:8.2-cli

RUN apt-get update && apt-get install -y unzip curl git

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app

COPY composer.json composer.lock /app/

RUN composer install --ignore-platform-reqs --no-scripts --no-interaction --prefer-dist

COPY . /app

EXPOSE 10000

CMD ["php", "-S", "0.0.0.0:10000", "-t", "."]
