import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const a: number | null | undefined = 5;
let b: string | number = 'string';


function test() {}

const func = function(a: number, b: number): number {
    return a+b;
};
const func2 = (a: number, b: number): number => {
    return a+b;
};
const func3 = (a: number, b: number): number => a + b;

const func4 = (a: number): number => a * a;


class Class {

    readonly propertyOne: number;

    constructor() {
        this.propertyOne = 0;
    }

    getPropertyOne() {
        return this.propertyOne;
    }
}

const array = [0, 1, 3];
const array2 = [{}, {}, {}];

interface Person {
    name: string,
    lastName: string,
    city?: string | null,
}

const personObj: Person = {
    name: 'Tomas',
    lastName: 'Pesek',
    city: null
};

console.log('person object attribute name is: ' + personObj.name);
console.log(`person object attribute name is: ${personObj.name}`);


const personObj2: Person = {
    ...personObj,
    city: 'Pardubice'
}

type Department  = {
    person: Person,
    department: string
};

const departmentOnj: Department = {
    person: personObj,
    department: 'IT',
};

const departmenList: Department[] = [departmentOnj]



console.log(personObj.name);

if (a < 10) {

}


const e = 10;
if (e == 10) {}
if (e === 10) {}

for (let i = 0; i < array.length; i++) {

}

array.forEach(function (element) {});
array.forEach((element) => {});
array.forEach(element => {});
array.forEach(element => console.log(element));






interface AppPropsInterface {
    name: string
    name2: string
}


console.log(personObj, a, b, array);

function App({ name }: AppPropsInterface) {

    const [count, setCount] = useState(0)

    const [listOfNames, setListOfNames] = useState([
        'Michal',
        'Petr',
        'Milan',
    ]);


    const onClickHandler = () => {
        setCount((count) => count + 1)

        const newListOfNames = [
            ...listOfNames,
            'Name ' + count
        ];


        setListOfNames(newListOfNames);
    }




  return (
    <>


        Name of component: {name}

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onClickHandler}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


        second use of counter: {count}

        <ul>
            {listOfNames.map((name, index) => {
                return <li key={`nameElement_${index}`}>
                    <input type="checkbox"/>
                    <strong>{name}</strong>
                    <span>X</span>
                </li>
            })}
        </ul>

    </>
  )
}

export default App
