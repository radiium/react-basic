import { useState } from 'react';

export default function useArray<T>(defaultValue: T[]) {
    const [array, setArray] = useState(defaultValue);

    function push(item: T) {
        setArray((arr) => [...arr, item]);
    }

    function filter(callback: (value: T) => boolean) {
        setArray((arr) => arr.filter(callback));
    }

    function update(index: number, item: T) {
        setArray((arr) => [...arr.slice(0, index), item, ...arr.slice(index + 1, arr.length)]);
    }

    function remove(index: number) {
        setArray((arr) => [...arr.slice(0, index), ...arr.slice(index + 1, arr.length)]);
    }

    function clear() {
        setArray([]);
    }

    return { array, set: setArray, push, filter, update, remove, clear };
}
