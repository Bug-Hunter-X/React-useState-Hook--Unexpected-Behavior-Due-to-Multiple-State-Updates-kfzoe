```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran!');
  }, []);

  const handleClick = () => {
    // Solution: Use a single state update within the function
    setCount(prevCount => prevCount + 2);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```