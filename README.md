# backend-ci-cd

## Building Virtual Private Server

- Create virtual private server
- Install docker in VM
- Generate private and public key
- Gitlab -> Repo -> Settings -> CI/CD -> Variables

        Staging Server
          - SSH_USR_SETTINGS
          - SSH_STAGING
          - SSH_PRIVATE_KEY_STAGING

        Production Server
          - SSH_USR_PRODUCTION
          - SSH_PRODUCTION
          - SSH_PRIVATE_KEY_PRODUCTION

  - Clone repo to Staging and Production VMs
