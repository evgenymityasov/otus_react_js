import { createInterface } from 'readline';
import { runner } from './runner';

const readLine = createInterface({
    input: process.stdin,
    output: process.stdout
});

const getCalc = (): Promise<null> => 
    new Promise(resolve => {
        readLine.question("> ", (answer: string) => {
            console.log(runner(answer));

            resolve();
        });
    });


async function entry(): Promise<null> {
    while(true){
        await getCalc();
    }
}

entry();