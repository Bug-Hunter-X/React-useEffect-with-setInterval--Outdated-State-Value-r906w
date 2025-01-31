```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using count in the setInterval callback
    const intervalId = setInterval(() => {
      console.log(count); // This will always log the initial value of count (0)
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```