FROM node:14.18-alpine3.12

# コマンド実行
# linux 最新化、gitインストール、npm最新化、vue-cliインストール
RUN apk update && \
 apk add git && \
 npm install -g npm && \
 npm install -g vue-cli

RUN git clone https://github.com/keiichi-hikita/gke-iap.git
RUN chmod 755 /gke-iap/run.sh

RUN cd gke-iap && \
  npm install

EXPOSE 3333

CMD ["/gke-iap/run.sh"]
