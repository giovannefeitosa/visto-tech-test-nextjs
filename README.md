# Visto.Countries

This project was created to show the countries of the world and their respective information.

## Getting Started

To get started, you need to clone the project and install the dependencies.

```
npm install
```

It's very important to create a .env file in the root of the project with the following variables:

```
OPENAI_API_KEY='<your-openai-key-here>'
OPENAI_MODEL='gpt-4'
```

* You can get your OpenAI API key [here](https://platform.openai.com/account/api-keys)
* You can copy the model name from [here](https://platform.openai.com/docs/models)
* You can use `.env.example` as a template for your `.env` file

Then you can run the project locally:

```
npm run dev
```

or without hot reload:

```
npm run start
```
