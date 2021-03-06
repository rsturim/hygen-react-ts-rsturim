module.exports = {
    prompt: ({ inquirer }) => {
        const questions = [
            {
                type: "input",
                name: "name",
                message: "What is the component name?",
            },
            {
                type: "select",
                name: "type",
                message: "Choose the type of your component",
                choices: [
                    {
                        message: "TypeScript - React Arrow Function Component",
                        value: "functional-typescript",
                    },
                    {
                        message: "TypeScript - Stateful Component",
                        value: "stateful-typescript",
                    },
                ],
            },
            {
                type: "select",
                name: "path",
                message: "Choose a destination for you component",
                choices: [
                    {
                        message: "App components",
                        value: "./src/components",
                    },
                    {
                        message: "UI components",
                        value: "./src/components/ui",
                    },
                ],
            },
            {
                type: "toggle",
                message: "Do you want to include a test file?",
                name: "includeTest",
                enabled: "Heck Yeah",
                disabled: "Nope",
            },
            {
                type: "toggle",
                message: "Do you want to include an imported style sheet?",
                name: "includeCss",
                enabled: "For sure",
                disabled: "Nope",
            },
        ];
        return inquirer.prompt(questions).then((answers) => {
            const { type } = answers;
            let extension = "ts";
            let componentExt = "tsx";

            return { ...answers, extension, componentExt };
        });
    },
};
