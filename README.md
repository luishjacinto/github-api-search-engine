## Rodando em desenvolvimento

- � necess�rio vincular um aplicativo um OAuth App do Github, que pode ser criado em [Developer settings / OAuth Apps](https://github.com/settings/developers). � necess�rio cadastrar o dominio local em que a aplica��o vai rodar, nos campos **Homepage URL** e **Authorization callback URL**, na hora de configurar o aplicativo.

- Criar um arquivo .env.local com as variaveis de ambiente **NEXT_PUBLIC_GITHUB_CLIENT_ID** e **NEXT_PUBLIC_GITHUB_CLIENT_SECRET** sendo respectivamente o **Client ID** e um dos **Client secrets** do aplicativo github.