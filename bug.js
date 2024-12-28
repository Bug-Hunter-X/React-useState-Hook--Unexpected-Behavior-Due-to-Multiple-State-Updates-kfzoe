```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, including the initial render
    console.log('Effect ran!');
  }, []); // Empty dependency array means it only runs once on mount

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    // The problem is here.  We're setting state multiple times in a row.
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```