const debounce = (func: () => void, delay: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };
}

export { debounce };