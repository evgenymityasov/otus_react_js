import { createInterface } from 'readline';

const readLine = createInterface({
    input: process.stdin,
    output: process.stdout
});

const getCalc = (): Promise<null> => 
    new Promise(resolve => {
        readLine.question("> ", (answer: string) => {
            console.log(answer);

            resolve();
        });
    });


async function entry(): Promise<null> {
    while(true){
        await getCalc();
    }
}

entry();