import {useState} from "react";

interface Person {
    name: string,
    lastName: string,
    age: Number
}

export function MyFormComponent() {

    const [person, setPerson] = useState<Person>({name: '', lastName: '', age: 0});
    const [persons, setPersons] = useState<Person[]>([]);

    const setPersonHandler = (key: string, value: string) => {

        // this is not way
        // person[key] = value;
        // setPerson(person);

        setPerson(person => ({
            ...person,
            [key]: value
        }))
    };

    const addPersonHandler = () => {
        setPersons(persons => {
            const clonedPersons = [
                ...persons
            ];

            clonedPersons.push(person);

            setPerson({
                name: '',
                lastName: '',
                age: 0
            });

            return clonedPersons;
        })
    };

    return (
        <>
            <div>
                Name form:&nbsp;
                <input type="text" value={person.name} onChange={e => setPersonHandler('name', e.target.value)} /><br />
                Name from form: {person.name}
            </div>

            <div>
                Last name form:&nbsp;
                <input type="text" value={person.lastName} onChange={e => setPersonHandler('lastName', e.target.value)} /><br />
                Last name from form: {person.lastName}
            </div>

            <div>
                Age form:&nbsp;
                <input type="text" value={'' + person.age} onChange={e => setPersonHandler('age', e.target.value)} /><br />
                age from form: {'' + person.age}
            </div>

            <button onClick={addPersonHandler}>Add person</button>

            <ul>
                {persons.map((personItem: Person, idx: number) => {
                    return <li key={`personItem_${idx}`}>{personItem.name} {personItem.lastName}, {'' + personItem.age}</li>
                })}
            </ul>

        </>
    );
}
