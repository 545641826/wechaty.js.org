---
title: "Quick Start Guide To Matrix Appservice Wechaty"
author: 545641826
categories:
  - matrix
image: /assets/2021/07-ospp-plan-wechaty-matrix/wechaty-matrix-plan.webp
tags:
  - matrix
---

> Author:[@Rhyme](https://github.com/545641826)

## What is `matrix-appservice-wechaty`

`matrix-appservice-wechaty` is a WeChaty (support wechat) Matrix AppService for bridging the Matrix user with WeChaty user.

> It has been officially listed at [[Matrix] Bridge Page for Wechaty](https://matrix.org/docs/projects/bridge/matrix-appservice-wechaty).
>  
> According to [Types of Bridging](https://matrix.org/docs/guides/types-of-bridging), Wechaty Bot in Matrix will create an [Simple Puppeted Bridge](https://matrix.org/docs/guides/types-of-bridging#simple-puppeted-bridge) with [Portal Rooms](https://matrix.org/docs/guides/types-of-bridging#portal-rooms) because we want to bring all conversations from Wechat to Matrix, and let the Matrix user control his account on Wechat.

## Quick Start

### Requirements

1. A Matrix homeserver that supports application services (e.g. [Synapse](https://github.com/matrix-org/synapse))
2. Docker

### Deploy

The deployment process is divided into two steps:

1. generate a config file to config matrix-synapse with `matrix-appservice-wechaty`.
2. deploy bridge with `matrix-appservice-wechaty`.

#### Config Synapse

genarate synapse config file:

```shell
export MATRIX_DOMAIN=XXX # XXX is the domain of your matrix server. For example, 'little-printf.top'
export MATRIX_HOMESERVER_URL=XXX # XXX is the matrix server url. For example, 'https://matrix.little-printf.top'.
export REGISTRATION_FILE_PATH=XXX # XXX is the path where our config file will generate. Please set it as 'wechaty-registration.yaml', which mean we try to generate config file in curunt path and the name is wechaty-registration.yaml and we can follow this guide better.

export APP_SERVICE_ENDPOINT=XXX # XXX is used by the home server to communite with appservice. Please use the url of your matrix-appservice-wechaty server that you synapse server can access. For example 'http://localhost:8788'

mkdir ~/matrix-appservice-wechaty-deploy-config-path
cd ~/matrix-appservice-wechaty-deploy-config-path
echo "domain: $MATRIX_DOMAIN
homeserverUrl: $MATRIX_HOMESERVER_URL
registration: $REGISTRATION_FILE_PATH
" > config.yaml

docker run --rm wechaty/matrix-appservice \
  --config  config.yaml \
  --url     "$APP_SERVICE_ENDPOINT" \
  --generate-registration
```

After over, we have genarated a synapse config file in `~/matrix-appservice-wechaty-deploy-config-path/wechaty-registration.yaml`. Copy it to you synapse config path (eg: `/matrix/synapse/config/`), and config the synapse homeserver config file (eg: `/matrix/synapse/config/homeserver.yaml`), set `app_service_config_files: ["wechaty-registration.yaml"]`. And restart Synapse by `synctl restart` or `systemctl restart matrix-synapse.service` or `docker restart $(docker ps | grep synapse | awk '{print $1}')`.

#### Launch the Wechaty AppService Bridge

```shell
cd ~/matrix-appservice-wechaty-deploy-config-path
# using web protocols, not support the images which only can show in mobile device.
docker run --rm matrix-appservice-wechaty \
  --config  config.yaml \
  --file    wechaty-registration.yaml
```

#### Using

Then we can start chat with @wechaty:$MATRIX_DOMAIN (eg: @wechaty:little-printf.top) in elements and follow its guide.
